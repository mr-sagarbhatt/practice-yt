"use strict";
// TODO: 1.Variables | Data Types
// ? syntax: let variableName: type = value
// ? JavaScript has eight data types. Seven primitive types and one object Data type. The primitive types are number, string, boolean, bigint, symbol, undefined, and null. Everything else is an object in JavaScript.
// ? The TypeScript Type System supports all of them and also brings its own special types. They are unknown, any, void & never.
Object.defineProperty(exports, "__esModule", { value: true });
// TODO: Primitive data types: string, number, boolean
// * string
var greetings = 'Hello Sagar';
// greetings = 6 // ! Typescript give an error
greetings.toLowerCase();
console.log(greetings);
// * number
var userId = 1;
// userId.toUpperCase() // ! Typescript give an error
console.log(userId);
// * boolean
var isLoggedIn = true;
console.log(isLoggedIn);
// TODO: Type Inference
// ? In TypeScript, there are several places where type inference is used to provide type information when there is no explicit type annotation.
var myNum = 6; // no explicit type annotation | We have already initialized a value
// ? The type of the myNum variable is inferred to be number. This kind of inference takes place when initializing variables and members, setting parameter default values, and determining function return types.
// myNum = 'sagar' // ! Typescript give an error, however we have not defined the explicit type annotation
myNum.toFixed(2);
console.log(myNum);
// TODO: Special data types: any, unknown, never, undefined & null
// * any
// ? If we don't supply a type, it will be of type any by default.
var hero; // ? inferred to be type any, such case define explicit type annotation
var getHero = function () { return 'Thor'; };
hero = getHero();
console.log(hero);
// let hero: string // ? explicit type annotation
// const getHero = () => true // ! Typescript give an error
// hero = getHero()
// console.log(hero)
// TODO: Functions: Default return type is void
var addTwo = function (num) {
    // num.toUpperCase() // ! Typescript will not give an error, If not provided explicit type annotation in function definition for parameters
    return 'hello'; // ! Typescript will not give an error, If not provided explicit type annotation in function definition for return type
    // return num + 2
};
var resAddTwo = addTwo(5);
// const resAddTwo = addTwo('5') // ! Typescript will not give an error, If not provided explicit type annotation in function definition for parameters
console.log(resAddTwo);
// * Default Values
// ? we can omit type annotation for default parameter, it will be inferred by ts
var logInUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    return name;
};
// const logInUser = (name: string, email: string, isPaid = false) => { // ? inferred by ts
//   return name
// }
// const resLogInUser = logInUser('Sagar', 'bhattsagar112@gmail.com', 'sagar') // ! Typescript will give an error, default param will inferred by ts
var resLogInUser = logInUser('Sagar', 'bhattsagar112@gmail.com');
// const resAddTwo = addTwo('5') // ! Typescript will not give an error, If not provided explicit type annotation in function definition
console.log(resLogInUser);
// * Return Type
// * Single return type
var addTwoWithOneReturnType = function (num) {
    // return 'hello' // ! Typescript will give an error, because we have provided explicit type annotation in function definition for return type
    return num + 2;
};
var resAddTwoWithOneReturnType = addTwoWithOneReturnType(5);
console.log(resAddTwoWithOneReturnType);
// * Multiple return type (UNION TYPE (|))
// ? We need to use UNION type for function which return multiple type
// ? it will return either a number or a string
var addTwoWithMultiReturnType = function (num) {
    if (num > 5)
        return num;
    return 'Add Val greater than 5';
};
var resAddTwoWithMultiReturnType = addTwoWithMultiReturnType(5);
console.log(resAddTwoWithMultiReturnType);
// ? map : It will automatically
var heros = ['thor', 'spiderman', 'ironman'];
// const heros = [1, 2, 3]
// const heros = []
// ? here we can omit the return type and param type in map function as it will automatically detect from default value, but we can specify the return type so that it can specific type
var arrHeros = heros.map(function (hero) {
    return "hero is ".concat(hero);
});
console.log(arrHeros);
// TODO: void vs never
// * void
// ? need to define type annotation return type else function will return anything
var consoleError = function (errMsg) {
    console.error(errMsg);
};
consoleError('consoleError');
console.log(consoleError('console: consoleError'));
// * never
// ? The never type represents values which are never observed. In a return type, this means that the function throws an exception or terminates execution of the program.
var handleError = function (errMsg) {
    throw new Error(errMsg);
};
// TODO: objects: ({})
// commonly we are passing a object to a function or returning a object from a function.
var user = {
    name: 'sagar',
    email: 'bhattsagar112@gmail.com',
    isActive: true,
};
var createUser = function (_a) {
    var string = _a.name, boolean = _a.isPaid;
};
// createUser({ name: 'sagar', isPaid: false, email: 'bhattsagar112@gmail.com' }) // ! Typescript will give an error, when we directly pass an object value to a function because we have asked for name and isPAid only, and email is not there
// ! Now when we will assign the object value to a variable, Typescript will not give an error, however we have asked for name and isPAid only
var newUSer = { name: 'sagar', isPaid: false, email: 'bhattsagar112@gmail.com' };
createUser(newUSer);
var createCourse = function () {
    return {
        name: 'reactjs',
        price: 399,
    };
};
console.log(createCourse());
var createUserType = function (user) { return user; };
console.log(createUserType(user));
var userProfile = {
    _id: '12345',
    name: 'sagar',
    email: 'bhattsagar112@gmail.com',
    isActive: true,
};
userProfile.email = 'bsaga112@gmail.com';
// userProfile._id = 'asa' // ! Typescript will give an error, because it is a read-only property and we change its value
console.log(userProfile);
