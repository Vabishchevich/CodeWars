/*
Given an array, find the int that appears an odd number of times.
There will always be only one integer that appears an odd number of times.
*/

// My solution

function findOdd(A) {
for (var i = 0; i < A.length; i++) {
var quantity = 0;
for(var j = 0; j < A.length; j++) {
if(A[j] == A[i]) {
quantity++;
}
}
if (quantity % 2 != 0) {
return A[i];
}
}
quantity = 0;
}
