/*
There is an array with some numbers. All numbers are equal except for one. Try to find it!
findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains more than 3 numbers.
The tests contain some very huge arrays, so think about performance.
*/

// My solution

function findUniq(arr) {
var n = arr.sort(function(a, b){
return a - b;
});
if (n[n.length - 1] !== n[n.length - 2]) {
return n[n.length - 1];
}
else {
return n[0];
}
}
