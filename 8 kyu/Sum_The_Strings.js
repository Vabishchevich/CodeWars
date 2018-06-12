/*
Create a function that takes 2 positive integers in form of a string as an input, and outputs the sum (also as a string):
sumStr("4", "5")    // should output "9"
sumStr("34", "5")   // should output "39"
If either input is an empty string, consider it as zero.
*/

// My solution

function sumStr(a,b) {
if ((a == "") && (b == "")) {
return "0";
}
else{
var sum = Number(a) + Number(b);
return sum.toString();
}
}
