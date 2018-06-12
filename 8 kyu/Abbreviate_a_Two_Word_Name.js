/*
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
The output should be two capital letters with a dot seperating them.
It should look like this:
Sam Harris => S.H
Patrick Feeney => P.F
*/

// My solution

function abbrevName(name) {
var fullname = name.split(" ");
return fullname[0].charAt(0).toUpperCase() + "."+ fullname[1].charAt(0).toUpperCase();
//charAt возвращает указанный символ из строки
}
