// insertion Sort

var list = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

function insertionSort(array){
  for (var i = 1; i <= array.length; i++){
    var j = i;
    while(j > 0 && array[j-1] > array[j]){
      var temp = array[j-1];
      array[j-1] = array[j];
      array[j] = temp;
      j--;
    }
  }
  return array;
} 

for (var i = 0; i < 10; i++){
  console.log(testPerformance(insertionSort,getRandomList(10000*i)));
}


function getRandomList(length){
  var list = [];
  for(var i = 0; i < length; i++){
    list.push(Math.floor(Math.random() * length*2)+1);
  }
  return list;
}


function testPerformance(callback, args) {
  var t0 = process.hrtime();
  callback(args);
  var diff = process.hrtime(t0);
  return(diff[0] * 1e9 + diff[1])
}