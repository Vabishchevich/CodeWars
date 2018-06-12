/*
Write a function that accepts two parameters (a and b) and says whether a is smaller than, bigger than, or equal to b.
Here is an example code:
var noIfsNoButs = function (a,b) {
  if(a > b) return a + " is greater than " + b
  else if(a < b) return a + " is smaller than " + b
  else if(a == b) return a + " is equal to " + b
}
There's only one problem...
You can't use if statements, and you can't use shorthands like (a < b)?true:false;
in fact the word "if" and the character "?" are not allowed in the code.
Inputs are guarenteed to be numbers
*/

// My solution

var noIfsNoButs = function (a,b) {
var n = a - b;
switch (n.toString()[0]){
case "-": 
return (a + " is smaller than " + b);
case "0": 
return (a + " is equal to " + b);
default: 
return (a + " is greater than " + b);
}
}
