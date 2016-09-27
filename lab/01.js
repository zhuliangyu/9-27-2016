/**
 * Created by macbook on 2016-09-27.
 */
// Assignment: [Demo] Bigger number Next Module
//
// Write number1 Javascript code that prompts the user for two number and alerts the larger of the two number printing: "The larger number is X"


var compare = function (a, b) {
    if (isNaN(a) || isNaN(b)) {
        alert("Those are not number1 number");
    }

    else if (a > b) {
        alert("The larger number is " + a);
    } else if (a < b) {
        alert("The larger numnber is " + b);
    } else {
        alert("The numbers are equal.");
    }


};

var number1 = prompt("first number:");
number1 = parseInt(number1);
var number2 = prompt("second number:");
number2 = parseInt(number2);
compare(number1, number2);