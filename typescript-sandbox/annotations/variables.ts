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