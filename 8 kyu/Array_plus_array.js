/*
I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.
P.S. Each array includes only integer numbers. Output is a number too.
*/

// My solution

function arrayPlusArray(arr1, arr2) {
var arr3 = [];
var total = 0;   
arr3 = arr1.concat(arr2); 
for (var i = 0; i < arr3.length; i++) {   
total += arr3[i];                  
}
return total; 
}
