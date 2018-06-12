/*
You have an array of numbers.
Your task is to sort ascending odd numbers but even numbers must be on their places.
Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.
Example
sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]
*/

// My solution

function sortArray(array) {
var array_1 = array.filter(bad_num).sort(top);
return array.map(replace);
function top(a, b) {
return a > b;
}
function bad_num(number) {
return number % 2;
}
function replace(number) {
return bad_num(number) ? array_1.shift() : number;
}
}
