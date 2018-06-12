/*
Write a function called repeatStr which repeats the given string string exactly n times.
repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
*/

// My solution

function repeatStr (n, s) {
var str = "";
for (var i = 0; i < n; i++) { 
str += s;
}
return str;
}
