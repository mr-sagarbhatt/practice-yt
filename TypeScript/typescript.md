<samp>

# Typescript ( Used for Type Safety ) (.ts , .tsx for components)

[_*Use typescript playground for example and config*_](https://www.typescriptlang.org/play)

    - Superset of javascript
    - Used for Type Safety which is missing in javascript
    - everything is available in typescript which we can you use in javascript and lot more
    - allow us to write javascript in precise manner so that the code faces lot less error in the run time
    - Error will displayed when we write the code (code editor gives a red squiggly line)
    - typescript is a development tool and typescript code will compiled in javascript

## what typescript does?

    - static Checking : When we write the code parser or syntax is being analyzed by the IDEs, analyze the code as we type,     checking the code at compile time
    - TypeScript actually only performs static type checking at compile-time.
    - Check the code and gives a hint that it might get error, still possible our code will run well
    - Helps to figuring out what data is processed, what data is about to comming from any resources, what data is your function    going to send out

## Situations where typescript used and we don't required explicit type checking

    - A function accepts 2 numbers
    - A function returns a string

## how typescript work?

    - typescript code will converted in javascript

## Syntx

`let variableName: type = value`

# Topics

## Type Safety

    - Type Safety is missing in javascript
    - Ex: If you add number with string value (1 + '1' = 11 | null + 1 = 1 | undefined + 1 = NaN)

## [_*Data Types*_](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)

    Number, String, Boolean, Null, Undefined, Object, Array, Tuples, Any, Never, Void, unknown

    Primitive data types: string, number, boolean
    Special data types: any, unknown, never, undefined & null

    JavaScript has eight data types. Seven primitive types and one object Data type. The primitive types are number, string, boolean, bigint, symbol, undefined, and null. Everything else is an object in JavaScript.
    The TypeScript Type System supports all of them and also brings its own special types. They are unknown, any, void & never.

#### [_*Type Inference*_](https://www.typescriptlang.org/docs/handbook/type-inference.html)

    In TypeScript, there are several places where type inference is used to provide type information when there is no explicit type annotation.
    Ex: let myNum = 6 | Here we have no explicit type annotation | We have already initialized a value
    The type of the myNum variable is inferred to be number. This kind of inference takes place when initializing variables and members, setting parameter default values, and determining function return types.

# Two ways of installation (Globally | Locally)

    - Globally : For all projects | Installed in system. Used it for learning
    - Locally : For projects we required ts config file for configuration

# Points To Remember

## Types

    Any: Not a good practice to use type Any, If possible specify the type. If we don't supply a type, it will be of type any by default and we can change it through ts config. file
    Number: JavaScript does not have a special runtime value for integers, so there’s no equivalent to int or float - everything is simply number.
    Type Inference: takes place when initializing variables and members, setting parameter default values, and determining function return types. For other scenarios we need to define explicit type annotation else type will be any by default.

</samp>
