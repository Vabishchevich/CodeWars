/*
In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, 
lowercase, numbers and special characters, as follows.
solve("*'&ABCDabcde12345") = [4,5,5,3]. 
--the order is: uppercase letters, lowercase, numbers and special characters.
More examples in the test cases.
Good luck!
*/

// My solution

function solve(s) {
var all = s.length;
for(var i = 0, upper = 0, lower = 0, digits = 0, symbols = 0, char; i < all; i++) {
char = s.charAt(i);
if (!isNaN(char * 1)) {
digits++;
}
else if ("<>@!#$%^&*()_+[]{}?:;|'\"\\,./~`-=".indexOf(char) != -1) {
symbols++;
}
else if (char == char.toUpperCase()) {
upper++;
}
else if (char == char.toLowerCase()) {
lower++;
}
}
return [upper, lower, digits, symbols];
}
