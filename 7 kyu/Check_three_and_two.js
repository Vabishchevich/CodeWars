/*
Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran), check if the array contains three and two 
of the same values.
Examples
["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
["a", "a", "a", "a", "a"] ==> false // 5x "a"
*/

// My solution

function checkThreeAndTwo(array) {
var a = 0;
var b = 0;
var c = 0;
for (var i = 0; i < array.length; i++) {
if (array[i] == "a") {
a++;
}
else if (array[i] == "b") {
b++;
}
else if (array[i] == "c") {
c++;
}
}
if (a == 3 && b == 2 || a == 2 && b == 3 || a == 3 && c == 2|| a == 2 && c == 3 ||b == 3 && c == 2 || c == 3 && b == 2) {
return true;
}
else { 
return false;
}
}
