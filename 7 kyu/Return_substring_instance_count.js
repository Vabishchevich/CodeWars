/*
Complete the solution so that it returns the number of times the search_text is found within the full_text.
Usage example:
solution('aa_bb_cc_dd_bb_e', 'bb') # should return 2 since bb shows up twice
solution('aaabbbcccc', 'bbb') # should return 1
*/

// My solution

function solution(fullText, searchText) {
var reg = new RegExp(searchText, "g")
var count = 0;
var coincidence; //совпадение
while (coincidence = reg.exec(fullText)) {
count++;
}
return count;
}
