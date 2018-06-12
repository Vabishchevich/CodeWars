/*
You are having a BBQ, after the BBQ you are left with the rubbish. You have 3 recycling boxes:
Red: Plastics, Green: Glass, Blue: Card.
You will need to sort the rubbish according to the material and return the number of items in each box in the form of an array 
i.e [2,3,4] where 2 is the number of plastic items, 3 is the number of glass items and 4 is the number of card items. assume:
Plastics > 0, Glass < 0, Card = 0
*/

// My solution

function recycleMe(recycle) { 
var plastics  = 0;
var glass = 0;
var card = 0;
for (var i = 0; i < recycle.length; i++) {
if (recycle[i] > 0) {
plastics++;
}
else if (recycle[i] < 0) {
glass++;
}
else if (recycle[i] == 0) {
card++;
}
}
return [plastics, glass, card];
}
