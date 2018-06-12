/*
You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to 
the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.
For example:
Let's say you are given the array {1,2,3,4,3,2,1}:
Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the 
sum of the right side of the index ({3,2,1}) both equal 6.
Let's look at another one.
You are given the array {1,100,50,-51,1,1}:
Your function will return the index 1, because at the 1st position of the array, the sum of left side of the index ({1}) and the sum 
of the right side of the index ({50,-51,1,1}) both equal 1.
Last one:
You are given the array {20,10,-80,10,10,15,35}
At index 0 the left side is {}
The right side is {10,-80,10,10,15,35}
They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
Index 0 is the place where the left side and right side are equal.
Note: Please remember that in most programming/scripting languages the index of an array starts at 0.
Input:
An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.
Output:
The lowest index N where the side to the left of N is equal to the side to the right of N. If you do not find an index that fits these 
rules, then you will return -1.
Note:
If you are given an array with multiple answers, return the lowest correct index.
An empty array should be treated like a 0 in this problem.
*/

// My solution

function findEvenIndex(arr) {
if (arr.length == 0) {
return 0;
}
var sumOfArray = arrayOfNumbers => {
//Вычисляем сумму массива, инициализируя результат от 0
return arrayOfNumbers.reduce(function(sum, value) {
return sum + value
}, 0);
};
var left_sum = 0;
var right_sum = 0;
//i - позиция индекса
for (var i = 0; i < arr.length; i++) {
//left - массив слева от i
var left = arr.slice(0, i);
//right - массив справа от i
var right = arr.slice(i + 1, arr.length);
//Если позиция больше 0, получим сумму левого массива
if (i > 0) {
left_sum = sumOfArray(left);
}
else {
left_sum = 0;
}
//Если позиция меньше последней позиции индекса, получим сумму правого массива
if (i < arr.length-1) {
right_sum = sumOfArray(right);
}
else {
right_sum = 0;
}
if (left_sum == right_sum) {
return i;
}
else if (i == arr.length-1) {
return -1;
}
}
return -1;
}
