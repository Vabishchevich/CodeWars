/*
You will be given an array (a) and a value (x). All you need to do is check whether the provided array contains the value.
Array can contain numbers or strings. X can be either. Return true if the array contains the value, false if not.
*/

// My solution

function check(a,x) {
var k;
k = a.indexOf(x) != -1;
return k;
};
