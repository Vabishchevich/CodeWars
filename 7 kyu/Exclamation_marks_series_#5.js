/*
Description:
Remove all exclamation marks from the end of words. Words are separated by spaces in the sentence.
Examples
remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi Hi"
remove("!!!Hi !!hi!!! !hi") === "!!!Hi !!hi !hi"
*/

// My solution

function remove(s) {
var n = s.split(" ").map(function (str) {
return str.replace(/(!)+$/g, "")
});
return n.join(" ");
}