/*
Your task is to make a function that can take any non-negative integer as a argument and return it with its digits in descending order. 
Essentially, rearrange the digits to create the highest possible number.
Examples:
Input: 21445 Output: 54421
Input: 145263 Output: 654321
Input: 1254859723 Output: 9875543221
*/

// My solution

function descendingOrder(n) {
if (n > 0) {
return + n.toString().split("").sort().reverse().join("");
}
else {
return n;
}
}
