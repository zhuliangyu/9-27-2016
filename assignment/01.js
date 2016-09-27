/**
 * Created by macbook on 2016-09-27.
 */
// Assignment: Capitalize Next Module
//
// There is no `capitalize` method for Javascript string. Write a function that capitalizes a given string.

var stringArray=new Array();
function capitalize(string, index) {
    for (var i = 0; i < string.length; i++) {
        if (i == index) {
            stringArray.push(string[index].toUpperCase());

        } else {
            stringArray.push(string[i]);
        }

    }
    return stringArray.join("");


}

console.log(capitalize("asdaasd", 5));
