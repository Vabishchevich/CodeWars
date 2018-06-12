/*
Your task in this kata is to implement a function that calculates the sum of the integers inside a string. For example, in the string 
"The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", the sum of the integers is 3635.
Note: only positive integers will be tested.
*/

// My solution

function sumOfIntegersInString(s) {
var reg = (/\d+/g);
var sum = 0;
var coincidence;
while (coincidence = reg.exec(s)) {
sum = sum + parseInt(coincidence);
}
return sum;
}
