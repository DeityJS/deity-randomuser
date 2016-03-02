# deity-randomuser

A [randomuser.me] plugin for [Deity].

## Installation

```
$ npm install --save-dev deity-randomuser
```

## Usage

```
var deity = require('deity');
var randomuser = require('deity-randomuser');

deity.extend(randomuser);

deity('randomuser', function (user) {
	// user will be a random user :D
});
```

## License

Released under the MIT license.


[randomuser.me]: https://randomuser.me/
[Deity]: http://deityjs.com/
