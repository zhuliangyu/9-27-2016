/**
 * Created by macbook on 2016-09-27.
 */

// Assignment: [lab] Largest of three numbers Next Module
//
// Write number1 Javascript code the prompts the user for three numbers and returns the largest of the three numbers printing: "The largest number is X"
/**
 * Created by macbook on 2016-09-27.
 */
// Assignment: [Demo] Bigger number Next Module
//
// Write number1 Javascript code that prompts the user for two number and alerts the larger of the two number printing: "The larger number is X"



arr=new Array();
var number1=prompt("first number:");
number1=parseInt(number1);
var number2=prompt("second number:");
number2=parseInt(number2);
var number3=prompt("third number:");
number3=parseInt(number3);

arr.push(number1,number2,number3);

max=Number.MIN_VALUE;
for (var i = 0; i < arr.length; i++) {
      if(arr[i]>max){
          max=arr[i];
      }
}

if (isNaN(number1)|| isNaN(number2)||isNaN(number3)){
    alert("Not a number");
}else{
    alert("Max number is "+ max);
}
