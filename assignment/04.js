/**
 * Created by macbook on 2016-09-27.
 */
//
// Assignment: Guessing game Next Module
//
// Write a JavaScript program where the program takes a random integer between 1 and 100, the user is then prompted to input a guess number. If the user's input matches with the random integer, the program will display a message "Good Work" otherwise display your number is higher or lower and prompts the user to enter another number. At the end, when the user finally guesses the number it will display: "Good Work. You guessed in X attempts".

var random = Math.floor(Math.random() * 100);
// var random = 30;
var input = prompt("give me a number:");
// var input = 35;
while (input!=random) {

    // console.log("try again");
    input = prompt("give me a number:");


}

alert("You are right!")