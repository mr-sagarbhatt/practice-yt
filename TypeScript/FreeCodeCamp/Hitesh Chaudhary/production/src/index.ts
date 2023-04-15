console.log(`Typescript is here`)
console.log(`Typescript is still here`)

// TODO: classes, type modifiers (readonly), Member Visibility/ Access Modifier (public, protected, private)

class User {
  // * Need to declare the class varibales(properties) before using in connstructor so that the typescript will know about name and email, and you can use it in constuctor
  // ? A field declaration creates a public writeable property on a class:
  name: string // ? public propety by default - so it will be accessible from anywhere
  private email: string // ? It will be accessible witin class only,can not access outside of class
  // #email: string // ? you can also create private propety using # as we are creating it in javascript, but use private keyword because it is much more clear to understand
  public city: string = '' // ! Typescript will give an error, if you have declared a class property but not initialized(assigned a default value) or not initialized in the constructor
  readonly phone: number = 760060 // ?  readonly modifier. This prevents assignments to the field outside of the constructor.
  constructor(name: string, email: string) {
    this.name = name // ! Typescript will give an error, if not declared on top of the constructor
    this.email = email // ! Typescript will give an error, if not declared on top of the constructor
  }

  // TODO: private method
  private deleteToken() {
    console.log('Token Deleted')
  }
}

const sagar = new User('sagar', 'bhattsagar112@gmail.com')
sagar.city = 'Ahmedabad'
// sagar.city = 4 // ! Typescript will give an error, because we are assigning a number to a string
// sagar.phone = 12345 // ! Typescript will give an error, because we are assigning a value to read only variable
// sagar.email // ! Typescript will give an error, because email is private property so you can not access outside of the class
// sagar.deleteToken() // ! Typescript will give an error, because deleteToken is private property so you can not access outside of the class
console.log(sagar, sagar.city)

// TODO: Shorter/ Professional way to write the class
class PUser {
  readonly phone: number = 760060
  constructor(public name: string, private email: string, public city: string = '') {}
}
const pSagar = new PUser('sagar', 'bhattsagar112@gmail.com')
pSagar.city = 'Ahmedabad'
console.log(pSagar, pSagar.city)

// TODO: getter-setter
// ? sometimes asked in interviews also
// TODO: getter-setter

class AppleUser {
  private _courseCount = 1
  readonly phone: number = 760060
  constructor(public name: string, private email: string, public city: string) {}

  getAppleEmail(): string {
    return `apple${this.email}`
  }

  // ? Getter Setter for private member
  get courseCount(): number {
    return this._courseCount
  }
  // TODO: sometimes asked in interviews also that set accessor cannot have a return type
  // set courseCount1(courseNum): void {} // ! Typescript will give an error, that the set accessor cannot have a return type
  set courseCount(courseNum) {
    if (courseNum <= 1) {
      throw new Error('Course count should be more than 1.')
    }
    this._courseCount = courseNum
  }
}
const appleUser = new AppleUser('sagar', 'bhattsagar112@gmail.com', 'Ahmedabad')
console.log(appleUser, appleUser.city)
