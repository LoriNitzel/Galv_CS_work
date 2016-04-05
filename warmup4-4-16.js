// Create your own function called tripleLoop, that runs 3 embedded for loops.

// For each of the preceding functions, get the runtime starting at size 1000 to size 50000, at intervals of 500. Make a spreadsheet with the results, and create a graph that maps input size to runtime.



function bubble(array){
  var sorted = false; 
  while(!sorted){
    sorted = true; 
  for(var i = 0; i < array.length - 1; i++){
    if(array[i] > array[i+1]){
      var temp = array[i]; 
      array[i] = array[i + 1]; 
      array[i + 1] = temp; 
      sorted = false; 
    }
    }
  }
}

bubble([3, 1, 5, 7]);



// function loop(size){
//   var sum = 0;
//   for(var i = 0; i < size; i++){
//     sum++;
//   }
// };

// var start = process.hrtime();
// function doubleLoop(size){
//   var sum = 0;
//   for(var i = 0; i < size; i++){
//     for(var j = 0; j < size; j++){
//         sum+=500;
//     }
//   }
// }
// console.log(loop(1000));
// var end = process.hrtime(start);
// console.log(end);







// function tripleLoop(size){
//   var sum = 0;
//   for (var i = 0; i < 1000; i++){
//     for (var j = 0; j < size; j++){
//       for (var k = 0; k < size; k++){
//         sum++
//       }
//     }
//   }
// }

// var time = process.hrtime();
// // [ 1800216, 25 ]

// setTimeout(() => {
//   var diff = process.hrtime(time);
//   // [ 1, 552 ]

//   console.log('benchmark took %d nanoseconds', diff[0] * 1e9 + diff[1]);
//   // benchmark took 1000000527 nanoseconds
// }, 2000);


