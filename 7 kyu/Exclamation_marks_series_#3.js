/*
Description:
Remove all exclamation marks from sentence except at the end.
Examples
remove("Hi!") == "Hi!"
remove("Hi!!!") == "Hi!!!"
remove("!Hi") == "Hi"
remove("!Hi!") == "Hi!"
remove("Hi! Hi!") == "Hi Hi!"
remove("Hi") == "Hi"
Note
Please don't post issue about difficulty or duplicate.
*/

// My solution

function remove(s) {
var k;
k = s.replace(/!+([^!])/g, "$1");
return k;
}
