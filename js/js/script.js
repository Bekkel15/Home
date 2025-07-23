

//                              Модуль 2 урок1 


// const isOnline = true;
// const isFfriend = true;
// const isDnd = true;

// const canOpenChat = isOnline && isFfriend && !isDnd;
// console.log("llalala", canOpenChat);



//                                Модуль 2 урок 2


// const user = "Alice Franko";
// const str = user.slice(); вирізає по індексу
// console.log(str);

// console.log(user.toLowerCase()); нижній регістр
// console.log(user.toUpperCase()); верхній регістр
// console.log(user.includes()); перевіряє на наявність чогось і чутливий до регістру
// console.log(user.startsWith()); превіряє чи починається з певного підрядка
// console.log(user.endsWith); превіряє чи закінчується на певний підрядок
// console.log(user.indexOf()); шукає підрядок і повертає його індех
// console.log(user.trim()); прибирає з початку і кінця всі пробіли



// let link = "http://my-site.com/adout";
// if(!link.endsWith("/")) {
//     link += "/";
// } 
// console.log(link);




// let link = "http://my-site.com/adout";
// if(!link.endsWith("/") && link.includes("my-site")) {
// link += "/";
// console.log(link);
// }

// const blacklistedWord1 = "spam";
// const blacklistedWord2 = "sale";

// const string1 = 
// "Hello I'm Price Adout, this is not spam, I'm offering you a";
// const string2 = "Biggest SALE this week, don't miss out!";
// const string3 = "#fatlivesmatter advertisinf camping";

// console.log(string1.includes(blacklistedWord1));
// console.log(string1.includes(blacklistedWord2));
// console.log(string2.includes(blacklistedWord1));
// const normalixeString = string2.toLowerCase();
// console.log(normalixeString.includes(blacklistedWord2));


// console.log("before");
// for(let i = 0; i < 3 ; i += 1) {
// console.log(i);
// }
// console.log("after");



// for( let i = 5; i >= 0; i-= 1) {
//     console.log(i); 
// }


// const str = "Hello";
// for(let i = 0; i < str.length; i++) {
//     if(str[i] === 'l') {
//         break;
//     }
//     console.log(str[i]);
// }




// let a = 10;
// const b = ++a;  10 + 1;; b = 11; префіксник інкремент;
// const b = a++;   b = 10; 10 + 1; постфіксний інкремент;
// const b = --a; 10 - 1; b = 9;    дикремент;
// const b = a--; b = 10; 10 - 1;   дикримент;
// console.log("a", a);
// console.log("b", b);

// for(let i = 0; i < 5; ++i) {
//     console.log(i);
// }




// console.log("before");

// let counter = 0;
// while(counter < 5) {
// console.log(counter);
// counter++;
// }

// console.log("after");

// let counter = 0;
// do {
//     console.log(counter);
//     counter++;
    
//  } while(counter < 3)





// const a = 20;
// const b = 100;

// for(let i = a; i < b; i++) {
//     if(!(i % 5)) {
// console.log(i);
// }
// }

// for(let i = b; i > a; i--) {
//     if(!(i % 5)) {
//         console.log(i);
        
//     }
// }






// const min = 0;
// const max = 5;
// let total = 0;
// for(let i = min; i <= max; i++) {
//     if(i % 2 === 0) {
//      total += i;
//     }
// }
// console.log(total);


// for(let i = min; i <= max; i++) {
//     if(i % 2) {
// console.log(i);
// continue;     одразу припиняє поточну ітерацію нашого циклу
//     }
// total += i;
// }

//                        домашка 2 модуль

           
// function makeTransaction(quantity, pricePerDroid, customerCredits) {
// const totalPrice = quantity * pricePerDroid;

// if(totalPrice  > customerCredits) {
// return "Insufficient funds!";
// } else {
// return `You ordered ${quantity} droids worth ${totalPrice} credits!`
// }
// }



// console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
// console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
// console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"



// function formatMessage(message, maxLength) {

// if(message.length <= maxLength) {
// return message;
// } else {
//     return message.slice(0, maxLength) + "..."

// }
// }
// console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
// console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
// console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."
// console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // "Nunc sed turpis..."
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // "Nunc sed turpis a felis in nunc fringilla"



// function checkForSpam(message) {

// const LowerCaseMessage = message.toLowerCase();
// if(LowerCaseMessage.includes("spam") || ;LowerCaseMessage.includes("sale")) {
// return true;
// } else {
//     return false;
// }
// }

// console.log(checkForSpam("Latest technology news")); // false
// console.log(checkForSpam("JavaScript weekly newsletter")); // false
// console.log(checkForSpam("Get best sale offers now!")); // true
// console.log(checkForSpam("Amazing SalE, only tonight!")); // true
// console.log(checkForSpam("Trust me, this is not a spam message")); // true
// console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
// console.log(checkForSpam("[SPAM] How to earn fast money?")); // true


// function getShippingCost(country) {
// let price;
// switch(country) {
//     case "China":
//         price = 100;
//         break;
//     case "Chile":
//         price = 250;
//         break;
//     case "Australia":
//         price = 170;
//         break;
//     case "Jamica":
//         price = 120;
//         break      
//     default:
//         return "Sorry, there is no delivery to your country";      
// }

// return `Shipping to ${country} will cost ${price} credits`;
// }

// console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
// console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
// console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
// console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
// console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
// console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"


   

//                           Модуль 3 урок 1


// const course = ["HTML", "CSS", "JS", "React"];

// console.log(course[3]);

// course[1] = "Node.js";
// course[3 = "next.js"]
// console.log(course.length);
// const lastIndex = course.length -1;

// console.log(course[lastIndelet 



// let a = [1, 2, 3];    масиви копіюються за посиланням
// const b = a;

// a[0] = 500;

// console.log("a", a);
// console.log("b", b);

// console.log(a === b);

// const x = [1, 2, 3];    Однакові масиви не дорівнюють один одному, вони копіюються за посиланням
// const y = [1, 2, 3];
// console.log(x === y);



// методи масиву  

// const courses = ["HTML", "CSS", "JS", "React"];

// const str = courses.join(" "); дає можливість створити з масиву рядочок
// console.log(str);

// const newStr = str.split("") перетвоює рядок у масив
// console.log(newStr);

// const arr = courses.slice(0, 3); вирізає з рядка або масиву без зміни оригіналу
// console.log(arr);

// const arr = [1, 2, 3];
// const newArr = courses.concat(arr, ["lalala", "tototo"]); обєднує наші масив в один і послідновність аргументів має значення
// console.log(newArr);

// console.log(courses.indexOf("React")); регістр має значчення, повертає індекс

// courses.push("Lalala"); додає в кінець нашого масиву значення як агрумент, повертає довжину нового масиву;

// courses.pop() видаляє з кінця значення



// const friends = ["Rachel", "Monica", "Phoebe", "Joey", "Chandler", "Ross"];

// for(let i = 0; i < friends.length; i++) {
// // console.log(friends[i]);
// friends[i] += `-${i}`;
// }
// console.log(friends);

// for(const friend of friends) {
//     console.log(friend); 
// }

// console.log(friends.includes("Rachel")); перевіряє чи є в нашому масиві підрядочок яким ми передаємо як аргумент, і якщо він є повертає true,якщо немає то false. і чутливий до регістру




// const values = "8 10";
// const arr = values.split(" ");
// // const result = arr[0] * arr[1];
// const result = (Number(arr[0]) + Number(arr[1])) * 2;
// console.log(result);


// const fruits = ["appple", "banana", "lemon", "orange"];

// for(let i = 0; i < fruits.length; i++) {
// console.log(`${i + 1}: ${fruits[i]}`);
// }




// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
// let total = 0;
// for(const number of numbers) {
//     if(!(number % 2)) {
//         total += number;
//     }
// }
// console.log(total);

//  for (const number of numbers) {
//     if(number % 2 !== 0) {
//         continue;
//     }
//     total += number;
// }
// console.log(total);




// const names = "Jacob,William,Solomon,Artemis";
// const phones = "380931026151, 380964073546, 980661418238,6852548575"

// const namesArr = names.split(",");
// const phonesArr = phones.split(",");

// for(let i = 0; i < namesArr.length; i++) {
//     console.log(`${namesArr[i]}: ${phonesArr[i]}`);
// }


// const string = "   Welcome     to    the    future   "

// const arr = string.trim().split(" ");
// const result = arr.slice(1, arr.length - 1).join(" ").trim();
// console.log(result);




// const values = [2, 17, 94, 1 ,23, 37];
// let min;

// for( let i = 0; i < values.length; i++) {
//     if(i === 0) {
//         min = values[i];
//     } else if(values[i] < min) {
// min = values[i];
//     }
// }
// console.log(min);


//                        Модуль 3 урок 2


// function foo() {
// const args = Array.from(arguments);
// console.log(Array.isArray(arguments));
// console.log(Array.isArray(args));


// }
// foo(1, 2, 3);
// foo(10, 20, 30, 40,);
// foo(100, 200, 300, 400, 500);



// const add = function() {
//     const args = Array.from(arguments);
//     let total = 0;
//     for(const item of args) {
//         total += item;
//     }
//     return total;
// }

// console.log(add(1, 2, 3));
// console.log(add(10, 20, 30, 40));



// function foo() {
//     let sum = 0;
//     for(let i = 0; i < arguments.length; i++) {
//         sum += arguments[i];
//     }
// return sum / arguments.length;
// }

// console.log(foo(1, 2, 3));
// console.log(foo(10, 20, 30, 40));



// function foo() {
//     console.log("FnA");
// }
// function foo() {
//     console.log("FnB");
// }
// function foo() {
//     console.log("FnC");
// }

// console.log("before FnA");
// FnA();
// console.log("after FnA");

// console.log("before FnB");
// FnB();
// console.log("after FnB");

// console.log("before FnC");
// FnC():
// console.log("after FnC");




// function bar() {
//     baz();
//     console.log("bar");
    
// }
// function baz() {
//     console.log("baz");
    
// }

// function foo() {
//     console.log("foo");
//     bar();
//     console.log("Lalala");
    
// }

// foo();



// function logItems (items) {
//   for( let i = 0; i < items.length; i++) {
//     console.log(`${i + 1} -${items[i]}`);
    
//   }

// }
// logItems(["Mango", "Poly", "Ajax"]);
// logItems(["🍎", "🍇", "🍑", "🍌", "🍋"]);



// function printInfo(names, phones) {
// const namesArr = names.split(",");
// const phonesArr = phones.split(",");
// for( let i = 0; i < namesArr.length; i++)
//     console.log(namesArr[i], phonesArr[i]);
    
// }

// printInfo(
//     "Jacob,William,Solomon,Artemis",
//     "89001234567,89001112233,890055566377,890055566300"
//   );



// function formatTime(totalMinutes) {
// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;
// const doubleHours = String(hours).padStart(2, 0);
// const doubleMinutes = String(minutes).padStart(2, 0)
// return `${doubleHours}:${doubleMinutes}`;

// }
// console.log(formatTime(70))
// console.log(formatTime(460))
// console.log(formatTime(1441))


// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9] 

// function getCombanation(arr, count) {
//      const res = [];
//      for(let i = 0; i < arr.length; i += count) {
//         const newArr = arr.slice(i, i + count)
//         res.push(newArr);
//      }   
//      return res;
// }
// console.log(getCombanation(array, 3));




//                 Домашка 3

// function slugify(title) {
// return title.toLowerCase().split(' ').join('-')

// }

// console.log(slugify("Arrays for beginners")); // "arrays-for-beginners"
// console.log(slugify("English for developer")); // "english-for-developer"
// console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"






// function makeArray(firstArray, secondArray, maxLength) {
//  const newArray = firstArray.concat(secondArray); 
//  return newArray.slice(0, maxLength)
// }
// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []


// function filterArray(numbers, value) {
//     const filtredNumbers = [];
//     for( let number of numbers) {
//         if (number > value) {
//             filtredNumbers.push(number)
//         }
//     }
//     return filtredNumbers;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]




//                     Модуль 4 урок 1



// const playlist = {
//     name: "My playlist",
//     tracks: ["tracks-1", "tracks-2", "tracks-3"],
//     rating: 5,
//     isFavorite: true
// }
// const myKey = "isFavorite";

// console.log(playlist.name);
// console.log(playlist["name"]);
// console.log(playlist[myKey]);

// playlist.rating = 4; змінюємо дані значення ключчя;
// playlist.name = "You playlist"
// console.log(playlist);




// const obj = {
//     name: "Alice",
//     age: 25,
//     skills: {
//     html: true,
//     css: true,
//     js: false
// }

// }
// obj.skills.js = true; змінюємо значення ключа
// delete.obj.name видаляє ключ 
// console.log(obj.skills.js);



// const arr = [1, 2, 3];
// arr.lalala = "tototo"

// console.log(arr);



// function foo() {
//     console.log("Hellj");
// }
// foo.lalala = "tototo";
// console.dir(foo);



// const a = {x: 1, y: 2}; однакові обєкти і однакові масиви не дорівнюють один одному
// const b = a;

// a.x = 100;

// console.log("a", a);
// console.log("b", b);

// console.log( a === b);



// const username = "Alice";
// const age = 25;

// const user = {
//     username: username,
//     age: age 


//     коротший запис
//     username,
//     age
// };
// console.log(user);


// const keyName = "color";

// const obj = {
//     [keyName]: "red"
// }
// console.log(obj);


// function foo(key, value) {
// return {
//     [key]: valuekjgjf
// }
// }
// console.log(foo("name", "Alice"));


// const lalala = prompt("key");
// const obj = {
//     [lalala]: "Hello"
// }

// console.log(obj);



// const feedback = {
//     good: 5,
//     neutral: 10,
//     bad: 3 
// }
// let total = 0;
// for(const key in feedback) {      використувується для перубігу всіх власстивостей обєекта       
// total += feedback[key];
// }
// console.log(total);


// const keys = Object.keys(feedback);    
// let total =0;
// for(const key of keys) {                створює масив з ключів
//     total += feedback[key];
// }
// console.log(total);


// const values = Object.values(feedback);     повертає масив значень
// let total = 0;
// for(const value of values) {
//     total += value;
// }
// console.log(total);




// const user = {
//     name: "Alice",
//     age: 20,
//     hobby: "html",
//     premiun: true
// }

// user.mood = "happy";
// user.hobby = "skydiving";
// user.premiun = false;

// const keys = Object.keys(user);
// for(const key of keys) {
//     console.log(`${key}: ${user[key]}`);
// }

// function foo(obj) {
// obj.mood = "happy";
// obj.hobby = "skydiving";
// obj.premiun = false;

// const keys = Object.keys(obj);
// for(const key of keys) {
//     console.log(`${key}: ${obj[key]}`);
// }
// }
// foo(user);



// const salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// };

// function summa(obj){
// let total = 0;
// const values =  Object.values(obj);

// for(const value of values) {
//     total += value;
// }
// return total;
// }
// console.log(summa(salaries));



//             Модуль 4 урок 2



// const friends = [
//     {name: "Ross", online: false},
//     {name: "Joey", online: true},
//     {name: "handler", online: false},
//     {name: "Phoebe", online: true},
//     {name: "Monica", online: true},
//     {name: "Rachel", online: false},
// ];
// пошук друга за іменем
// function findByname(allFriends, friendName) {
// for(const friend of allFriends) {
//     if(friend.name.toLowerCase() === friendName.toLowerCase()) {
// return friend;
//     }
// }
// return "Not found";
// }

// console.log(findByname(friends, "ross"));


// отримати імена всіх друзів

// function getNames(allFriends) {
//   const names = [];
//   for(const item of allFriends) {
//   names.push(item.name)
//   }
// return names;
// }

// console.log(getNames(friends));

// Отримати імена тих друзів, які зараз онлайн


// function getOnlineFriends(allFriends) {
//   const onlineFriends = [];
//   for(const item of allFriends) {
//     if(item.online) {
//     onlineFriends.push(item.name);
    
//     }
//   }
// return onlineFriends;

// }

// console.log(getOnlineFriends(friends));





// const stones = [
//     {name: "Смарагд", price: 1300, quantity: 4},
//     {name: "Діамант", price: 2700, quantity: 3},
//     {name: "Сапфір", price: 400, quantity: 7},
//     {name: "Щебінь", price: 200, quantity: 2},
//     {name: "Сапфір", price: 400, quantity: 7},
// ]


// function  calcTotalPrice(stones, stoneName) {
// let sum = 0;
// for(const item of stones) {
// if(item.name === stoneName) {
//     sum = item.price * item.quantity;
// }
// }
// return sum;
// }

// console.log(calcTotalPrice(stones, "Сапфір"));



// const playlist ={
//     name: "My playlist",
//     raiting: 5,
//     tracks: ["track-1", "track-2", "track-3"],
//     changeName(newName) {
//     this.name = newName;
//     }
// }

// // playlist.changeName();

// console.log(playlist);

// const sport = {
//     name: "Sport playlist",
//     rating: 4,
//     track: ["track-4", "track-5", "track-6"], 
// }

// sport.changePlaylistName = playlist.changeName;

// sport.changePlaylistName("sport lalala");

// console.log(sport);





// const playlist ={
//     name: "My playlist",
//     raiting: 5,
//     tracks: ["track-1", "track-2", "track-3"],
//     changeName(newName) {
//     this.name = newName;
//     },
//     addtrack(newTrack) {
//     this.tracks.push(newTrack);
//     },
//     updateRating(newRating) {
//         this.rating = newRating;
//     },
//     getTrackCount() {
//         return this.tracks.length;
//     }
// }


// playlist.changeName("Lalala");
// playlist.addtrack("track-4");
// playlist.updateRating(4);

// console.log(playlist.getTrackCount());




// function foo(first, second, ...args) {    рес оператор тільки останній(...)

// }


// foo(10, 20);
// foo(1, 2, 3, 4, 5);



// function foo(...rest) {
//     console.log(rest);
    
// }

// foo({x: 1, y: 2})




// const numbers = [
//     1000,
//     ...[1, 2, 3],
//     4000,          розгортає масив(якщо 3 крапочки справа від знаку присвоєння то це у нас spred оператор, тобто розгортати)
//     ...[5, 6, 7],
//     8000,
//     ...[9, 10, 11]
// ]

// console.log(numbers);




// const temps = [18, 14, 12, 21, 17, 29, 24];

// console.log(Math.max(...temps));
// console.log(Math.min(...temps));



// function foo(lalala) {
//     console.log(lalala);
// }

// foo(...[1, 2])




// const a = [{x: 1}, {y: 2}, {q: 3}];
// const b = [...a];

// a[0].x = 100;

// console.log("a", a);
// console.log("b", b);



// const lastWeekTeps = [1, 2, 3];
// const currentTemps = [4, 5, 6];
// const nexWeekTemps = [7, 8, 9];


// const newArr = [...lastWeekTeps, ...currentTemps, ...nexWeekTemps]; послідовність має значення 

// console.log(newArr);



// const objA = {x: 1, y: 2};
// const objB = {x: 0, a: 3};


// const objC = {
// ... objA,
// x: 10,
// ...objB,
// y: 20
// }

// console.log(objC);



// const defaultSetting = {
//     theme: "light",
//     showNotifications: true,
//     hideSidebar: false,
// };

// const userSetting = {
//     showNotifications: false,
//     hideSidebar: true,
// };


// const finalSettings = {
//     ...defaultSetting,
//     ...userSetting
// }

// console.log(finalSettings);




// const Transaction = {
//     DEPOSIT: "deposit",
//     WITHDRAW: "withdraw"
// };

// const account = {
//     balance: 0,
//     transactions: [],
    
    
//     createTransaction(amount, type) {
//     const obj = {id: amount, amount, type};
//     return obj;

//     },
//     deposite(amount) {
//     this.balance += amount;
//     const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
//     this.transactions.push(transaction);
//     },
//     withdraw(amount) {
//     if(this.balance < amount) {
//         console.log("Недостатньо коштів");
//         return;
//     }
//     this.balance -= amount;
//     const transaction = this.createTransaction(amount,Transaction.WITHDRAW);
//     this.transactions.push(transaction);
//     },
//     getbalance() {
//      return this.balance;
//     },
//     getTransactionDetails(id) {
//     for(const item of this.transactions) {
//         if(items.id === id) {
//            return item;  
//         }
//     }
//     return "Not found";
//     },
//     getTransactionTotal(type) {
//     let res = 0;
//     for(const item of this.transactions) {
//        if(item.type === type) {
//         res += item.amount;
//        }
//     }
//     return res;
//     },
// };

// account.deposite(300);
// account.deposite(500);
// account.withdraw(100);
// console.log(account);


// Домашка 4 моду



// function isEnoughCapacity(products, containerSize) {
//     let totalProductsQuantity = Object.values(products);
//     let totalQuantity = 0;
//     for(const product of totalProductsQuantity) {
//         totalQuantity += products;
//     };
//     return containerSize += products;
// }



// console.log(
//   isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
// ); // true

// console.log(
//   isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
// ); // false

// console.log(
//   isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)
// ); // true

// console.log(
//   isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)
// ); // false



// function calcAverageCalories(days) {
// let totalCalories = 0;
// if( days.length === 0) {
//     return totalCalories;
// };
// for(const day of days) {
//     totalCalories += day.calories;
// };
// return totalCalories / days.length;
// }

// console.log(
//   calcAverageCalories([
//     { day: "monday", calories: 3010 },
//     { day: "tuesday", calories: 3200 },
//     { day: "wednesday", calories: 3120 },
//     { day: "thursday", calories: 2900 },
//     { day: "friday", calories: 3450 },
//     { day: "saturday", calories: 3280 },
//     { day: "sunday", calories: 3300 }
//   ])
// ); // 3180

// console.log(
//   calcAverageCalories([
//     { day: "monday", calories: 2040 },
//     { day: "tuesday", calories: 2270 },
//     { day: "wednesday", calories: 2420 },
//     { day: "thursday", calories: 1900 },
//     { day: "friday", calories: 2370 },
//     { day: "saturday", calories: 2280 },
//     { day: "sunday", calories: 2610 }
//   ])
// ); // 2270

// console.log(
//   calcAverageCalories([])
// ); // 0




// const profile = {
//     username: "Jacob",
//   playTime: 300,
//   changeUsername(newName) {
//     this.username = newName;
//   },
//   updatePlayTime(hours) {
//     this.playTime += hours;
//   },
//   getInfo() {
//     return `${this.playTime} has ${this.playTime} active hours!`
//   },
// };


// console.log(profile.getInfo()); // "Jacob has 300 active hours!"

// profile.changeUsername("Marco");
// console.log(profile.getInfo()); // "Marco has 300 active hours!"

// profile.updatePlayTime(20);
// console.log(profile.getInfo()); // "Marco has 320 active hours!"
