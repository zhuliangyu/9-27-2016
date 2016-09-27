/**
 * Created by macbook on 2016-09-27.
 */
// Assignment: [lab] Grade Next Module
//
// Write number1 Javascript code that prompts the user for their score (0 - 100) on the exam and then prints out their letter grade (F - A+).
//
//     Stretch: Make the program prompts the user to enter the score again if the it's more than number1 100 or less than 0.
//
// This assignment has not been marked

var input = prompt("give me a number:");
input = parseInt(input);

while (isNaN(input) || input > 100 || input < 0) {
    input = prompt("give me a number again:");
}


if (input > 85) {
    alert("A");
} else if (input > 70) {
    alert("B");
} else if (input > 65) {
    alert("C");
} else {
    alert("D");
}