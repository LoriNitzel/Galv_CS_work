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


for(var i = 0; i < 10; i++){
  console.log(testPerformance(bubble,getRandomList(10000*i)));
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