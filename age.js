this.birth_year = 2002;

const user = {
	name: 'akdhadl',
	isEmployed: false,
	birth_year: 2002,
	age: console.log('window-', this),
	calcAge: function (curr_year) {
		console.log(this);
		return this.birth_year;
	},
};
console.log(user);
console.log(user.calcAge(2));
