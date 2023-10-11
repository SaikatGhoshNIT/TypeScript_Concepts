"use strict";
/*const surName: string | number; //union type varible which can take value between string or number
const func = (n: number, m: number): number => { return n * m;};*/
let a;
const func2 = (n, m) => {
    console.log(n, m);
    return n * m;
};
//!Array
const arr = [12, 24, 36, 48];
//!we can create array with the help of Generics also, like:-
const arr2 = new Array(20); //20 is the lenght of Array 
arr2[0] = "Saikat";
console.log(arr2);
//! tuple in TypeScript :A tuple is a typed array with a pre-defined length and types for each index.To define a tuple, specify the type of each element in the array:
const arr3 = [1, 2, 3];
const displayPersonInfo = (person) => {
    const [name, age, hasLicense] = person;
    console.log(`Name: ${name}, Age: ${age}, Driver's License: ${hasLicense ? "Yes" : "No"}`);
};
displayPersonInfo(["Saikat", 25, true]);
displayPersonInfo(["Lipi", 24, false]);
//! '?' means it's an optional property, user can give or he can ignore
const obj = {
    height: 12,
    weight: 56,
};
const objectNew = {
    height: 600,
    weight: 52,
    scolar: true,
};
//! functions in type script
const func3 = (n, m) => { return n * m; };
const fun4 = (a, b) => (a * b);
const fun5 = (a, b, c) => {
    if (typeof c === "undefined")
        return (a * b);
    else
        return (a * b * c);
};
console.log(fun5(25, 25));
//!default parameter
const fun6 = (a, b, c = 20) => { return (a * b * c); };
console.log(fun6(1, 1));
const fun7 = (...m) => {
    let total = 0;
    for (let i of m) {
        total += i;
    }
    return total;
};
console.log(fun7(1, 2, 3, 4, 5));
//!with function keyword
function lol1(n) { return 45 + n; }
const loll = function (n) { return n; };
//!Function with object
const getData = (product) => { console.log(product); };
const getData2 = (p) => { console.log(p); };
const productOne = { name: 'mac', stock: 46, price: 76000 };
getData2(productOne);
const getData3 = (p) => {
    //p.id = "jigig" // it will give us error like "Cannot assign to 'id' because it is a read-only property".
    console.log(p);
};
const productTwo = {
    name: 'mac',
    stock: 46,
    price: 76000,
    id: 'vghf'
};
getData3(productTwo);
//Never type
const errorhandler = () => {
    throw new Error();
};
//!Classes is TypeScript
class Players {
    constructor(height, weight, power) {
        this.height = height;
        this.weight = weight;
        this.power = power;
        this.getMyWeight = () => this.weight;
        // this.height = height;
        // this.weight = weight;   //? we don't need to write this two line also it will automatically store into this.height or other property at the time of constructor calling or object creation  
        this.id = String(Math.random() * 100);
    }
}
const me = new Players(76, 52, 150);
console.log(me.height); // but we can't access weight property because it's a private property in the class only
//but we can call it through function
console.log(me.getMyWeight());
//!inheritance
class Player1 extends Players {
    constructor(hight, weight, power, special) {
        super(hight, weight, power); //! In TS super keyword is used in the context of class inheritance. It allows a subclass (also known as a derived class) to call mehods or access properties of its superclass (also known as a base class). This is particularly useful when you want to extend the behavior of a parent class while still leveraging it's existing functionality.
        this.getMyPower = () => this.power;
        this.special = special;
    }
}
const saikat = new Player1(76, 52, 150, true);
console.log(saikat.special);
console.log(saikat.height);
console.log(saikat.getMyPower());
console.log(saikat.getMyWeight());
console.log(saikat.id);
//!Getter Setter
//? In TypeScript classes, you can use getter and setter methods to control the access and modification of class properties. Getter methods allow you to retrieve the value of a property, while setter methods allow you to set the value of a property with additional logic or validation.
//The get method doesn't take any parameters, and the set method takes only one parameter.
class PlayersGroup {
    constructor(height, weight, power) {
        this.height = height;
        this.weight = weight;
        this.power = power;
        this.id = String(Math.random() * 100);
    }
    set setMyWeight(val) {
        this.weight = val;
    }
    get getMyWeight() {
        return this.weight;
    }
}
const group1 = new PlayersGroup(76, 52, 150);
console.log("Weight" + " " + group1.getMyWeight);
// we can directly call a getter fuction
group1.setMyWeight = 54;
console.log("Weight" + " " + group1.getMyWeight);
class Product12 {
    constructor(name, price, stock) {
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.id = String(Math.round(Math.random() * 1000));
        this.lol = true;
        this.getId = () => this.id;
    }
}
const product12 = new Product12("Mac", 2000, 20);
console.log(product12.getId());
//!Type Assertion (DOM manipulation in Typescript)
const button = document.getElementsByClassName("btn"); //type assertion
//const button = <HTMLElement>document.getElementsByClassName("btn");
//const button = document.getElementsByClassName("btn")!;
const img = document.getElementById("img");
button.onclick;
img.src;
const form1 = document.getElementById("form");
const inp = document.querySelector("input");
form1.onsubmit = (e) => {
    e.preventDefault();
    console.log(inp.value);
    console.log(typeof (inp.value));
    const h2element = document.createElement("h2");
    h2element.textContent = "Love Web Development";
    const body = document.querySelector("body");
    body.append(h2element);
};
const myobj = { name: "Saikat",
    email: "saikatghosh5434@gmail.com"
};
//console.log(myobj.name);
const getName = () => {
    return myobj.name;
};
const getEmail = () => {
    return myobj.email;
};
let key = "name";
myobj[key];
const data = (key) => {
    //return myobj["name"]  
    //return myobj[key]  -it will throw error without dynamic key  
    return myobj[key]; // now key can be name or email only
};
//Data("lol") - it will show error as key can only between name or email only
// keyof
const data2 = (key) => {
    return myobj[key]; // now key can be name or email only as keyof Person will allow to take the keys present in Person object only
};
const user = { name: "Saikat",
    email: "saikatghosh5434@gmail.com" };
const users = {
    john: { age: 34 },
    andrew: { age: 34 },
    elon: { age: 34 },
    jack: { age: 34 },
};
//10. Parameters<Type>
const myFunction = (a, b) => { console.log(a + b); return String(a * b); };
//11. ConstructorParameters<Type>
class Sample {
    constructor(s, t) {
        this.s = s;
        this.t = t;
    }
}
const New = { s: "55", t: "1234" };
const findMax = (coll) => {
    let max = coll.reduce((a, b) => a > b ? a : b, coll[0]);
    return max;
};
console.log(findMax([1, 2, 3, 4, 5]));
//Enums(enum is a datatype)
//!In TypeScript, when enum constants are not explicitly assigned numeric values, they are automatically assigned incremental numeric values starting from 0. The default value for the first enum constant is 0, ans subsequesnt enum constants recive values incremented by 1.
var Roles;
(function (Roles) {
    Roles["user"] = "user";
    Roles["admin"] = "admin";
})(Roles || (Roles = {}));
const user1 = {
    email: "thapa@gmail.com",
    password: "123@saikat",
    role: Roles.admin
};
const user2 = {
    email: "thapa@gmail.com",
    password: "123@saikat",
    role: Roles.user
};
const isAdmin = (user) => {
    const { email, role } = user;
    role === "admin" ? console.log(`${email} is allow to edit the website`) : console.log(`${email} is not allowed to edit the website`);
};
isAdmin(user1);
isAdmin(user2);
//Example :
const userInput = (value) => {
    if (typeof value === 'number') {
        return value * 2;
    }
    else if (typeof value === 'string') {
        return value.toUpperCase();
    }
    else {
        throw new Error("Invalid Input value");
    }
};
console.log(userInput("Saikat"));
console.log(userInput(10));
const employee = {
    name: "Saikat",
    age: 25,
    emp_id: 1123980 //! In Union we can write only one property from the 2nd one if we mentioned all properties from the 1st one.
};
const employee2 = {
    name: "Saikat",
    age: 25,
    emp_id: 1123980,
    department: "SDET" //! Here we have to write all the properties from both the types
};
const Emp = { name: "Bani", age: 24 };
const Loc = { city: "Durgapur", country: "India" };
// const createUserProfile = (user: One, location : Two){
// }
// ############### Generics ################ - reusable components
//! Generics in TypeScript allow you to create reusable components or functions that can work with multiple data types.
function logAndRetun(value) {
    console.log(value);
    return value;
}
logAndRetun(42);
// logAndRetun(true) it will give error as boolean is not included in type, so in this cases we can use Generics
function logAndRetun2(value) {
    console.log(value);
    return value;
}
logAndRetun2(40 * 2);
logAndRetun2(true); //Now we can use it.
const func = (n) => {
    return n;
};
const bani = {
    name: 'Babin',
    age: 25
};
const ans = func(bani);
console.log(ans.name);
console.log(ans);
//! Function Overloading
//? Use of Function Overloading in TypeScript: TypeScript doesn't allow the '+' operator on generic types with a union constraint. to handle addition for generic types that can support the '+' operator, you can use function overloading.
/*function add(a:number, b:number):number;
function add(a:string, b:string):string;
function add(a:any, b:any):any {
    return a+b
}*/
//! Function Overloading with TypeScript Generics
//? -we can write overloading in one single line
function add(a, b, c) {
    console.log(typeof a);
    console.log(typeof b);
    console.log(typeof c);
    //return a+b;
}
const result1 = add(5, "Saikat", false);
const result2 = add("Hello", true, true);
const result3 = add(4, 4);
//console.log("Hi");
