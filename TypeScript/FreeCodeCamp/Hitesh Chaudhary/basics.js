"use strict";
// TODO: 1.Variables | Data Types
// ? syntax: let variableName: type = value
// ? JavaScript has eight data types. Seven primitive types and one object Data type. The primitive types are number, string, boolean, bigint, symbol, undefined, and null. Everything else is an object in JavaScript.
// ? The TypeScript Type System supports all of them and also brings its own special types. They are unknown, any, void & never.
Object.defineProperty(exports, "__esModule", { value: true });
// TODO: Primitive data types: string, number, boolean
// * string
var greetings = 'Hello Sagar';
// greetings = 6 // ! Typescript gives an error
greetings.toLowerCase();
console.log(greetings);
// * number
var userId = 1;
// userId.toUpperCase() // ! Typescript gives an error
console.log(userId);
// * boolean
var isLoggedIn = true;
console.log(isLoggedIn);
// TODO: Type Inference
// ? In TypeScript, there are several places where type inference is used to provide type information when there is no explicit type annotation.
var myNum = 6; // no explicit type annotation | We have already initialized a value
// ? The type of the myNum variable is inferred to be number. This kind of inference takes place when initializing variables and members, setting parameter default values, and determining function return types.
// myNum = 'sagar' // ! Typescript gives an error, however we have not defined the explicit type annotation
myNum.toFixed(2);
console.log(myNum);
// TODO: Special data types: any, unknown, never, undefined & null
// * any
// ? If we don't supply a type, it will be of type any by default.
var hero; // ? inferred to be type any, such case define explicit type annotation
// let hero: string // ? explicit type annotation
var getHero = function () { return 'Thor'; };
// const getHero = () => true // ! Typescript gives an error
hero = getHero();
console.log(hero);
// TODO: Functions
var addTwo = function (num) {
    // num.toUpperCase() // ! Typescript will not gives an error, If not provided explicit type annotation in function definition
    return 'hello';
    // return num + 2
};
var resAddTwo = addTwo(5);
// const resAddTwo = addTwo('5') // ! Typescript will not gives an error, If not provided explicit type annotation in function definition
console.log(resAddTwo);
// * Default Values
var logInUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    return name;
};
var resLogInUser = logInUser('Sagar', 'bhattsagar112@gmail.com');
// const resAddTwo = addTwo('5') // ! Typescript will not gives an error, If not provided explicit type annotation in function definition
console.log(resLogInUser);
