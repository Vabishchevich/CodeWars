/*
Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from 
shortest to longest.
For example, if this array were passed as an argument:
["Telescopes", "Glasses", "Eyes", "Monocles"]
Your function would return the following array:
["Eyes", "Glasses", "Monocles", "Telescopes"]
All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple 
strings of the same length.
*/

// My solution

function sortByLength (array) {
var k;
k = array.sort(function(a, b) {
var s1 = "" + a; //будет по-любому строка
var s2 = "" + b;
if(s1.length < s2.lenght) {
return -1;
}
else if(s1.length > s2.length) {
return 1;
}
return 0;
});
return k;
}
