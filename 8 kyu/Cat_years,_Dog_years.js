/*
Kata Task
I have a cat and a dog.
I got them at the same time as kitten/puppy. That was humanYears years ago.
Return their respective ages now as [humanYears,catYears,dogYears]
NOTES:
humanYears >= 1
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that
*/

// My solution

var humanYearsCatYearsDogYears = function(humanYears) {
var cat;
var dog;
var array = [];
if (humanYears == 1) {
cat = 15 * humanYears;
dog = 15 * humanYears;
array = [humanYears, cat, dog];
}
else if (humanYears == 2) {
cat = 9 * (humanYears - 1) + 15;
dog = 9 * (humanYears - 1) + 15;
array = [humanYears, cat, dog];
}
else if (humanYears > 2) {
cat = 4 * (humanYears - 2) + 15 + 9;
dog = 5 * (humanYears - 2) + 15 + 9;
array = [humanYears, cat, dog];
}
return array;
}
