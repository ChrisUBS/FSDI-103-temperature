// Activity 1
// let num = parseInt(prompt("Enter a number: "));
// table(num);
function table(num) {
    document.write("<h1>Activity 1</h1>");
    document.write("<ul>");
    for (let i = 1; i <= 10; i++) {
        document.write("<li>");
        document.write(num + " x " + i + " = " + num * i);
        document.write("</li>");
    }
    document.write("</ul>");
}

// Activity 2
function table2(num) {
    document.write("<h1>Activity 2</h1>");
    document.write("<ul>");
    for (let i = 1; i <= 100; i++) {
        document.write(`
            <li>
                ${num} x ${i} = ${num * i}
            </li>
        `);
    }
    document.write("</ul>");
}

// Activity 3
// for(let i=0; i<4; i++){
//     document.write("<p>My for is working?</p>");
// }

// for(let i=1; i<=10; i++){
//     document.write(`<p>${i}</p>`);
// }

// Activity 4
// for(let i=2; i<21; i+=2){
//     document.write(`<p>${i}</p>`);
// }

// Arrays
let students = ["Vonde", "Derrick", "Christian", "Nick", "Tom", "Brandon", "Christopher", "Anthony", "Eduardo"];
let ages = [32, 33, 45, 23, 20, 30, 40, 28, 22];

// Display on the console
// console.table(students);
// console.table(ages);

// Change info
// students[5] = "Brandon Merle";
// console.table

// age[8] = 20;
// console.table(ages);

document.write("<table border='1'>");
document.write("<tr>");
document.write("<th>Id</th>");
document.write("<th>Student</th>");
document.write("<th>Age</th>");
document.write("</tr>");
for (let i = 0; i < students.length; i++) {
    document.write("<tr>");
    document.write(`<td>${i + 1}</td>`);
    document.write(`<td>${students[i]}</td>`);
    document.write(`<td>${ages[i]}</td>`);
    document.write("</tr>");
}
document.write("</table>");
