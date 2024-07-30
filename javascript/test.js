// const promiseOne = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('Async task is complete');
//         resolve()
//     }, 1000)
// })

// promiseOne.then(function(){
//     console.log('Promise consumed');
// })

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('Async task 2');
//         resolve()
//     }, 1000)
// }).then(function(){
//     console.log('Async 2 resolved');
// })

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         resolve({username: "Chai", email: "chai@code.com"})
//     }, 1000);
// })

// promiseThree.then((user) => {
//     console.log(user);
// })

// const promiseFour = new Promise((resolve, reject) =>{
//     setTimeout(() =>{
//         let error = false
//         if(!error){
//             resolve({username: 'Ankit', password: '12345'})
//         }else{
//             reject('ERROR: Something went wrong')
//         }
//     }, 1000)
// })

// promiseFour.then((user) =>{
//     console.log(user);
//     return user.password
// }).then((ankit) => {
//     console.log(ankit);
// }).catch((prasad) => {
//     console.log(prasad);
// }).finally(() => console.log('The promise has been solved or rejected'))


// const promiseFive = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = true;
//     if (!error) {
//       resolve({ username: "Javascript", password: "12345" });
//     } else {
//       reject("ERROR: JS went wrong");
//     }
//   }, 1000);
// });

// async function consumePromiseFive() {
//   try {
//     const response = await promiseFive;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }

// consumePromiseFive();

// async function getAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("E :, error");
//   }
// }

// getAllUsers();


// fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
//     return response.json()
// }).then((data) =>{console.log(data);}).catch((error) => console.log(error))




// console.log('Program Started')

// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Progress complete')
//     }, 2000)
// })

// console.log(myPromise);
// console.log('Program in progress...');

// myPromise.then((value) => {
//     console.log(value);
// })



// console.log("Program started");

// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve()
//     }, 3000);

//     setTimeout(() => {
//         reject()
//     }, 2000);
// })

// console.log(myPromise);
// console.log('Program in progress...');

// myPromise.then(() =>{
//     console.log('Program complete');
// }).catch(() => {
//     console.log('Program failure');
// })




// console.log('Program started')

// const myPromise = new Promise((resolve, reject) =>{
//     setTimeout(() => {
//         resolve()
//     }, 3000);

// })

// console.log(myPromise)
// console.log('Program in progress...')

// myPromise.then(() => {
//     console.log('Step 1 complete')

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Step 2 Complete')
//         }, 3000);
//     })
// }).then((value) => {
//     console.log(value);
// })





