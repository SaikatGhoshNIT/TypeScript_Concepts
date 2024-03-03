/*const surName: string | number; //union type varible which can take value between string or number
const func = (n: number, m: number): number => { return n * m;};*/

// variable name : datatype
//type alliace - we can create custom datatypes

type userName = string | number;
let a: userName;

type mul = (n: number, m: number) => number;// here it will make a function template which will return a number only and it's parameter also should in number only.
const func2: mul = (n, m) => {  //here we can use that function template as type.  
console.log(n, m);
return n * m;};

//!Array
const arr: number[] = [12, 24, 36, 48];
//!we can create array with the help of Generics also, like:-
const arr2: Array<string> = new Array(20); //20 is the lenght of Array 
arr2[0] = "Saikat";console.log(arr2);


//! tuple in TypeScript :A tuple is a typed array with a pre-defined length and types for each index.To define a tuple, specify the type of each element in the array:

const arr3: [number, number, number] = [1, 2, 3];

type PersonInfo = readonly[string, number, boolean]

const displayPersonInfo = (person : PersonInfo):void =>{
    const [name, age, hasLicense] = person;
    console.log(`Name: ${name}, Age: ${age}, Driver's License: ${hasLicense ? "Yes" : "No"}`);
}

displayPersonInfo(["Saikat", 25, true]);
displayPersonInfo(["Lipi", 24, false]);

//!Object

type Obj = {
     height: number;
     weight: number;
     gender?: string
    } 
    //! '?' means it's an optional property, user can give or he can ignore

    const obj: Obj = {
         height: 12,
         weight: 56,
        };

//!interface
//interface is similar to type but with interface we can achive inheritance by extending properties.

interface Obj1 {
     height: number;
     weight: number;
     gender?: string;
    }
interface newObj extends Obj {
     scolar: boolean;
    }
const objectNew: newObj = {
     height: 600,
     weight: 52,
     scolar: true,
    };


//! functions in type script
const func3 = (n: number, m: number) => { return n * m};

//? or we can make type and use

type FuncType = (n: number, m: number) => number;
const fun4:FuncType = (a,b)=>(a*b)

//! optional parameter by giving ?
type FuncType2 = (n: number, m: number, l?:number) => number;

const fun5:FuncType2 = (a,b,c)=>{
    if(typeof c === "undefined") return (a*b);
    else return (a*b*c);
}

console.log(fun5(25,25));

//!default parameter
const fun6 = (a:number,b:number,c:number =20)=>{ return (a*b*c)}
console.log(fun6(1,1));

//!Destructuring of Object
type Option ={
    debugMode?: boolean;
    indentLevel?: number
}

function printNameAge(name:string, 
    {debugMode = false, indentLevel}:Option = {}){
console.log(name, debugMode, indentLevel);
}

printNameAge("Saikat")

//!Rest parameter
type FuncType3 = (...m:number[]) => number;

const fun7:FuncType3 = (...m) =>{
    let total:number = 0
    for (let i of m){total += i}
    return total
}

console.log(fun7(1,2,3,4,5));


//!with function keyword
function lol1(n:number):number {  return 45+n;}
//type
type funType = (n:number) => number
const loll:funType = function (n){return n}

//!Function with object
const getData = (product :{name:string, stock:number, price:number}):void =>{ console.log(product);}

//!with type
type GetDataType = (p : {name:string, stock:number, price:number}) => void;
const getData2:GetDataType = (p) =>{ console.log(p);}
const productOne = { name :'mac', stock : 46, price : 76000}
getData2(productOne);

//! readonly
interface Product { name:string, stock:number, price:number, readonly id: string}
// if we made anything readonly then after assigning any value to it, we can't never change it.

type GetDataType2 = (p1 : Product) => void;

const getData3:GetDataType2 = (p) =>{
//p.id = "jigig" // it will give us error like "Cannot assign to 'id' because it is a read-only property".
console.log(p);}

const productTwo:Product = {
    name :'mac',
    stock : 46,
    price : 76000,
    id : 'vghf'
}
getData3(productTwo)

//Never type
const errorhandler = ():never=>{
    throw new Error()
}

//theamMode
type theamMode = "light" | "dark"

//!Classes is TypeScript
class Players {
    //height; // access modifiers public //
    //private weight; //access modifiers private 
    // protected power; // can only access by it's own class and sub classes 
    readonly id: string
    constructor(public height: number, private weight: number, protected power?:number){
        // this.height = height;
        // this.weight = weight;   //? we don't need to write this two line also it will automatically store into this.height or other property at the time of constructor calling or object creation  
        this.id = String(Math.random()*100);
    }
    getMyWeight = () => this.weight;
}
const me = new Players(76, 52, 150);
console.log(me.height); // but we can't access weight property because it's a private property in the class only

//but we can call it through function

console.log(me.getMyWeight());


//!inheritance
class Player1 extends Players {
    special
    constructor(hight:number, weight:number, power:number, special:boolean){
        super(hight, weight, power)  //! In TS super keyword is used in the context of class inheritance. It allows a subclass (also known as a derived class) to call mehods or access properties of its superclass (also known as a base class). This is particularly useful when you want to extend the behavior of a parent class while still leveraging it's existing functionality.
        this.special = special;
    }
 getMyPower = ()=> this.power
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

class PlayersGroup {readonly id: string
    constructor(public height: number, private weight: number, protected power?:number){
        this.id = String(Math.random()*100);
    }
set setMyWeight(val: number){
    this.weight = val
}
get getMyWeight(): number{
    return this.weight
}
}

const group1 = new PlayersGroup(76, 52, 150);
console.log("Weight"+" "+ group1.getMyWeight);
// we can directly call a getter fuction
group1.setMyWeight = 54
console.log("Weight"+" "+ group1.getMyWeight);

//Use with interface 
interface ProductType {
    name:string;
    price:number;
    stock:number;
    offer?:boolean
}

interface GiveId {getId: ()=> string;}
class Product12 implements ProductType, GiveId{
    private id : string = String(Math.round(Math.random()*1000));
    private lol:boolean =true
constructor(public name: string, public price:number, public stock:number){}
getId = ()=> this.id
}
const product12 = new Product12("Mac", 2000, 20)
console.log(product12.getId());

//!Type Assertion (DOM manipulation in Typescript)
const button = document.getElementsByClassName("btn") as unknown as HTMLElement; //type assertion
//const button = <HTMLElement>document.getElementsByClassName("btn");
//const button = document.getElementsByClassName("btn")!;
const img = document.getElementById("img") as HTMLImageElement;
button.onclick;
img.src;

const form1 = document.getElementById("form") as HTMLFormElement;
const inp = document.querySelector("input")!
form1.onsubmit = (e : SubmitEvent)=>{
    e.preventDefault();
    console.log(inp.value);console.log(typeof(inp.value));
    const h2element = document.createElement("h2");
    h2element.textContent ="Love Web Development";
    const body = document.querySelector("body")!;
    body.append(h2element);
}


//!############# index signature (keyof)
interface Person {
    //name:string;
    //email:string;
    [key:string] : string; //dynamic key
}
const myobj: Person = {name : "Saikat",
email : "saikatghosh5434@gmail.com"
}
//console.log(myobj.name);

const getName = (): string =>{
    return myobj.name
}
const getEmail = (): string =>{
    return myobj.email
}
let key ="name";
myobj[key as keyof typeof myobj];
const data = (key : "name" | "email"):string=>{
    //return myobj["name"]  
    //return myobj[key]  -it will throw error without dynamic key  
    return myobj[key] // now key can be name or email only

}
//Data("lol") - it will show error as key can only between name or email only


//! keyof
const data2 = (key : keyof Person):string=>{
    return myobj[key] // now key can be name or email only as keyof Person will allow to take the keys present in Person object only
}


//! ********Type Utility*********
//1. Partial<Type>
type User ={ name : string, email : string}
/*type User2 ={ name?: string, email?: string}*/ //- insted of this we can use Partial
type User2 = Partial<User> // to make User property optional

//2. Required<Type> -it's opposite of Partial
type User3 ={ name?: string, email : string}
type User4 = Required<User3> // here name is not the optional
const user : Required<User3> ={ name: "Saikat", // if we don't give name it will show an error 
email : "saikatghosh5434@gmail.com"}

//3. Readonly<Type>
type User5 ={ name: string, email : string}
type User6 = Readonly<User5> //it will make name and email as readonly property so we can't change it's value after assign

//4. Record<Keys, Type>
type User7 = Record<"name"|"email"|"gender" , string> //it will create a type with name, email and gender property
interface UserInfo { age:number;}
type UserName = "john"|"andrew"|"elon"|"jack";
const users : Record<UserName, UserInfo> = { //here we are using the both at a same time. 
    john : {age:34},
    andrew : {age:34},
    elon : {age:34},
    jack : {age:34},
}

//5. Pick<Type, Keys>
interface OrderInfo { readonly id: string; user : string; city : string; state : string; country :string; status : string;}
type ShippingInfo = Pick<OrderInfo, "city"|"state"|"country"> // so this type will pick up only city state and country property from the orderInfo

//6. Omit<Type, Keys>
type Random = Omit<ShippingInfo, "country"> // so it will remove the selected one

//7. Exclude<Type, ExcludedUnion> -it's kind of similar to Omit but the difference is in Omit we are dealing with the keys here we will deal with the datatypes
type Exc = Exclude<string | number, string> // now the type Exc will only accept the number
//or
type MyUnion = string | number | boolean | null | undefined;
type Exc2 = Exclude<MyUnion , boolean | null>; // now the type Exc2 will not accept boolean and null

//8. Extract<Type, Union>
type Ext = Extract<MyUnion , boolean>; // now the type Ext will only accept boolean

//9. NonNullable<Type>
type NotNull = NonNullable<MyUnion> // it will accept all datatype without "null" and "undefined"

//10. Parameters<Type>
const myFunction = (a:number,b:number) : string =>{ console.log(a+b); return String(a*b);}
type MyFun = Parameters<typeof myFunction>; // it will retun the array of the parameters

//11. ConstructorParameters<Type>
class Sample { constructor(public s:string, public t:string){}}
type S = ConstructorParameters<typeof Sample>;

//12. ReturnType<Type>
type Ret = ReturnType<typeof myFunction>;

//13. InstanceType<Type>
type Ins = InstanceType<typeof Sample>;
const New : Ins ={ s : "55", t : "1234"}


const findMax = (coll:number[]):number=>{
    let max = coll.reduce((a:number,b:number)=>a>b ? a : b, coll[0])
    return max
}

console.log(findMax([1,2,3,4,5]));


//!Enums(enum is a datatype)

//!In TypeScript, when enum constants are not explicitly assigned numeric values, they are automatically assigned incremental numeric values starting from 0. The default value for the first enum constant is 0, ans subsequesnt enum constants recive values incremented by 1.

enum Roles {
    user = "user",
    admin = "admin"
}

type LoginDetails = {
    name?: string;
    email : string;
    password : string;
    //role : [user,admin] 
    role: Roles 
}

const user1 : LoginDetails = {
    email:"thapa@gmail.com",
    password:"123@saikat",
    role: Roles.admin
}

const user2 : LoginDetails = {
    email:"thapa@gmail.com",
    password:"123@saikat",
    role: Roles.user
}

const isAdmin = (user:LoginDetails):void =>{
    const {email, role} = user;
    role === "admin" ? console.log(`${email} is allow to edit the website`) : console.log(`${email} is not allowed to edit the website`)
}

isAdmin(user1);
isAdmin(user2);

 //!Union and Intersections

//? Union types allow us to specify that a variable can hold values of multiple types. We use the | (pipe) symbol to define a union type.
//* In TypeScript, when using a union type, it is essential to ensure that at least one of the types in the union includes all the required properties,failure to do so will result in a type error during compilation.

type UnionEx = {
    inputValue : string | number;
}

//Example :

const userInput = (value : string | number) : string | number =>{
    if(typeof value === 'number'){
        return value*2
    }
    else if (typeof value === 'string'){
        return value.toUpperCase()
    }
    else{
        throw new Error("Invalid Input value")
    }
}

console.log(userInput("Saikat"));
console.log(userInput(10));
//console.log(userInput(true));

//! intersection types allow us to combine multiple types into a singel type. We use the & (ampersand) symbol to define an intersection type.

type Personal = {
    name : string;
    age : number
}

type Employee = {
    emp_id : number;
    department : string
}

type EmpDetailsIntersection = Personal & Employee //! *************

type EmpDetailsUnion = Personal | Employee


const employee : EmpDetailsUnion ={
    name : "Saikat",
    age : 25,
    emp_id : 1123980  //! In Union we can write only one property from the 2nd one if we mentioned all properties from the 1st one.
}

const employee2 : EmpDetailsIntersection ={
    name : "Saikat",
    age : 25,
    emp_id : 1123980,
    department : "SDET" //! Here we have to write all the properties from both the types
}

// Example of Intersection with Spread Operator

type One = {name:string;age:number}
type Two = {city:string;country:string}

const Emp:One ={name:"Bani",age:24}
const Loc:Two ={city:"Durgapur",country:"India"}

// const createUserProfile = (user: One, location : Two){
    
// }

// ############### Generics ################ - reusable components

//! Generics in TypeScript allow you to create reusable components or functions that can work with multiple data types.

function logAndRetun(value : number | string): number | string {
    console.log(value);
    return value
}

logAndRetun(42)
// logAndRetun(true) it will give error as boolean is not included in type, so in this cases we can use Generics

function logAndRetun2<T>(value : T): T {  //! <placeholder> it's a user define name, but generally we will write 'T'
    console.log(value);
    return value
}

logAndRetun2<number>(40*2) 
logAndRetun2<boolean>(true) //Now we can use it.


//?Generic with Custom Types

type Emp = {
    name : string;
    age : number
}

const func = <T>(n:T):T =>{
    return n;
}

const bani : Emp ={
    name : 'Babin',
    age : 25
}

const ans = func<Emp>(bani)
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

function add<T , U>(a:T, b:U , c?:boolean){
    console.log(typeof a);
    console.log(typeof b);
    console.log(typeof c);
    //return a+b;
}

const result1 = add<number, string>(5,"Saikat",false);

const result2 = add<string, boolean>("Hello",true,true)

const result3 = add<number, number>(4,4)

console.log("Hi");

//! Awaited

type Async = Promise<string>

type value = Async // it will give us a type as Promise<string>

type value1 = Awaited<Async> //here value 1 is just sting only.

//! Type Narrowing

type Todo = {
    title : string
    priority : "High" | "Normal" | "Low"
    isComplete: boolean
    description?: string
    dueDate: Date | string
}

//? if we are getting them by an API then we have to cover all type odf scenarios for date which can have two typws

//###Process 1
function extendedToDo(todo:Todo) {
    if (typeof todo.dueDate === "string") {
        console.log(todo.dueDate);
    } else {
        console.log(todo.dueDate.getDate);
    }
}

//###Process2 //! instanceof
function extendedToDo2(todo:Todo) {
    //if (typeof todo.dueDate === "Date") {} - we can't do this as Date is an Object
    if (todo.dueDate instanceof Date) {
        console.log(todo.dueDate.getDate);
    } else {
        console.log(todo.dueDate);
    }
}