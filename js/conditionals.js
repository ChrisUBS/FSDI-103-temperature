// console.log("if-statement");

// ---if stament---
// if (condition) {
// code to be excuted if condition is true
// }

// if (3 <= 5) {
//     console.log("I am inside the if statement");
// }

// let student1 = 45;
// let student2 = 45;

// if (student1 == student2) {
//     console.log("Both are the same");
// }

// ---if-else stament---
// if (condition) {
// code to be excuted if condition is true
// } else {
// code to be excuted if condition is false
// }

// let isTrue = false;

// if (isTrue) {
//     console.log("Yes");
// } else {
//     console.log("No");
// }

// Challenge:
// check if the age is greater than 21
// True: display "you are an adult"
// False: display "you are underage"

let age = 50;

// if (age >= 21) {
//     console.log("You are an adult");
// } else {
//     console.log("You are underage");
// }

// ---if-else if-else stament---
// if (condition) {
// code to be excuted if condition is true
// } else if (condition) {
// code to be excuted if condition is true
// } else {
// code to be excuted if conditions are false
// }

// age = 5;

// if (age < 13) {
//     console.log("Child");
// } else if (age < 21) {
//     console.log("Teenager");
// } else if (age < 64) {
//     console.log("Adult");
// } else {
//     console.log("Senior");
// }

// Challenge 4: Movie Ticket Price Calculator

// function movieTicketPrice(age) {
//     if (age < 12) {
//         return 5;
//     } else if (age > 12 && age < 18) {
//         return 8;
//     } else if (age >= 18) {
//         return 10;
//     } else {
//         return 0;
//     }
// }

// age = prompt("Enter your age: ");
// console.log("Ticket price: $" + movieTicketPrice(age));

// Challenge 5: Weather Outfit Suggestion

function weatherOutfit() {
    let temperature = prompt("Enter the temperature: ");
    let outfit = "";
    document.getElementById("weather").classList.remove("cold", "hot");

    if (temperature < 15) {
        outfit = "Jacket";
        document.getElementById("weather").classList.add("cold");
    } else if (temperature < 25) {
        outfit = "Sweater";
    } else {
        outfit = "T-shirt";
        document.getElementById("weather").classList.add("hot");
    }

    document.getElementById("weather").innerHTML = "Wear a " + outfit;
}

// Hacer un termometro que cambie de color dependiendo de la temperatura y puede mostrar de fondo otros elementos como un solo o asi