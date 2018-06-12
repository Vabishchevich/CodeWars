/*
Write a function that returns a string in which firstname is swapped with last name.
nameShuffler('john McClane'); => "McClane john"
*/

// My solution

function nameShuffler(str) {
var name = str.split(" ");
var reverse = name[1] + " " + name[0];
return reverse;
}
