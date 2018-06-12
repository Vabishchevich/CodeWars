/*
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters 
then it should replace the missing second character of the final pair with an underscore ('_').
Examples:
solution('abc') // should return ['ab', 'c_']
solution('abcdef') // should return ['ab', 'cd', 'ef']
*/

// My solution

function solution(str){
var array = str.split("");
var newArray = [];
var good = [];
if (array.length % 2 == 0) {
for (var i = 0; i < array.length; i = i + 2) {
newArray.push(array.slice(i, i + 2));
}
for (var n = 0; n < newArray.length; n++) {
var string = "";
string = newArray[n].join("");
good.push(string);
}
return good;
}  
else {
for (var i = 0; i < array.length; i = i +2) {
newArray.push(array.slice(i, i + 2));
}
for (var n = 0; n < newArray.length; n++) {
var string = "";
string = newArray[n].join("");
good.push(string);
}
good[good.length-1] = good[good.length -1] + "_";
return good;
} 
}
