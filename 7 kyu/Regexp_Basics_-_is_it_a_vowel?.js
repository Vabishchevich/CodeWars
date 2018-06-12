/*
Implement String#vowel? (in Java StringUtils.isVowel(String)), which should return true if given object is a vowel, false otherwise.
*/

// My solution

String.prototype.vowel = function() {
return (/^[aeiou]{1}$/gi).test(this.valueOf());
};
