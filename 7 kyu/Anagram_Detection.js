/*
An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).
Note: anagrams are case insensitive
Complete the function to return true if the two arguments given are anagrams of theeach other; return false otherwise.
Examples
"foefet" is an anagram of "toffee"
"Buckethead" is an anagram of "DeathCubeK"
*/

// My solution

var isAnagram = function(test, original) {
if (test.length !== original.length) {
return false;
}
var original_massiv = original.toLowerCase().split("").sort();
var test_massiv = test.toLowerCase().split("").sort();
for (var i = 0; i < original_massiv.length; i++) {
if (original_massiv[i] !== test_massiv[i])
return false;
}
return true;
};
