/*
Write function parseFloat (for Javascript parseF) which takes a string and returns a number or Nothing (for Python None, for 
Javascript null) if conversion is not possible.
*/

// My solution

function parseF(s) {
var k = parseFloat(s);
if (k == parseFloat(s)) {
return k;
}
else {
return null;
}
}
