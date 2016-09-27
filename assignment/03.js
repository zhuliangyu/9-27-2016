// /**
//  * Created by macbook on 2016-09-27.
//  */
// Assignment: First Sunday Next Module
//
// Write a JavaScript program to find the first occurrence of the 1st of January being a Sunday between 2014 and 2050.

// var d = new Date(year, month, day, hours, minutes, seconds, milliseconds);

for (var i = 2014; i <= 2050; i++) {


    var date = new Date(i, 0, 1);

    if (date.getDay() == 0) {
        console.log(date);
        break;

    }

}