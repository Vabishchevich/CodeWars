/*
Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.
Examples
Digits.Explode("312") = "333122"
Digits.Explode("102269") = "12222666666999999999"
*/

// My solution

function explode(s) {
var stack = [];
var number = s.split("");
for (var i = 0; i < number.length; i++) {
var n = number[i];
for (var j = 0; j < n; j++){
stack.push(n);
}
}
return stack.join("");
}
