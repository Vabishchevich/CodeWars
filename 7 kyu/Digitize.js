/*
Given a non-negative integer, return an array / a list of the individual digits in order.
Examples:
123 => [1,2,3]
1 => [1]
8675309 => [8,6,7,5,3,0,9]
*/

// My solution

function digitize(n) {
var n = n.toString().split("");
var number = n.map(function(num) {
//map() создаёт новый массив с результатом вызова указанной функции для каждого элемента массива
return parseInt(num);
});
return number;
}
