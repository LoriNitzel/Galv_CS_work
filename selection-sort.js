
function selectionSort(array){
  var current, isSmaller
  for (current = 0; current < array.length -1; current++){
    var currentMin = current; 
    for (isSmaller = current+1; isSmaller < array.length; isSmaller++){
      if(array[isSmaller] < array[currentMin]){
        currentMin = isSmaller;
      }
    }
    if(currentMin != current){
      var temp = array[currentMin];
      array[currentMin] = array[current];
      array[current] = temp; 
    }
  }
  return array; 
}

console.log(testPerformance(selectionSort,getRandomList(10000)));

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