/*
Description:
Remove all exclamation marks from the end of sentence.
Examples
remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi! Hi"
remove("Hi") === "Hi"
Note
Please don't post issue about difficulty or duplicate.
*/

// My solution

function remove(s) {
var k;
k = s.replace(/\!*$/, "");
return k;  
}