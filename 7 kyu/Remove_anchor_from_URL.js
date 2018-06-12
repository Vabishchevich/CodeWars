/*
Complete the function/method so that it returns the url with anything after the anchor (#) removed.
Examples:
// returns 'www.codewars.com'
removeUrlAnchor('www.codewars.com#about')
// returns 'www.codewars.com?page=1' 
removeUrlAnchor('www.codewars.com?page=1')
*/

// My solution

function removeUrlAnchor(url) {
var n = url.split("#")[0];
return n;
}
