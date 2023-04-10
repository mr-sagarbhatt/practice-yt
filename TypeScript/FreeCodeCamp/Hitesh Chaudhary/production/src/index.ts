console.log(`Typescript is here`)
console.log(`Typescript is still here`)

// TODO: classes

class User {
  // * to aware the typescriopt about name and email, so that it can be used in constuctor
  name: string
  email: string
  city: string = '' // ! Typescript will give an error, if you have declared a class property but not initialized(assigned a default value) or not assigned in the constructor
  constructor(name: string, email: string) {
    this.name = name // ! Typescript will give an error, if not declared on top of the constructor
    this.email = email // ! Typescript will give an error, if not declared on top of the constructor
  }
}

const sagar = new User('sagar', 'bhattsagar112@gmail.com')
sagar.city = 'Ahmedabad'
console.log(sagar, sagar.city)
