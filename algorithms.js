function removeNegs(arr){
  var count = 0;
  for(var i = 0; i < arr.length; i++){
    if(arr[i] < 0){
      count++;
    }
    else {
      arr[i-count] = arr[i];
    }
  }
  arr.length -=count;
}
