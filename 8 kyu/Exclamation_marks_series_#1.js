/*
Description:
Remove a exclamation mark from the end of string. For a beginner kata, you can assume that the input data is always a string, no 
need to verify it.
Examples
remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi!!"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi! Hi"
remove("Hi") === "Hi"
Note
Please don't post issue about difficulty or duplicate.
*/

// My solution

function remove(s) {
var hi = s.length - 1;
if (s[hi] == '!') {
s = s.slice(0, hi);
}
return s;
}
