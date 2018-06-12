/*
Given a string, remove any characters that are unique from the string.
Example:
input: "abccdefee"
output: "cceee"
*/

// My solution

function onlyDuplicates(str) {
return str.split("").filter(b => str.indexOf(b) != str.lastIndexOf(b)).join("");
//lastIndexOf() возвращает индекс последнего вхождения указанного значения в строковый объект String
}
