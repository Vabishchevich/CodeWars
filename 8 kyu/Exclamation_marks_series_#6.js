/*
Description:
Remove n exclamation marks in the sentence from left to right. n is positive integer.
Examples
remove("Hi!",1) === "Hi"
remove("Hi!",100) === "Hi"
remove("Hi!!!",1) === "Hi!!"
remove("Hi!!!",100) === "Hi"
remove("!Hi",1) === "Hi"
remove("!Hi!",1) === "Hi!"
remove("!Hi!",100) === "Hi"
remove("!!!Hi !!hi!!! !hi",1) === "!!Hi !!hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",3) === "Hi !!hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",5) === "Hi hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",100) === "Hi hi hi"
Note
Please don't post issue about difficulty or duplicate.
*/

// My solution

// First option
function remove(s, n) {
for (var i = 0; i < n; i++) 
s = s.replace("!", "");
return s;
}

// Second option
function remove(s, n) {
while (n > 0) {
var index = s.indexOf("!"); //indexOf() возвращает первый индекс, по которому данный 
//элемент может быть найден в массиве или -1, если такого индекса нет.
if (index < 0) {
return s;
} 
else {
s = s.slice(0, index) + s.slice(index + 1); //slice() возвращает новый массив, содержащий
//копию части исходного массива.
}
n--;
}
return s;
}
