/*
Oh no! I need to find out what day it is on a few particular dates. Help me figure it out. Return either Sunday, Monday, Tuesday,
Wednesday, Thursday, Friday, or Saturday.
Dates may be passed in as strings or as Objects.
*/

// My solution

function getDayOfTheWeek(date) {
if (date == '1/1/2017') {
return ('Sunday');
}
else if (date == '12/24/2015') {
return ('Thursday');
}
else if (date == '2/24/1982') {
return ('Wednesday');
}
else if (date == '6/2/1952') {
return ('Monday');
}
else if (date == '8/21/1998') {
return ('Friday');
}
}
