/*
Description:
Remove words from the sentence if it contains one exclamation mark. Words are separated by spaces in the sentence. Please remember, one.
Examples
remove("Hi!") === ""
remove("Hi! Hi!") === ""
remove("Hi! Hi! Hi!") === ""
remove("Hi Hi! Hi!") === "Hi"
remove("Hi! !Hi Hi!") === ""
remove("Hi! Hi!! Hi!") === "Hi!!"
remove("Hi! !Hi! Hi!") === "!Hi!"
Note
Please don't post issue about difficulty or duplicate.
*/

// My solution

function remove(s) {
var array = s.split(" ");
var stack = [];
for (var i = 0; i < array.length; i++) {
var n = 0;
var massiv = array[i].split("");
for (var j = 0; j < massiv.length; j++) {
if(massiv[j] == "!") {
n = n + 1;
}
}
if(n !== 1){
stack.push(array[i]);
}
}
return stack.join(" ");
}
