// 6 static methods of Promise Object

// 1.Promise.all

// Promise.all([
//     new Promise(resolve => setTimeout(() => resolve(1), 3000)),
//     new Promise(resolve => setTimeout(() => resolve(2), 2000)),
//     new Promise(resolve => setTimeout(() => resolve(3), 1000))

// ]).then((result) => console.log(result));


// fetch('https://api.github.com/users/Leutenantrana')
//     // .then(response => console.log(`${response.url} : ${response.status}`))
//     .then(response => response.json())
//     .then((data) => {
//         console.log(data);
//         console.log(data.name);
//         console.log(data.login);
//     })
//     .catch(error => console.log("Error: ", error))



// fetch('https://api.github.com/users/Leutenantrana')
//     .then(response => response.json())
//     .then(data => {
//         const avatarContainer = document.getElementById('avatar-container');
//         const img = document.createElement('img')
//         img.src = data.avatar_url;
//         img.alt = 'Avatar';
//         const infoContainer = document.getElementById('info-container')

//         const bioParaGraph = document.createElement('p');
//         bioParaGraph.textContent = `Bio: ${data.bio}`

//         const locationParagraph = document.createElement('p');
//         locationParagraph.textContent = `Location: ${data.location}`

//         avatarContainer.appendChild(img);
//         infoContainer.appendChild(bioParaGraph)
//         infoContainer.appendChild(locationParagraph)

//     })
//     .catch(error => console.error('Error: ', error))



// let urls = [
//     'https://api.github.com/users/iliakan',
//     'https://api.github.com/users/remy',
//     'https://api.github.com/users/Leutenantrana'
// ];

// // map every url to the promise of the fetch
// let requests = urls.map(url => fetch(url));

// // Promise.all waits until all jobs are resolved
// Promise.all(requests)
//     .then(responses => responses.forEach(
//         response => console.log(`${response.url} : ${response.status}`)

//     ));


// Promise.all uses 
// let names = ['Leutenantrana', 'tanulamba10'];

// let requests = names.map(name => fetch(`https://api.github.com/users/${name}`));

// Promise.all(requests)
//     .then(responses => {
//         for (let response of responses) {
//             // console.log(response)
//             console.log(`${response.url} : ${response.status}`)
//         }
//         return responses
//     })
//     .then(responses => Promise.all(responses.map(r => r.json())))
//     .then(users => users.forEach((user) => {
//         console.log(` username: ${user.name} , loginId : ${user.login}`)
//         console.log(user.bio)
//             // console.log(user)

//     }))


// handling error by Promise.all

// Promise.all([
//     new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
//     new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
//     new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))

// ]).catch((error) => {
//     console.log(error)
// })

// Promise.allSettled //

// let urls = [
//     'https://api.github.com/users/iliakan',
//     'https://api.github.com/users/remy',
//     'https://no-such-url'
// ];

// Promise.allSettled(urls.map(url => fetch(url)))
//     .then(results => {
//         console.log(results)
//         results.forEach((result, num) => {
//             if (result.status == 'fulfilled') {
//                 console.log(`${urls[num]} : ${result.value.status} `);
//             }
//             if (result.status == 'rejected') {
//                 console.log(`${urls[num]} : ${result.reason}`);
//             }
//         })
//     })

// // if Promise.allSettled is not present 

// if(!Promise.allSettled){
//   const rejectHandler = reason => ({ status : 'rejected', reason})
//   const resolveHandler = value => ({ status : 'fulfilled', value})
// }

// Promise.race  
//  first settled promise
// Promise.race([
//     new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
//     new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 1000)),
//     new Promise((resolve, reject) => setTimeout(() => resolve(3), 500))
// ]).then((results) => {
//     console.log(results)
// })


// Promise.any 
// first fullfilled promise

// Promise.any([
//     new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 100)),
//     new Promise((resolve, reject) => setTimeout(() => resolve(1), 2000)),
//     new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
// ]).then((results) => {
//     console.log(results)
// })

// Promise.any([
//     new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ouch!")), 1000)),
//     new Promise((resolve, reject) => setTimeout(() => reject(new Error("Error!")), 2000))
// ]).catch(error => {
//     console.log(error.constructor.name); // AggregateError
//     console.log(error.errors[0]); // Error: Ouch!
//     console.log(error.errors[1]); // Error: Error!
// });

// async function f() {
//     return 1;
// }

// f().then((result) => console.log(result))


// async function f() {
//     return Promise.resolve(1);
// }

// let target = {};

// let proxy = new Proxy(target, {});

// proxy.test = 5;
// console.log(proxy.test);
// console.log(target.test);

// for (let key in proxy) console.log(key)


//  get(target, property, receiver)

// let numbers = [0, 1, 2];

// numbers = new Proxy(numbers, {
//     get(target, prop) {
//         if (prop in target) {
//             return target[prop]
//         } else {
//             return 0;
//         }
//     }
// });

// alert(number[1]);
// alert(number[123]);


// modifing getter of a proxy

// let dictionary = {
//     'Hello': 'Hola',
//     'Bye': 'Adios'

// };

// dictionary = new Proxy(dictionary, {
//     get(target, phrase) {
//         if (phrase in target) {
//             return target[phrase];
//         } else {
//             return `No word like ${phrase}`
//         }
//     }


// });

// console.log(dictionary['Hello'])
// console.log(dictionary['Welcome to Proxy'])


//set trap 

// let numbers = [];

// numbers = new Proxy(numbers, {
//     set(target, prop, val) {
//         if (typeof val == 'number') {
//             target[prop] = val;
//             return true;
//         } else {
//             return false;
//         }

//     }
// });

// numbers.push(1);
// numbers.push(2);
// console.log("length is : " + numbers.length);
// numbers.push("test");

// ownKeys trap for Object.keys AND Object.values, and all other 
// that use [[OwnPropertyKey]] internal method 

// let user = {
//     name: "john",
//     age: 30,
//     _password: "***"
// };

// user = new Proxy(user, {
//     ownKeys(target) {
//         return Object.keys(target).filter(key => !key.startsWith('_'));
//     }
// });

// for (let key in user) console.log(key);

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// let user = {};

// user = new Proxy(user, {
//     ownKeys(target) {
//         return ['a', 'b', 'c'];
//     }
// });

// console.log(Object.keys(user));

// why? bcz Object.keys checks enumerable == true for
// target through [[getOwnPropertyDescriptor]] and it return false for
// empty array;

let user = {};
user = new Proxy(user, {
    ownKeys(target) {
        return ['a', 'b', 'c'];
    },
    getOwnPropertyDescriptor(target, prop) {
        return {
            enumerable: true,
            configurable: true,
        };
    }
})
console.log(Object.keys(user))