// let name;
// let age;
// let user = {
// 	name: "John",
// 	age: 30,
// 	office: "Bhikaji Cama Place",
// 	pincode: 110066,
// };


// console.log(user.name);
// console.log(user);

// user.isAdmin = true;
// console.log(user);

// delete user.age;
// console.log(user);


// user['likes birds'] = true;
// console.log(user);

// delete user['likes birds'];


// // let key = prompt("What do you want to know ", "name");
// // console.log(user[key]);

// console.log(user.pincode);


function makeUser(name, age){
	return{
		name: name,
		age: age,
	};
}

let user = makeUser("John", 30);
console.log(user.name)

let obj = {
	0: "test",
};

console.log(obj["0"]);
console.log(obj[0]);
console.log(obj['0'] === obj[0])