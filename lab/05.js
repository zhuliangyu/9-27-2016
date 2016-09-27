/**
 * Created by macbook on 2016-09-27.
//  */
// Assignment: [lab] FizzBuzz ...It's never going to leave you alone Next Module
//
// Write number1 function called fizzBuzz that takes two numbers, then iterates through the numbers 1 - 100. The function will print "fizz" if the current number is divisible by the first number, "buzz" if the current number is divisible by the second number, "fizzbuzz" if it's divisible by both, else print the current number.

var num1=parseInt(prompt("First Number:"));
var num2=parseInt(prompt("Second Number:"));
for(var i=1;i<=100;i++){
    if (i%num1==0&& i%num2==0){
        document.write("FizzBuzz ");
    }else if(i%num1==0){
        document.write("Fizz ");
    }else if(i%num2==0){
        document.write("Buzz ");
    }else{
        document.write(i+" ");
    }

}