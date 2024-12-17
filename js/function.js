// console.log("function.js");

// Creating a function
// function greet (userName) {
//     return "Hello world from a function!, and hello " + userName;
// }

// console.log(greet("Chris"));

// Anonymous function
// let greeTwo = function(userName) {
//     return "Hello world from an anonymous function!, and hello " + userName;
// }

// console.log(greeTwo("Chris"));

// Create a function with multple parameters
// function greetThree (userName, place) {
//     return "Hello " + userName + " from " + place;
// }

// console.log(greetThree("Chris", "Tecate"));

// function multiplyThree(num) {
//     return num * 3;
// }

// console.log(multiplyThree(3));
// console.log(multiplyThree(4));
// console.log(multiplyThree(5));

// Challenge: Create a function that combine two names
// function combineNames(name1, name2) {
//     return name1 + " " + name2;
// }

// console.log(combineNames("Luis", "Alan"));

// function sum(num1, num2) {
//     return num1 + num2;
// }

// let result = sum(3, 2);
// console.log("The result of the sum is: " + result);

// Prompts
// let productName = prompt("Enter the product name:");
// let productPrice = Number(prompt("Enter the product price:"));
// console.log(productName);
// console.log(productPrice);
// console.log(sum(2, productPrice));

// let total = 0;
// function addCart(price) {
//     total = total + price;
//     return total;
// }

// total = addCart(productPrice);
// console.log("The total is: " + total);

// function calculateTaxes(total) {
//     return 1.11 * total;
// }

// console.log("The total is " + calculateTaxes(total));
// document.write("<p>" + productName + " - " + calculateTaxes(total).toFixed(2) + "</p>");

// Mini Challenge
// create a substraction function
// the parameters should be placed using prompts
// the output should be "The result of substraction NUM1 and NUM2 is: RESULT"
// NUM1, NUM2 and RESULT are variables
// display the result in the console and in the html
// num1 = Number(prompt("Enter the first number:"));
// num2 = Number(prompt("Enter the second number:"));

// function substraction(num1, num2) {
//     return num1 - num2;
// }

// let resultSubstraction = substraction(num1, num2);
// console.log("The result of substraction " + num1 + " and " + num2 + " is: " + resultSubstraction);
// document.write("<p>The result of substraction " + num1 + " and " + num2 + " is: " + resultSubstraction + "</p>");

// Linking a function to a button :)
function addProduct() {
    let productName = prompt("Enter the product name:");
    document.getElementById("list").innerHTML += "<li>" + productName + "</li>";
}