// TODO: 1.Variables | Data Types
// ? syntax: let variableName: type = value
// ? JavaScript has eight data types. Seven primitive types and one object Data type. The primitive types are number, string, boolean, bigint, symbol, undefined, and null. Everything else is an object in JavaScript.
// ? The TypeScript Type System supports all of them and also brings its own special types. They are unknown, any, void & never.

// TODO: Primitive data types: string, number, boolean
// * string
let greetings: String = 'Hello Sagar'
// greetings = 6 // ! Typescript give an error
greetings.toLowerCase()
console.log(greetings)

// * number
let userId: number = 1
// userId.toUpperCase() // ! Typescript give an error
console.log(userId)

// * boolean
let isLoggedIn: boolean = true
console.log(isLoggedIn)

// TODO: Type Inference
// ? In TypeScript, there are several places where type inference is used to provide type information when there is no explicit type annotation.
let myNum = 6 // no explicit type annotation | We have already initialized a value
// ? The type of the myNum variable is inferred to be number. This kind of inference takes place when initializing variables and members, setting parameter default values, and determining function return types.
// myNum = 'sagar' // ! Typescript give an error, however we have not defined the explicit type annotation

myNum.toFixed(2)
console.log(myNum)

// TODO: Special data types: any, unknown, never, undefined & null

// * any
// ? If we don't supply a type, it will be of type any by default.

let hero // ? inferred to be type any, such case define explicit type annotation
const getHero = () => 'Thor'
hero = getHero()
console.log(hero)
// let hero: string // ? explicit type annotation
// const getHero = () => true // ! Typescript give an error
// hero = getHero()
// console.log(hero)

// TODO: Functions: Default return type is void
const addTwo = (num: number) => {
  // num.toUpperCase() // ! Typescript will not give an error, If not provided explicit type annotation in function definition for parameters
  return 'hello' // ! Typescript will not give an error, If not provided explicit type annotation in function definition for return type
  // return num + 2
}
const resAddTwo = addTwo(5)
// const resAddTwo = addTwo('5') // ! Typescript will not give an error, If not provided explicit type annotation in function definition for parameters
console.log(resAddTwo)

// * Default Values
// ? we can omit type annotation for default parameter, it will be inferred by ts
const logInUser = (name: string, email: string, isPaid: boolean = false) => {
  return name
}
// const logInUser = (name: string, email: string, isPaid = false) => { // ? inferred by ts
//   return name
// }
// const resLogInUser = logInUser('Sagar', 'bhattsagar112@gmail.com', 'sagar') // ! Typescript will give an error, default param will inferred by ts
const resLogInUser = logInUser('Sagar', 'bhattsagar112@gmail.com')
// const resAddTwo = addTwo('5') // ! Typescript will not give an error, If not provided explicit type annotation in function definition
console.log(resLogInUser)

// * Return Type
// * Single return type
const addTwoWithOneReturnType = (num: number): number => {
  // return 'hello' // ! Typescript will give an error, because we have provided explicit type annotation in function definition for return type
  return num + 2
}
const resAddTwoWithOneReturnType = addTwoWithOneReturnType(5)
console.log(resAddTwoWithOneReturnType)

// * Multiple return type (UNION TYPE (|))
// ? We need to use UNION type for function which return multiple type
// ? it will return either a number or a string
const addTwoWithMultiReturnType = (num: number): number | string => {
  if (num > 5) return num
  return 'Add Val greater than 5'
}
const resAddTwoWithMultiReturnType = addTwoWithMultiReturnType(5)
console.log(resAddTwoWithMultiReturnType)

// ? map : It will automatically
const heros = ['thor', 'spiderman', 'ironman']
// const heros = [1, 2, 3]
// const heros = []
// ? here we can omit the return type and param type in map function as it will automatically detect from default value, but we can specify the return type so that it can specific type
const arrHeros = heros.map((hero): string => {
  return `hero is ${hero}`
})
console.log(arrHeros)

// TODO: void vs never
// * void
// ? need to define type annotation return type else function will return anything
const consoleError = (errMsg: string): void => {
  console.error(errMsg)
}
consoleError('consoleError')
console.log(consoleError('console: consoleError'))

// * never
// ? The never type represents values which are never observed. In a return type, this means that the function throws an exception or terminates execution of the program.
const handleError = (errMsg: string): never => {
  throw new Error(errMsg)
}

// TODO: objects: ({})
// commonly we are passing a object to a function or returning a object from a function.
const user = {
  name: 'sagar',
  email: 'bhattsagar112@gmail.com',
  isActive: true,
}
const createUser = ({ name: string, isPaid: boolean }) => {}
// createUser({ name: 'sagar', isPaid: false, email: 'bhattsagar112@gmail.com' }) // ! Typescript will give an error, when we directly pass an object value to a function because we have asked for name and isPAid only, and email is not there
// ! Now when we will assign the object value to a variable, Typescript will not give an error, however we have asked for name and isPAid only
const newUSer = { name: 'sagar', isPaid: false, email: 'bhattsagar112@gmail.com' }
createUser(newUSer)

const createCourse = (): { name: string; price: number } => {
  return {
    name: 'reactjs',
    price: 399,
  }
}
console.log(createCourse())

// TODO: Type aliases
type typeUser = {
  name: string
  email: string
  isActive: boolean
}

const createUserType = (user: typeUser) => user
console.log(createUserType(user))

// TODO: Object Properties: readonly properties (can not change value) ,optional properties(?), Intersection properties(&)
// mongodb has unique _id for every record, which should not be manipulated, so we can use read only
type typeUserProfile = {
  readonly _id: string
  name: string
  email: string
  isActive: boolean
  credCardDetails?: number // ? This field is optional, so typescript will not throw any error if we do not pass it
}
const userProfile: typeUserProfile = {
  _id: '12345',
  name: 'sagar',
  email: 'bhattsagar112@gmail.com',
  isActive: true,
}

userProfile.email = 'bsaga112@gmail.com'
// userProfile._id = 'asa' // ! Typescript will give an error, because it is a read-only property and we change its value
console.log(userProfile)

type typeCardNumber = {
  cardNumber: number
}
type typeCardDate = {
  cardDate: Date
}
// ? Intersection Types(&): is mainly used to combine existing object types.
// ? here we combine typeCardNumber and typeCardDate
type typeCardDetails = typeCardNumber &
  typeCardNumber & {
    cvv: number // ! not good practice to combine object with existing object types
  }

export {}
