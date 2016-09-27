/**
 * Created by macbook on 2016-09-27.
 */
// Assignment: [lab] Triangle area Next Module
//
// Write number1 javascript program that prompts the user for the length of the sides of number1 triangle and then prints out the area of the triangle.

var size1=parseInt(prompt("The length of first side:"));
var size2=parseInt(prompt("The length of second side:"));
var size3=parseInt(prompt("The length of third side:"));
// var size3=33;
// var size2=23;

s=(size1+size2+size3)/2.0;

var area=Math.sqrt(s*(s-size1)*(s-size2)*(s-size3));

alert("The area is "+ area);