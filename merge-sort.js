function merge(array1, array2){
  var mergedArray = [];
  var array1_index = 0;
  var array2_index = 0; 

  while(array1_index < array1.length && array2_index < array2.length){
    if(array1[array1_index] < array2[array2_index]){
      mergedArray.push(array1[array1_index]);
      array1_index++; 

    } else if (array1[array1_index] > array2[array2_index]){
      mergedArray.push(array2[array2_index]);
      array2_index++; 

    } else if (array1[i] === array2[i]){
      mergedArray.push(array1[array1_index]);
      mergedArray.push(array2[array2_index]);
      array1_index++; 
      array2_index++; 
    }
  }
  if(array1_index < array1.length){
    mergedArray = mergedArray.concat(array1.slice(array1_index));
  } 
  if(array2_index < array2.length){
    mergedArray = mergedArray.concat(array2.slice(array2_index));
  }

  return mergedArray;
}

function mergeSort(list){

  if(list.length < 2){
    return list; 
  }

  return merge(mergeSort(left), mergeSort(right)); 
}

console.log(merge([1,5,7,10,11],[2,8,9]))