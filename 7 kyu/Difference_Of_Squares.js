/*
Find the difference between the sum of the squares of the first n natural numbers (1 <= n <= 100) and the square of their sum.
Example
For example, when n = 10:
The square of the sum of the numbers is:
(1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10)2 = 552 = 3025
The sum of the squares of the numbers is:
12 + 22 + 32 + 42 + 52 + 62 + 72 + 82 + 92 + 102 = 385
Hence the difference between square of the sum of the first ten natural numbers and the sum of the squares of those numbes is:
3025 - 385 = 2640
*/

// My solution

function differenceOfSquares(n) {
var x = 0;
var y = 0;
var i = 0;
var j = 0;
(function sumOfSquares() {
while (i <= n) {
x += Math.pow(i, 2);
i++;
}
console.log(x);
return x;
}());
(function squareOfSums() {
while (j <= n) {
y += j;
j++;
}
y = Math.pow(y, 2);
console.log(y);
return y;
}());
return y - x;
}
