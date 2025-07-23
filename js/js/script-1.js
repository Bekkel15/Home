//                       Модуль 5 Урок 1


// function fnA(name, callback) {
// // console.log(callback);
// callback(name)
// }

// function fnB(userName) {
// console.log(`Hello ${userName}`);
// }

// fnA("Alice", fnB);




// function calc(a, b) {
// const str = "lalala";
// console.log(str);
// return a + b;
// }

// function calc1(a, b) {
//     const str = "lalala";
//     console.log(str);
//     return a - b;
// }

// console.log(calc(1, 2));
// console.log(calc1(10, 2));

// інший запис запис
// function calc(a, b, callback) {
// const str = "lalala";
// console.log(str);
// return callback(a, b);
// }

// function fnA(tototo, lalala) {
// return tototo + lalala;
// }
// function fnB(tototo, lalala) {
// return tototo - lalala;
// }

// console.log(calc(1, 2, function(x ,y) {
// return x + y;
// }));

// console.log(calc(10, 2, function(x, y) {
// return x - y;
// }));



// function each(array, callback) {
//     const res = [];
// for(const item of array) {
//     res.push(callback(item));
// }
// return res;
// }

// console.log(each(
//     [64, 49, 36, 25, 16], function(value) {
//         return value * 2;
//     }
// ));
// console.log(each(
//     [64, 49, 36, 25, 16], function(value) {
//         return value - 10;
//     }
// ));
// console.log(each(
//     [64, 49, 36, 25, 16], function(value) {
//         return Math.sqrt(value);
//     }
// ));




// function foo(a, b, c) {
//     return a + b + c;
// }

// const arrowFoo = (a, b, c) => {
//     return a + b + c;
// }

// console.log(foo(1, 2, 3));
// console.log(arrowFoo(10, 20, 30));




// const arrowFoo = (a, b, c) => a + b + c;    неявне повернення

// console.log(arrowFoo(10, 20, 30));


// const arrowFoo = (a, b, c) => ({
//     x: a;
// });
// console.log(arrowFoo(10, 20, 30));



// const calc = (a, b, callback) => {
//     const result = callback(a, b);
//     return result;
// }

// console.log(calc(1, 2, (x, y) => {
//     return x + y;
// }))
// console.log(calc(10, 3, (x, y) => x - y))
    


// const arr = [5, 10, 15, 20, 25];

// arr.forEach(function(number, index, array) {
// console.log(number, index, array);
// });

// let total = 0;
// arr.forEach(item => total += item)
// console.log(total);



// function logItems(items) {
// console.log(items);
// for(let i = 0; i < items.length; i +=1) {
//     console.log(`${i + 1} - ${items[i]}`);
    
// }
// }
    // АБО
// const logItems = (array) => {
// array.forEach((items, index) => {
// console.log(`${index + 1} - ${items}`);
// });
// }
// logItems(["Mango", "Poly", "Ajax"]);
// logItems(["🍎", "🍇", "🍑", "🍌", "🍋"]);





// function printContactsInfo({ names, phones }) {
//   const namesArr = names.split(",");
//   const phonesArr = phones.split(",");
//   for (let i = 0; i < namesArr.length; i += 1) {
//     console.log(`${namesArr[i]}: ${phonesArr[i]}`);
//   }
// }


// Або

// const printContactsInfo = (obj) => {
// const namesArr = obj.names.split(",");
// const phoneArr = obj.phones.split(",");
// namesArr.forEach((item, index) => {
//     console.log(`${item} - ${phoneArr[index]}`);
// })
// }

// printContactsInfo({
//   names: "Jacob,William,Solomon,Artemis",
//   phones: "89001234567,89001112233,890055566377,890055566300",
// });


// const arr = [1, 2, 3, 4, 5];
// arr.forEach((item, index) => {    перебирає масив до кінця масиву
// })




// function calculateAverage(...args) {
//     let total = 0;
//     for(let i = 0; i < args.length; i++) {
//         total += args[i];
//     }
//     return total / args.length;
// }


// Або

// const calculateAverage = (...args) => {
// let total = 0;
// args.forEach(item => {
//     total =+ item;
//     return total / args.length;
// })
// }


// console.log(calculateAverage(1, 2, 3, 4));
// console.log(calculateAverage(14, 8, 2));
// console.log(calculateAverage(27, 43, 2, 8, 36));





// const allCars = [
//     { make: "Honda", model: "CR-V", amount: 14, price: 24045 },
//     { make: "Honda", model: "Accord", amount: 2, price: 22455 },
//     { make: "Mazda", model: "Mazda 6", amount: 8, price: 24195 },
//     { make: "Mazda", model: "CX-9", amount: 7, price: 31520 },
//     { make: "Toyota", model: "4Runner", amount: 19, price: 34210 },
//     { make: "Toyota", model: "Sequoia", amount: 16, price: 45560 },
//     { make: "Toyota", model: "Tacoma", amount: 4, price: 24320 },
//     { make: "Ford", model: "F-150", amount: 11, price: 27110 },
//     { make: "Ford", model: "Fusion", amount: 13, price: 22120 },
//     { make: "Ford", model: "Explorer", amount: 6, price: 31660 },
// ];

// const getModels = (cars) => {
//     const res = [];
//     cars.forEach((item) => {
//         res.push(item.model);
//     })
// return res;
// }
// console.log(allCars);

// АБО

// const getModels = (cars) => {
//     return cars.map((item) => item.model);    метод мап повертає масив
// }
// console.log(getModels(allCars));



// const makeCarsWithDiscount = (cars, discount) => {
//     return cars.map((item) => {
// return {
//     ...item,
//     price: item.price * (1 - discount)
// }
//     })
// }
// console.log(makeCarsWithDiscount(allCars, 0.2));




// const players = [
//     { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
//     { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
//     { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
//     { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
//     { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
// ];

// const playerIdUpdate = "player-3";
// const newArr = players.map((player) => {
// if(player.id === playerIdUpdate) {
//     return {
//         ...player,
//         timePlayed: player.timePlayed + 100
//     }
// }
// return player;
// })
// console.log(newArr);

// const update = (players, playerId) => {
//     return players.map((player) => {
//         if(player.id === playerId) {
//             return {
//                 ...player,
//                 timePlayed: player.timePlayed + 100
//             }
//         }
//         return player;
//     })
// }

// console.log(update(players, playerIdToUpdate));




//             Модуль 5 Урок 2



// const numbers = [5, 10, 15, 20, 25];
// const res = numbers.filter((number) => number > 15);
// console.log(res);



// const arr = [5, 10, 15, 20, 25];
// const number = arr.find((item) => item > 15);
// console.log(number);




// const allCars = [
//   { make: "Honda", model: "CR-V", type: "suv", amount: 14, price: 24045, onSale: true},
//   { make: "Honda", model: "Accord", type: "sedan", amount: 2, price: 22455, onSale: true },
//   { make: "Mazda", model: "Mazda 6", type: "sedan", amount: 8, price: 24195, onSale: false },
//   { make: "Mazda", model: "CX-9", type: "suv", amount: 7, price: 31520, onSale: true },
//   { make: "Toyota", model: "4Runner", type: "suv", amount: 19, price: 34210, onSale: false },
//   { make: "Toyota", model: "Sequoia", type: "suv", amount: 16, price: 45560, onSale: false },
//   { make: "Toyota", model: "Tacoma", type: "truck", amount: 4, price: 24320, onSale: true },
//   { make: "Ford", model: "F-150", type: "truck", amount: 11, price: 27110, onSale: true },
//   { make: "Ford", model: "Fusion", type: "sedan", amount: 13, price: 22120, onSale: true },
//   { make: "Ford", model: "Explorer", type: "suv", amount: 6, price: 31660, onSale: false }
// ];


// const filterByPrice = (cars, thereshold) => {
// return cars.filter((car) => car.price < thereshold);
// }
// console.log(filterByPrice(allCars, 30000));




// const getCarsWuthType = (cars, type) => {
// return cars.filter((item) => item.type === type);
// }
// console.table(getCarsWuthType(allCars, "truck"))



// const getByModel = (arr, model) => {
// return arr.find((car) => car.model === model)
// }
// console.log(getByModel(allCars, "F-150"));



// const getByType  = (arr, type) => {
// return arr.find(item => item.type === type)
// }

// console.log(getByType(allCars, "sedan"));




// const players = [
//   { id: "player-1", name: "Mango", timePlayed: 310, online: false },
//   { id: "player-2", name: "Poly", timePlayed: 470, online: true },
//   { id: "player-3", name: "Kiwi", timePlayed: 230, online: true },
//   { id: "player-4", name: "Ajax", timePlayed: 150, online: false },
//   { id: "player-5", name: "Chelsey", timePlayed: 80, online: true },
// ];

// const isAllOnline = players.every(item => item.timePlayed > 70);  every- щоб кожен елемент масиву задовільняі 
// console.log(isAllOnline);


// const isAnyOnlline = players.some(player => player.online) щоб хочаб одни елемент задовільняв умову
// console.log(isAnyOnlline);




// const number = [1, 10, 20, 30, 40];
// const total = number.reduce((acc, item) => {
// return acc + item;
// }, 0);
// console.log(total);


// const salary = {
//     mango: 100,
//     poly: 50,
//     ajax: 150,
// };
// const total = Object.values(salary).reduce((acc, item) => acc + item);
// console.log(total);






// const players = [
//   { id: "player-1", name: "Mango", timePlayed: 310, online: false },
//   { id: "player-2", name: "Poly", timePlayed: 470, online: true },
//   { id: "player-3", name: "Kiwi", timePlayed: 230, online: true },
//   { id: "player-4", name: "Ajax", timePlayed: 150, online: false },
//   { id: "player-5", name: "Chelsey", timePlayed: 80, online: true },
// ];

// const result = players.reduce((acc, player) => acc + player.timePlayed, 0);
// console.log(result);



// const cart = [
//     { label: "Apples", price: 100, quantity: 2},
//     { label: "Bananas", price: 120, quantity: 3},
//     { label: "Lemons", price: 70, quantity: 4},
// ];
// const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
// console.log(totalAmount);




// const numbers = [1, 9, 6, 2];
// const res = numbers.toSorted();
// console.log(res);



// const arr = ["a", "b", "A", "B"];
// console.log(arr.toSorted());
// console.log(arr.toSorted((a, b) => a.localeCompare(b)));
// console.log(arr.toSorted((a, b) => b.localeCompare(a)));



// const numbers = [1, 9, 6, 12, 3];
// const res = numbers.toSorted((a, b) => a - b);
// console.log(res);




// const players = [
//   { id: "player-1", name: "Mango", timePlayed: 310, online: false },
//   { id: "player-2", name: "Poly", timePlayed: 470, online: true },
//   { id: "player-3", name: "Kiwi", timePlayed: 230, online: true },
//   { id: "player-4", name: "Ajax", timePlayed: 150, online: false },
//   { id: "player-5", name: "Chelsey", timePlayed: 80, online: true },
// ];

// const res = players.toSorted((a, b) => a.timePlayed - b.timePlayed)
// const res = players.toSorted((a, b) => b.timePlayed - a.timePla
// console.log(res);




// const numbers = [1, 5, 3, 2, 4];
// const res = numbers.filter((num) => num > 2);

// const res1 = res.map((num) => num * 3);

// const res2 = res1.toSorted((a, b) => a - b);


//  коротший запис

// const res = numbers
// .filter((num) => num > 2)
// .map((num) => num * 3)
// .toSorted((a, b) => a - b)

// console.log(res);



// const allCars = [
//   { make: "Honda", model: "CR-V", type: "suv", amount: 14, price: 24045, onSale: true},
//   { make: "Honda", model: "Accord", type: "sedan", amount: 2, price: 22455, onSale: true },
//   { make: "Mazda", model: "Mazda 6", type: "sedan", amount: 8, price: 24195, onSale: false },
//   { make: "Mazda", model: "CX-9", type: "suv", amount: 7, price: 31520, onSale: true },
//   { make: "Toyota", model: "4Runner", type: "suv", amount: 19, price: 34210, onSale: false },
//   { make: "Toyota", model: "Sequoia", type: "suv", amount: 16, price: 45560, onSale: false },
//   { make: "Toyota", model: "Tacoma", type: "truck", amount: 4, price: 24320, onSale: true },
//   { make: "Ford", model: "F-150", type: "truck", amount: 11, price: 27110, onSale: true },
//   { make: "Ford", model: "Fusion", type: "sedan", amount: 13, price: 22120, onSale: true },
//   { make: "Ford", model: "Explorer", type: "suv", amount: 6, price: 31660, onSale: false }
// ];

// const getModelsOnSale = (cars) => {
// return  cars
// .filter(car => car.onSale)
// .map(car => car.model)
// }
// console.table(getModelsOnSale(allCars));


// const getModelsOnSale = (cars) => {
//   return cars
//   .filter(car => car.onSale)
//   .toSorted((a, b) => a.price - b.price)
//   .map(car => {
//     return {
//     model: car. model,
//     price: car.price
//   }
//   })
// }
// console.table(getModelsOnSale(allCars));




//     Домашка 5 модуля

// const getUserNames = users => users.map(user => user.name); 

// console.log(
//   getUserNames([
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     balance: 2811
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     balance: 3821
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     balance: 3793
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     balance: 2278
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     balance: 3951
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     balance: 1498
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     balance: 2764
//   },
// ])
// ); // ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]


// const getUsersWithFriend = (users, friendName) => 
//   users.filter(user => user.friends.includes(friendName));

// const allUsers = [
//   {
//     name: "Moore Hensley",
//     friends: ["Sharron Pace"]
//   },
//   {
//     name: "Sharlene Bush",
//     friends: ["Briana Decker", "Sharron Pace"]
//   },
//   {
//     name: "Ross Vazquez",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"]
//   },
//   {
//     name: "Elma Head",
//     friends: ["Goldie Gentry", "Aisha Tran"]
//   },
//   {
//     name: "Carey Barr",
//     friends: ["Jordan Sampson", "Eddie Strong"]
//   },
//   {
//     name: "Blackburn Dotson",
//     friends: ["Jacklyn Lucas", "Linda Chapman"]
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"]
//   }
// ];

// console.log(getUsersWithFriend(allUsers, "Briana Decker")); 
// // [
// //   {
// //     name: "Sharlene Bush",
// //     friends: ["Briana Decker", "Sharron Pace"]
// //   },
// //   {
// //     name: "Sheree Anthony",
// //     friends: ["Goldie Gentry", "Briana Decker"]
// //   }
// // ]

// console.log(getUsersWithFriend(allUsers, "Goldie Gentry"));
// // [
// //   {
// //     name: "Elma Head",
// //     friends: ["Goldie Gentry", "Aisha Tran"]
// //   },
// //   {
// //     name: "Sheree Anthony",
// //     friends: ["Goldie Gentry", "Briana Decker"]
// //   }
// // ]

// console.log(getUsersWithFriend(allUsers, "Adrian Cross" )); // []


// const sortByDescendingFriendCount = (users) => 
//   users.toSorted((a, b) => b.friends.length - a.friends.length);

// console.log(
//   sortByDescendingFriendCount([
//     {
//       name: "Moore Hensley",
//       friends: ["Sharron Pace"],
//       gender: "male"
//     },
//     {
//       name: "Sharlene Bush",
//       friends: ["Briana Decker", "Sharron Pace"],
//       gender: "female"
//     },
//     {
//       name: "Ross Vazquez",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       gender: "male"
//     },
//     {
//       name: "Elma Head",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       gender: "female"
//     },
//     {
//       name: "Carey Barr",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       gender: "male"
//     },
//     {
//       name: "Blackburn Dotson",
//       friends: ["Jacklyn Lucas", "Linda Chapman"],
//       gender: "male"
//     },
//     {
//       name: "Sheree Anthony",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       gender: "female"
//     }
//   ])
// );



// const getTotalBalanceByGender = (users, gender) =>
//   users
// .filter(user => user.gender === gender)
// .reduce((total, user) => total + user.balance, 0);

// const clients = [
// 	{
//     name: "Moore Hensley",
//     gender: "male",
//     balance: 2811
//   },
//   {
//     name: "Sharlene Bush",
//     gender: "female",
//     balance: 3821
//   },
//   {
//     name: "Ross Vazquez",
//     gender: "male",
//     balance: 3793
//   },
//   {
//     name: "Elma Head",
//     gender: "female",
//     balance: 2278
//   },
//   {
//     name: "Carey Barr",
//     gender: "male",
//     balance: 3951
//   },
//   {
//     name: "Blackburn Dotson",
//     gender: "male",
//     balance: 1498
//   },
//   {
//     name: "Sheree Anthony",
//     gender: "female",
//     balance: 2764
//   }
// ];

// console.log(getTotalBalanceByGender(clients, "male")); // 12053

// console.log(getTotalBalanceByGender(clients, "female")); // 8863





//    Модуль 6 Урок 1


// const user = {
//     userName: "Alice",
//     showThis() {
//         console.log("this", this);  
//         const foo = () => {
//             console.log("foo", this);
            
//         } 
//         foo()
//     }
// }
// user.showThis();




// function showThis() {
// console.log("this", this);
// console.log("username", this.userName);

// }

// const user = {
// userName: "Alice"
// }

// user.showThis = showThis;

// user.showThis();



// const user = {
//     userName: "Petya",
//     showThis() {
//         console.log(this);
//     }
// }

// const foo = user.showThis;
// console.log(foo);
// foo();



// const user = {
//     userName: "petya",
//     showThis() {
//         console.log(this);
//     }
// }

// function foo(callback) {
// console.log(callback);
//     callback();
// }

// foo(user.showThis);




// const user = {
//     userName: "Kate",
//     showThis() {
//         console.log(this); 
//     },
//     showThis() {
//         console.log(this.userName);
        
//     }
// }


// const foo = user.showThis;
// const lalala = user.showThis;
// lalala();





// const chopShop = {
// stones: [
//     {name: "Emerald", price: 1300, quantity: 4}
//     {name: "Diamond", price: 2700, quantity: 3}
//     {name: "Sapphire", price: 1400, quantity: 7}
//     {name: "Ruby", price: 800, quantity: 2}
// ],
// calcTotalPrice(stoneName) {
//     const stone = this.stones.find((item) => item.name === stoneName);
//     if(!stone) {
//     return `${stoneName} not found`;
//     }
//     return stone.price * stone.quantity;
// }
// }
// console.log(chopShop.calcTotalPrice("lalala"));




// function showThis(tototo, lalala, arr) {
//     console.log(this);
//     console.log(tototo, lalala, arr);
    
// }

// const objA = {
//     a: 5,
//     b: 10
// }
// const objB = {
//     x: 100,
//     y: 200
// }

// showThis.call(objA, "Alice", 5, [1, 20]); 

// showThis.apply(objB, ["Petya", 100], [1, 2]);   всі аргументи складаються в масив



// function changeColor(color) {
//     console.log("this", this);
//     this.color = color;
    
// }

// const hat = {
//     color: "red"
// }

// const sweater = {
//     color: "black"
// }

// changeColor.call(hat, "blue");
// changeColor.apply(sweater, ["yellow"]);


// const chungeHatColor = changeColor.bind(hat, "blue");
// const chungeSweaterColor = changeColor.bind(sweater);
// chungeSweaterColor("green");



// const counter = {
//     value: 0,
//     increment(value) {
//         console.log("increment", this);
//         this.value += value;
//     },
//     decrement(value) {
//         console.log("dicrement", this);
//         this.value += value;
        
//     }
// }

// function foo(value, callback) {
//     console.log(callback);
//     callback(value);
// }

// foo(10, counter.increment.bind(counter));
// foo(2, counter.decrement.bind(counter));
// console.log(counter);




// const animal = {
//     legs: 4
// }

// const dog = Object.create(animal);
// dog.name = "Patron";

// console.log(dog);
// console.log(dog.name);
// console.log(dog.legs);
// console.log(dog.hasOwnProperty("name"));
// console.log(dog.hasOwnProperty("legs"));


// for(const key in dog) {
//     if(dog.hasOwnProperty(key)) {
//         console.log(key, dog[key]);
//     }
// }



// const objC = { c: "objC" };

// const objB = Object.create(objC);
// objB.b = "objB";

// const objA = Object.create(objB);
// objA.a = "objA";


// console.log(objA.b);
// console.log(objA.hasOwnProperty("b"));
// console.log(objA);




// const cruiseControl = {
//     speed: 0,
//     brand: "Audi",
//     accelerate() {
//         this.speed += 10;
//         console.log(`Автомобіль ${this.brand} прискорюється. Швидкість ${this.speed}`);    
//     },
//     decrease() {
//         if(this.speed <= 0) {
//             console.log("Авто зупинилось");
//             return;
//         }
//         this.speed -= 10;
//          console.log(`Автомобіль ${this.brand} гальмує. Швидкість ${this.speed}`);
//     }
// }

// cruiseControl.accelerate();
// cruiseControl.accelerate();
// cruiseControl.decrease();
// cruiseControl.decrease();
// cruiseControl.decrease();

// console.log(cruiseControl);




// const MAX_SPEED = 60;

// const audi = {
//     brand: "audi",
//     speed: 30
// }


// const bmw = {
//     brand: "bmw",
//     speed: 70
// }

// function speedSensor(maxSpeed) {
//     if(this.speed <= maxSpeed) {
//         return `Автомобіль ${this.brand} рухається з безпечною швидкістю`
//     }
//     return `${this.brand} - Перевищено швидкість!`
//         Або 
//     return this.speed <= maxSpeed ?
//         `Автомобіль ${this.brand} рухається з безпечною швидкістю.` : 
//         `${this.brand} - Перевищено швидкість!`
// }


// console.log(speedSensor.call(audi, MAX_SPEED));
// console.log(speedSensor.apply(bmw, [MAX_SPEED]));




//       Модуль 6 Урок 2




// class Car {
// constructor(brand, model) {
//     console.log(this);
//     this.brand = brand;
//     this.model = model;
// }
// getModel() {
//     return this.model;
// }

// }

// const audi = new Car("aude", "q7");
// const bmw = new Car("bmw", "x7")
// console.log(audi.getModel());
// console.log(bmw);



// class Car {
//     #price; приватна властивість
//     static qty = 0;

//     static increment() {
//         Car.qty += 1;
//     }

//     constructor(obj) {
//         this.brand = obj.brand;
//         this.model = obj.model;
//         this.#price = obj.price;
//         Car.increment();
//     }
//     getPrice() {
//         return this.#price;
//     }

//     setPrice() {
//         if(typeof newPrice !== 'number') {
//             console.log("Invalid date");
//             return;
//         }
//         this.#price = newPrice;
//     }
    
//     get price() {
//         return this.#price;
//     }

//     set price(newPrice) {
//             if(this.#checkType(newPrice, 'number')) {
//                 this.#price = newPrice;
//                 return;
//             }
//             console.log("invalid data");
            
//         }
    
// #checkType(data, type) {
// if(typeof data !== type) {
//     return false;
// }
// return true;
// }


// }
// const audi = new Car({brand: "Audi", model: "Q7", price: 70000});
// const audi2 = new Car({brand: "Audi", model: "Q5", price: 70000});

// audi.price = 75000;

// console.log(audi.price);
// console.log(Car.qty);



// class Hero {
//     constructor(obj = {}) {
// this.name = obj.name;
// this.xp = obj.xp;
//     }
//     gainXp(amoun) {
//         console.log(`${this.name} отримав ${amoun} xp`);
//         this.xp += amoun;
        
//     }
// }


// class Warrior extends Hero {
//     constructor(obj) {
//         super({
//             name: obj.name,
//             xp: obj.xp
//         }) 
// this.weapon = obj.weapon;
//     }
//     attack() {
//         console.log(`${this.name} attacks with ${this.weapon}`);
        
//     }
// }

// const arthas = new Warrior( { name: "Arthas", xp: 1000, weapon: "sword"})
// arthas.attack()
// console.log(arthas);


// class Mage extends Hero {
// constructor(obj) {
//     super({
//         name: obj.name,
//         xp: obj.xp
//     })
//     this.spells = obj.spells
// }
// cast() {
//     console.log(`${this.name} is casting a spell`);
    
// }
// }

// const khadgar = new Mage({name: "Khadgar", xp: 500, spells: ["fireball"]})
// khadgar.gainXp(200)


// class Blogger {
//     constructor(obj) {
//     this.email = obj.email;
//     this.age = obj.age;
//     this.numberOfPosts = obj.numberOfPosts;
//     this.topics = obj.topics;    
//     }

//     getInfo() {
//         return `User ${this.email} is ${this.age} years old and has ${this.numberOfPosts} posts`;
//     }
//     updatePostCount(value) {
//         this.numberOfPosts += value;
//     }
// }
   

// const alice = new Blogger({
//     email: "alice@gmail.com",
//     age: 25,
//     numberOfPosts: 30,
//     topics: ["tech", "sport"]
// })
// alice.updatePostCount(50);
// console.log(alice.getInfo());

// console.log(alice);




// class User {
//     #login;
//     #email;

//     constructor(login, email) {
//         this.#login = login;
//         this.#email = email;
//     }

//     get login() {
//         return this.#login
//     }


//     set login(newLogin) {
//         this.#login = newLogin

//     }


//     getEmail() {
//         return this.#email;

//     }

//     setEmail(newEmail) {

//         this.#email = newEmail;
//     }
// }

// const alice = new User("Alice", "alice@gmail.com")


// alice.login = "Super Alice";
// alice.setEmail("super_alice@gmail.com")
// console.log(alice);




            //  Домашка 6 модуля



// const customer = {
//   username: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["Burger", "Pizza", "Salad"],
//   // Change code below this line
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * discount;
//     this.orders.push(order);
//   },
//   // Change code above this line
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]





// class Storage {
//     #items;
//     constructor(items) {
//         this.#items = items;
//     }
// getItems() {
//     return this.#items;
// }
// addItems(newItem) {
//     this.#items.push(newItem);
// }
// removeItem(itemToRemove) {
// this.#items = this.#items.filter(item => item !== itemToRemove)
// }
// }


// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// storage.removeItem("Scaner");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]




// class StringBuilder {
//     #value;
// constructor(initialValue) {
// this.#value = initialValue;
// }
// getValue() {
// return this.#value;
// }
// padEnd(str) {
//     this.#value += str;
// }
// padStart(str) {
//     this.#value = str + this.#value;
// }
// padBoth(str) {
//     this.#value = str + this.#value + str;
// }
// }


// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="






