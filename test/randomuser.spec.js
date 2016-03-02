import randomuserModule from '../src/index';
import bundle from '../dist/bundle';

runTests('Randomuser plugin', randomuserModule);
runTests('Build randomuser plugin', bundle);

function runTests(name, randomuser) {
	describe(name, function () {
		let userOne, userTwo, userThree, userFour;

		it('should return some stuff', function () {
			let generator = randomuser({ iterations: 3 });

			userOne = generator.next().value;
			userTwo = generator.next().value;
			userThree = generator.next().value;
			userFour = generator.next().value;
		});

		it('should have three random users', function () {
			return Promise.all([userOne, userTwo, userThree])
				.then(function (users) {
					users.forEach(function (user) {
						user.gender.should.be.oneOf(['male', 'female']);
						user.name.first.should.be.a.String();
						user.email.should.be.a.String();
						user.dob.should.be.a.Number();
					});
				});
		});

		it('should have no more than three', function () {
			return userFour.catch(function (e) {
				e.message.should.equal('No more users');
			});
		});
	});
}
