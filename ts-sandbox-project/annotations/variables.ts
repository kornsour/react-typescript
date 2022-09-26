let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let myNums: number[] = [1,2,3];
let truths: boolean[] = [true, true, false];

//Classes
class Car {

}
let car: Car = new Car();

// Object literal
// Only need semicolon for type annotation when separating different property names
let point: { x: number; y: number } = {
  x: 10,
  y: 20
};

// Function

// Everything up to "void" is the annotation
// Before the first arrow is the annotation for the different arguements of the function
// After the first arrow is the annotation for what should be returned by the function

// Everything after the "=" is the implementation
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use annotations
// 1. Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
// JSON.parse will return an "any" type back by default
const coordinates: { x: number; y: number } = JSON.parse(json);

// 2. When we declare a var on one line and initialize it later
let words = ['red', 'green', 'blue'];
// Just an example, a better implementation would to set it as false initially
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// 3. When we want a variable to have a type that can't be inferred correctly
let numbers = [-10, -1, 12];
// value can either be a boolean or a number
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
