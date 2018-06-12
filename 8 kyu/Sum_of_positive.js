/*
You get an array of numbers, return the sum of all of the positives ones.
Example [1,-4,7,12] => 1 + 7 + 12 = 20
Note: if there is nothing to sum, the sum is default to 0.
*/

// My solution

function positiveSum(arr) {
var add = [];
var even = [];
var sum = 0;
for(var i = 0; i < arr.length; i++) {
arr[i] > 0 ? even.push(arr[i]) : add.push(arr[i])
}
for(var i = 0; i < even.length; i++) {
sum += even[i];
}
return sum;
}
