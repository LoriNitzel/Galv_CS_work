// Write an efficient function to find the first non repeated character in a string.
// For instance, the first non repeated character in "total is 'o' and the first
// nonrepeated character in "teeter" is 'r'. Discuss the efficiency of your algorithm.



// var nonRepeater = function(str) {
//   var index = [];
//   var count;
//   str.split('').forEach(function(letter, i) {
//     count = 0;
//     str.split('').forEach(function(latter) {
//       if (letter === latter) {
//         count += 1;
//       }
//     });
//     index.push(count);
//   });
// //   console.log(index.indexOf(1));
//   return str[index.indexOf(1)];
// };



// function repeater(string)
// {
//   if(string.length==0)
//     return false;

//   var char = string.charAt(0);
//   if(string.lastIndexOf(char) == 0)
//     return char;

//   for(var i = 1; i < string.length-1; ++i)
//   {
//     char = string.charAt(i);
//     if(string.lastIndexOf(char)==i && string.indexOf(char)==i)
//       return char;
//   }

//   char = string.charAt(string.length-1);
//   if(string.indexOf(char)==string.length-1)
//     return char;

//   return false;
// }

// console.log(repeater("traggatro"));


// ==========================


// Write two conversion routines. The first routine converts a string to an integer.
// You may assume that the string contains only digits and the minus character ('-'),
// that it is a properly formatted integer number, and that the number is within the range of an int type.
// The second routine converts an integer as an int back to a string.


// var string = "38.60";
// var makeNum = Number(string);
// console.log(makeNum);

// var string = "44-22";
// var makeNum = parseInt(string);
// console.log(makeNum);

// var num = 10;
// console.log(num.toString());
//i cannot get this to print a string 



// Write a function that reverses the order of the words in a string.
// For example, your function should transform the string "Do or do not, there is not try."
// to "try. not is there not, do or Do".
// Assume that all words are space delimited and treat punctuation the same as letters.

function reverse(string){
 var reversed = string.split(' ').reverse().join(' ');
 return reversed;
}

console.log(reverse('shit or get off the pot'));

// The join() method joins all elements of an array into a string.

