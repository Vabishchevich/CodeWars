/*
Get the number n (n>0) to return the reversed sequence from n to 1.
Example : n=5 >> [5,4,3,2,1]
*/

// My solution

const reverseSeq = n => {
var array = [];
for (var i = n; i > 0; i--) {
array.push(i);
}
return array;
};
