import regeneratorRuntime from 'regenerator/runtime-module'; // eslint-disable-line
import fetch from 'node-fetch';

export default function* randomuser(options) {
	const url = `https://randomuser.me/api/?results=${options.iterations}`;
	const userPromise = fetch(url).then((res) => res.json());

	while (true) {
		yield userPromise.then(function (data) {
			// This function has side effects: it destroys the original data
			const user = data.results.shift();

			if (typeof user === 'undefined') {
				throw new Error('No more users');
			}

			return user.user;
		});
	}
}
