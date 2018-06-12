/*
Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
*/

// My solution

function removeExclamationMarks(s) {
var k;
k = s.replace(/\!/g, "");
return k;
}
