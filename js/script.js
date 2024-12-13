console.log('Hello, World!');

// Variables

// String ("")
let myName = "Christian";
let lastName = "Bonilla";

// Number
let age = 20;
let height = 1.72; // Meters

// Boolean
let isStudent = true;

// Display
console.log(myName);
console.log(lastName);

// Concatenation
console.log("My name is: " + myName + " " + lastName + " and I am " + age + " years old, and my height is " + 
    height + "m.");

// Operations
let num1 = 10;
let num2 = 20;

let additon = num1 + num2;
let subtraction = num1 - num2;
let multiplication = num1 * num2;
let division = num1 / num2;

console.log("Addition is: " + additon);
console.log("Subtraction is: " + subtraction);
console.log("Multiplication is: " + multiplication);
console.log("Division is: " + division);

// Challenge 1: Area of a circle
let radius = 3;
const PI = 3.1416;

let area = PI * Math.pow(radius, 2);
console.log("The area of a circle with a radius of " + radius + " is " + area.toFixed(2));

// Difference between let and const

// Define the variable
let aVariable = 20;

// Define and assign the value at the same time
let otherVariable = 30;

console.log(aVariable, otherVariable);

aVariable = 50;
otherVariable = 100;

console.log(aVariable, otherVariable);

// const
const weekDays = 7;

console.log(weekDays);

// Not possible to reassign a value to a constant
// weekDays = 5;