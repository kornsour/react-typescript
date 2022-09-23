# react-typescript

React app using Typescript

## Typescript

### The TS Type System

- Helps us catch errors *during development*
- Uses 'type annotations' to analyze our code
- Only active *during development*
- Doesn't provide any performance optimization
- Writing Typescript is the same as writing Javascript with some "extra documentation"
- Typescript has no effect on hor our code gets exectured by the browser or Node
- It's best to think of Typescript as a pair programmer working beside you

### Installing the Typescript compiler

`npm install -g typescript ts-node`

### Types

#### Primitive Types

- number
- boolean
- void
- undefined
- string
- symbol
- null

#### Object Types

- functions
- arrays
- classes
- objects

#### Why do we care about types?

- Types are used by the Typescript Compiler to analyze our code for errors
- Types allow other engineers to understand what values are flowing around our codebase

#### Type Annotations & Type Inference

- Type annotations are code we add to tell Typescript what type of value a variable will refer to
- Type inference is Typescript trying to figure out what type of value a variable refers to
- If declaration and initialization are on the same line, Typescript will figure out the type of the variable for us

When to use:

- Type annotations:
  - When a function returns the 'any' type and we need to clarify the value
  - When we declare a variable on one line then initilaize it later
  - When we want a variable to have a type that can't be inferred
- Type inference
  - Always!

The "any" type:

- A type, just as 'string' or 'boolean' are
- Means TS has no idea what this is - can't check for correct property references
- Avoid variables with 'any' at all costs
