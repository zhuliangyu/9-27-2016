/**
 * Created by macbook on 2016-09-27.
 */
// Assignment: Capitalize even letters Next Module
//
// Write a code that takes in a string from the user and then prints back with even letters upcased and the rest downcased. For example, "hello" becomes "hElLo"

var cap = function (string) {
    var total="";
    for (var i = 0; i < string.length; i++) {
        if(i%2==0){
            total+=string.charAt(i).toUpperCase();
        }else{
            total+=string.charAt(i);
        }


    }
    return total;

}


console.log(cap("asdasdasd"));
