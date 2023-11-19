// console.log("hello world")
// let arr1 = ["item1", "item2"]
// // let arr2 = arr1.slice(0);
// // let arr2 = [].concat(arr1)
// let arr2 = [...arr1]
// arr2.push("item3")
// console.log(arr1)
// console.log(arr2)

// let arr = [1, 3, 56, 72, 34, 26]
// let arr1 = arr.join("and")
// for(let index in arr){
//     console.log(index)
// }
// for(let value of arr){
//     console.log(value)
// }
// // arr.sort((a, b)=> {return a - b})
// arr.sort((a, b)=> {
//     return b - a;
// })
// console.log(arr1)
// console.log(typeof arr1)

// let str = "abcdefghijklmnopqrstuvwxyz";
// let str1 = "My name is Tarun Kumar"
// let str2 = "Tarun";
// console.log(str.split(""))
// console.log(str1.split(" "))
// console.log(str2.slice(-3, -1))
// console.log(str.toUpperCase())
// console.log(str.toLowerCase())

// let fName = "Tarun";
// let lName = "Kumar";

// let fullName = `My name is ${fName} ${lName}`;
// console.log(fullName);

// function addSquares(a, b){
//     function square(x){
//         return x * x;
//     }
//     return square(a) + square(b)
// }
// console.log(addSquares(2, 5))

//callback function

// function greet(name, callback){
//     console.log("hi my name is", name)
//     callback();
// }
// function callMe(){
//     console.log("hi i am callback function")
// }

// greet("Tarun", callMe)

// function calculate(a, b, operation){
//     return operation(a, b)
// }

// const addition = (a, b) => {
//     return a + b
// }

// const ans = calculate(2, 4, addition)
// console.log(ans)

// window.alert("What's your name")
// let a = prompt("Enter any name")

// let write = confirm("Do you want to write it to the page")
// console.log("Script Start")
// setTimeout(()=> {
//     console.log("This will executed later")
// },3000)
// console.log("Script End")

//callback function

// function getCheese(callback){
//     setTimeout(() => {
//         const cheese = "🧀";
//         console.log("here is the cheese", cheese)
//         callback(cheese)
//     }, 2000);
// }

// function makeDough(cheese, callback){
//     setTimeout(() => {
//         const dough = cheese + "🥮";
//         console.log("here is the dough", dough)
//         callback(dough)
//     }, 2000);
// }

// function bakePizza(dough, callback){
//     setTimeout(() => {
//         const pizza = dough + "🍕"
//         console.log("here is the pizza", pizza)
//         callback(pizza)
//     },2000)
// }
// getCheese((cheese)=>{
//     makeDough(cheese, (dough) => {
//         bakePizza(dough, (pizza)=> {
//             console.log("got the pizza", pizza)
//         })
//     })
// })

// const ticket = new Promise((resolve, reject)=> {
//     const isBoarded = false;
//     if(isBoarded){
//         resolve("You are in a flight")
//     }
//     else{
//         reject("Your flight is cancelled")
//     }
// })

// ticket 
// .then((data)=> console.log(data))
// .catch((error)=> console.log(error))
// .finally(() => console.log("happy journey"))

// console.log(ticket)


// function getCheese(){
//     return new Promise((resolve, reject)=> {
//         setTimeout(() => {
//             const cheese = "🧀"
//             resolve(cheese)
//         },2000)
//     })
// }
// function makeDough(cheese){
//     return new Promise((resolve, reject)=> {
//         setTimeout(()=> {
//             const dough = cheese + "🥮"
//             resolve(dough)
//         },2000)
//     })
// }
// function bakePizza(dough){
//     return new Promise((resolve, reject)=> {
//         setTimeout(()=> {
//             const pizza = dough + "🍕"
//             resolve(pizza)
//         },2000)
//     })
// }

// getCheese()
// .then((cheese)=> {
//     console.log("here is the cheese", cheese)
//     return makeDough(cheese)
// })
// .then((dough)=> {
//     console.log("here is the dough", dough)
//     return bakePizza(dough)
// })
// .then((pizza) => {
//     console.log("here is the pizza", pizza)
// })
// .catch((error)=> {
//     console.log(error)
// })
// .finally(()=> console.log("Process Ended"))

// async function orderPizza() {
//       try{
//         const cheese = await getCheese()
//         console.log("here is the cheese", cheese)

//         const dough = await makeDough(cheese)
//         console.log("here is the dough", dough)

//         const pizza = await bakePizza(dough)
//         console.log("here is the pizza", pizza)
//       }
//       catch(error){
//         console.log('error occured', error)
//       }
// }
// orderPizza();


// function printABC(char, callback){
//     setTimeout(()=> {
//         console.log(char)
//         callback()
//     },2000)
// }
// printABC("A",()=> {
//      printABC("B",() => {
//         printABC("C", () => {
//             printABC("D", () => {
//                 console.log("")
//             })
//         })
//      })
// })


// function printABC(char){
//     return new Promise((resolve, reject)=> {
//         setTimeout(()=> {
//             resolve(char)
//         },2000)
//     })
// }

// printABC("A")
// .then((char)=> {
//     console.log(char)
//     return printABC("B")
// })
// .then((char)=> {
//     console.log(char)
//     return printABC("C")
// })
// .then((char)=> {
//     console.log(char)
//     return printABC("D")
// })
// .then((char)=> {
//     console.log(char)
// })
// .catch((error) => {
//     console.log(error)
// })
// .finally(()=> {
//     console.log("printed all alphabets")
// })

// async function consoleAlpha(){
//     const printA = await printABC('A')
//     console.log(printA)

//     const printB = await printABC('B')
//     console.log(printB)

//     const printC = await printABC('C')
//     console.log(printC)

//     const printD = await printABC('D')
//     console.log(printD)
// }

// consoleAlpha();

// const key = "email"
// const obj = {
//     name: "Tarun",2
//     age: 24,
//     gender: "male"
// }
// obj.hobbies = ["Dancing", "Singing"]
// console.log(obj)
// console.log(obj.name)
// console.log(obj["name"])
// console.log(obj.hobbies[1])
// obj[key] = "tarun@gmail.com"
// console.log(obj)

// for(let key in obj){
//     console.log(key, obj[key])
// }

// console.log(Object.keys(obj))
// console.log(Object.values(obj))
// console.log(Object.entries(obj))

// const keys = Object.keys(obj)
// for(let key in keys){
//     console.log(key)
// }
// for(let values of Object.values(obj)){
//     console.log(values)
// }
// for(let key of Object.keys(obj)){
//     console.log(key, obj[key])
// }

// let arr1 = ["item1", "item2"]
// let arr2 = ["item3", "item4"]

// const newArray = [...arr1, ...arr2]
// console.log(newArray)

// const arr3 = [..."abcde"]
// console.log(arr3)

// const arr4 = [..."1234566789"]
// console.log(arr4)

// const users = [
//     {userID: 1, firstName: "Tarun", gender: "male"},
//     {userID: 2, firstName: "Kanika", gender: "female"},
//     {userID: 3, firstName: "Amrit", gender: "female"}
// ]
// for(let user of users){
//     console.log(user.userID)
//     console.log(user.firstName)
//     console.log(user.gender)
// }

// const [{userID}, {firstName}, {gender}] = users

// console.log(userID, firstName, gender)

// function myFunc2(name){
//     //  console.log("hi i am a callback function")
//     //  console.log("hi my name is", name)
//     return `Hi my name is ${name}`
// }

// function myFunc(callback){
//     // console.log("hi i am a function")
//     return callback("harshit")
// }
// const ans = myFunc(myFunc2)
// console.log(ans)

// function calculate(a, b, callback){
//     return callback(a, b)
// }

// function addition(a, b){
//     return a + b;
// }
// const ans = calculate(4, 5, addition)
// console.log(ans)


// function myFunc() {
//     function hello(){
//         console.log("hello world")
//     }
//     return hello;
// }
// const ans = myFunc()
// ans();
// console.log(ans)

// const arr = [1, 2, 6, 34, 23, 67, 23]

// arr.forEach((value, index, array)=> {
//        console.log(value * 2, index, array)
// })

// const arr1 = arr.map((value)=> {
//     return value * 2;
// })
// console.log(arr1)

// const arr1 = arr.filter((value) => {
//     return value%2 == 0
// })
// console.log(arr1)

// const arr1 = arr.reduce((acc, cur) => {
//       if(cur > acc){
//         acc = cur
//       }
//       return acc;
// })

// console.log(arr1)

// arr.sort((a, b)=> {
//     return b - a;
// })

// console.log(arr)


// const obj = {
//     name: "Tarun",
//     gender: "male"
// }
// for(let value of obj){
//     console.log(value)
// }

// const numbers = new Set();
// numbers.add(1);
// numbers.add(2)
// numbers.add(["item1","item2"])
// numbers.add(["item1","item2"])
// console.log(numbers)

// if(numbers.has(1)){
//     console.log(" 1 is present")
// }
// else{
//     console.log("1 is not present")
// }

// console.log(numbers.size)
// numbers.delete(2)
// console.log(numbers)
// console.log(numbers.size)

// const myArr = [1, 2, 3, 4, 5, 6, 6, 3, 5, 8]
// const myArr1 = new Set(myArr)

// console.log(myArr.length)
// console.log(myArr1)

// console.log(myArr1.size)

// console.log(myArr)
//  delete myArr[4]
//  console.log(myArr.length)
//  console.log(myArr)

//  const obj = {
//     name: "Tarun",
//     gender: "male"
//  }

//  delete obj.gender
//  console.log(obj)

// const person = new Map();

// person.set("name", "Tarun")
// person.set("gender", "male")
// console.log(person)
// console.log(person.get("name"))
// console.log(person.keys())
// console.log(person.values())
// console.log(person.entries())

//  const obj = {
//     name: "Tarun",
//     gender: "male"
//  }

//  const obj1 = {
//     mobile: 8279700000,
//     address: "Noida"
//  }

//  const obj2 = Object.assign(obj, obj1 )
//  console.log(obj2)

// const obj = {
//     name: "Tarun",
//     gender: "male",
//     // address: {houseNo: 24, city: "Noida"}
//  }

//  console.log(obj?.address?.houseNo?.no)

//call apply bind

// function about(hobby, favPlayer) {
//     console.log(`My name is ${this.name} and age is ${this.age} My hobbie is ${hobby}, and my Fav player is ${favPlayer}`)
// }
// const person1 = {
//     name: "Tarun",
//     age: 24,
    
// }

// const person2 = {
//     name: "Ankur",
//     age: 26
// }

// about.call(person1, "singing", "Rohit")
// about.call(person2, "singing", "Rohit")
// about.apply(person1, ["singing", "Rohit"])
// const ans = about.bind(person1, "Coding", "Virat")
// ans()
// // console.log(ans)
// function myFunc(){
//     "use strict"
//     console.log(this)
// }
// myFunc()

// const obj1 = {
//     key1: "value1",
//     key2: "value2"
// }

// // const obj2 = Object.create(obj1)
// const obj2 = {
//     key4: "value4"
// };
// obj2.__proto__ = obj1
// obj2.key3 = "value3"

// console.log(obj1)
// console.log(obj2)
// console.log(obj2.key1)

// const rootNode = document.getRootNode()

// console.log(rootNode)
// // // console.log(rootNode.childNodes[1])
// const htmlElement = rootNode.childNodes[1]
// console.log(htmlElement.childNodes)

// const body = document.body
// console.log(body)


// const button = document.getElementsByClassName("btn")[0]
// const clickMe = () => {
//     console.log("You clicked me")
//     console.log("Value of this is printed below")
//     console.log(this)
// }
// const buttons = document.querySelectorAll(".btn")
// console.log(buttons)
// for(let button of buttons){
//     button.addEventListener("click", (e) => {
//         e.target.style.backgroundColor = "yellow"
//         e.target.style.color = "white"
// console.log(e.target)
//     })
// }


// const grandParent = document.querySelector(".grand-parent")
// // console.log(grandParent)
// const parent = document.querySelector(".parent")
// // console.log(parent)
// const child = document.querySelector(".child")
// // console.log(child)
// const body = document.body
// console.log(body)


//capturing event
// grandParent.addEventListener("click", ()=> {
//     console.log("captured grand parent!!!")
// },true)
// parent.addEventListener("click", ()=> {
//     console.log("captured parent!!!")
// },true)
// child.addEventListener("click", ()=> {
//     console.log("captured child!!!")
// },true)
// body.addEventListener("click", ()=> {
//     console.log("captured body!!!")
// },true)

//bubbling event
// grandParent.addEventListener("click", ()=> {
//     console.log("bubbled grand parent!!!")
// })
// parent.addEventListener("click", ()=> {
//     console.log("bubbled parent!!!")
// })
// child.addEventListener("click", ()=> {
//     console.log("bubbled child!!!")
// })
// body.addEventListener("click", ()=> {
//     console.log("bubbled body!!!")
// })

//event delegation
// grandParent.addEventListener("click", (e)=>{
//        console.log(e.target.textContent)
// })


// const ticket = new Promise((resolve, reject)=> {
//     setTimeout(() => {
//         const flight = true;
//         if(flight){
//             resolve("you are in a flight")
//         }
//         else{
//             reject("your flight is cancelled")
//         }
//     })
// })
// ticket 
//       .then((data) => {
//         console.log(data)
//         data += " Happy journey!!!"
//         return data
//       })
//       .then((data)=> {
//         console.log(data)
//       })

//  function hello(){
//     console.log("hello world")
//  }
//  console.log(hello.name)

// //  console.log(hello.prototype)

//  hello.prototype.abc = "abc"
//  hello.prototype.xyz = "xyz"

//  console.log(hello.prototype)

// const arr = [];
// console.log(arr)

// const obj = {
//     name: "Tarun",
//     city: "Noida"
// }

// function func() {

// }

// console.log(arr.prototype)
// console.log(obj.prototype)
// console.log(func.prototype)

// console.log(arr.__proto__)
// console.log(arr.__proto__.__proto__)
// console.log(arr.__proto__.__proto__.__proto__)


// console.log(obj.__proto__)
// console.log(obj.__proto__.__proto__)

// console.log(func.__proto__)
// console.log(func.__proto__.__proto__)
// console.log(func.__proto__.__proto__.__proto__)

// Function.prototype.mybind = function() {
//     console.log("hello i am bind function")
// }

// function func() {

// }

// func.mybind()
// console.log(window)

// class Animal {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     eat() {
//         return `${this.name} is eating`
//     }
//     isCute() {
//         if(this.age < 2){
//             return `${this.name} is cute`
//         }
//         else{
//             return `${this.name} is adult now`
//         }
//     }
// }

// class Cat extends Animal{
//     constructor(name, age, speed){
//         super(name, age)
//         this.speed = speed;
//     }
//     isFast() {
//         return `Speed of ${this.name} is ${this.speed} kmph`
//     }
// }

// const dog = new Animal("Tommy", 3)
// console.log(dog.eat())
// console.log(dog.isCute())

// const kitty = new Cat("Kitty", 1, 40)
// console.log(kitty.eat())
// console.log(kitty.isCute())
// console.log(kitty.isFast())