const user2 = {
	username: 'ankit',
	loginCount: 8,
	signedIn: true,
	
	getUserDetails: function(){
	console.log(this)
	}
} 

console.log(user2.username)
console.log(user2.getUserDetails());
console.log(this)