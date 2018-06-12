/*
If　a = 1, b = 2, c = 3 ... z = 26
Then l + o + v + e = 54
and f + r + i + e + n + d + s + h + i + p = 108
So friendship is twice stronger than love :-)
The input will always be in lowercase and never be empty.
*/

// My solution

function wordsToMarks(string) {
return string.split("").reduce(function(a, b) {
return a + b.charCodeAt() - 96;
}, 0);
}
