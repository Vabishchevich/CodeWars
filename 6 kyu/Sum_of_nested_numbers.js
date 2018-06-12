/*
Build a function sumNestedNumbers/sum_nested_numbers that finds the sum of all numbers in a series of nested arrays raised to the 
power of their respective nesting levels. Numbers in the outer most array should be raised to the power of 1.
For example,
sumNestedNumbers([1, [2], 3, [4, [5]]])
should return 1 + 2*2 + 3 + 4*4 + 5*5*5 === 149
*/

// My solution

function sumNestedNumbers(arr, level) {
var level = level || 1;
return arr.reduce((acc, value) => {
return acc + (Array.isArray(value) ? sumNestedNumbers(value, level + 1) : Math.pow(value, level))
}, 0);
//isArray() возвращает true, если объект является массивом и false, если он массивом не является.
}
