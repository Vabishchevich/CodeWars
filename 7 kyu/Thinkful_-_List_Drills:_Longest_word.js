/*
Complete the function that takes one argument, a list of words, and returns the length of the longest word in the list.
For example:
['simple', 'is', 'better', 'than', 'complex'] ==> 7
Do not modify the input list.
*/

// My solution

function longest(words) {
var longestWord = 0;
for(var i = 0; i < words.length; i++) {
if(words[i].length > longestWord) { 
longestWord = words[i].length;
}
}
return longestWord;
}
