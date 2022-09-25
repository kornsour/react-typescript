# react-typescript

React app using Typescript

## Typescript

### The TS Type System

- Helps us catch errors _during development_
- Uses 'type annotations' to analyze our code
- Only active _during development_
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

### Typed Arrays

- Arrays where each element is some consistent type of value
- Why do we care?
  - TS can do type inference when extracting values from an array
  - TS can prevent us form adding incompatible values to the array
  - We can get help with 'map', 'forEach', 'reduce' functions
  - Flexible - arrays can still contain multiple different types
- When to use them?
  - Any time we need to represent a collection of records with some arbitrary sort order

### Tuples

- Array-like structure where each element represents some property of a record
- An object makes things a lot more clear than a tuple
  - There are some corner cases but not used often

### Interfaces

- Interfaces + Classes = How we get really strong code reuse in TS
- Creates a new type, describing the property names and value types of an object
- General strategy for reusable code in TS
  - Create functions that accept arguments that are tuyped with interfaces
  - Objects/classes can decide to 'implement' as given interface to work with a function

### TS Classes

- Blueprint to create an object with some fields (values) and methods (functions) to represent a thing
- Modifiers
  - public(default): This method can be called anywhere, any time
  - private: This method can only be called by other methods in this class
    - Private modifires DO NOT add any additional layer of application security
    - We only use the private modifier to restrict methods other developers can call
      - For example, if we don't trust others to call a specific method becuase it might break stuff
  - protected: This method can be called by other methods in this class, or by other methods in child classes
