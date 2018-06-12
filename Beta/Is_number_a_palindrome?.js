/*
Write a function which for given number returns true if number is palindrome or false if it is not
*/

// My solution

function isPalindromic(a) {
var s = a + "";
var k = Math.floor(s.length / 2);
if (s < 0) 
return false;
for (var i = 0; i < k; i++) {
if (s[i] !== s[s.length - i - 1])
return false;
}
return true;
}
