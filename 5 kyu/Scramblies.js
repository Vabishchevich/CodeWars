/*
Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, 
otherwise returns false.
Notes:
Only lower case letters will be used (a-z). No punctuation or digits will be included.
Performance needs to be considered
Examples
scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False
*/

// My solution

function scramble(str1, str2) {
var array1 = str1.split("").sort();
var array2 = str2.split("").sort();
var n = 0;
for (var i = 0; n < array2.length && i <= array1.length; i++) {
if (array2[n] == array1[i]) {
n++;
}
}
return (i <= array1.length);
}
