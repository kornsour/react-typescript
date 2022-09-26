const carMakers = ['ford', 'toyota', 'chevy'];

// Want to annoate type of array when initialzing an empty one
const myNumbers: number[] = [];

// Help with inference when extracting values
const car2 = carMakers[0];
const myCar = carMakers.pop();

// Flexible Types
const importantDates = [new Date(), '2030-10-10'];
