/*
Generate a valid randomly generated rgb color string. Assume all of them have 6 digits always.
Valid Output
#ffffff
#25a403
#000001
Non-Valid Output
#fff
#aaa
#zzzzz
cafebabe
#a567567676576756A7
*/

// My solution

var generateColor = function() {
return "#" + Math.random().toString(16).slice(2, 8);
};
