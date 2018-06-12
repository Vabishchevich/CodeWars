/*
In this kata you need to write a function that will receive two strings (n1 and n2), each representing an integer as a binary number. 
A third parameter will be provided (o) as a string representing one of the following operators: add, subtract, multiply.
Your task is to write the calculate function so that it will perform the arithmetic and the result returned should be a string 
representing the binary result.
Examples:
1 + 1 === 10
10 + 10 === 100
Negative binary numbers are usually preceded by several 1's. For this kata, negative numbers can be represented with the negative
symbol at the beginning of the string.
Examples of negatives:
1 - 10 === -1
10 - 100 === -10
*/

// My solution

function calculate(n1, n2, o) {
switch(o) {
case "add":
return (parseInt(n1, 2) + parseInt(n2, 2)).toString(2);
break;
case "subtract":
return (parseInt(n1, 2) - parseInt(n2, 2)).toString(2);
break;
case "multiply":
return (parseInt(n1, 2) * parseInt(n2, 2)).toString(2);
break;
}
}
