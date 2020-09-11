/* eslint-env browser*/

var x = parseInt(window.prompt("Please enter value X"));  // returns a String

var input;
var inputNum;
var countUp = 0;     // num prezzi maggiori
var countDown = 0;  // num prezzi minori

while ((input = window.prompt("Please enter a value")) != null){
    inputNum = parseInt(input);
    if(inputNum < x){
       countDown ++;
    } else if (inputNum > x){
       countUp ++; 
    } else{}    // inputNum = x
}

document.write("<p> countUp is: " + countUp + "</p>");
document.write("<p> countDown is: " + countDown + "</p>");
