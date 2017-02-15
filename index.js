function iterativeLog(array){
  function logger(element, index){
      console.log(`${index}: ${element}`)
  }

  array.forEach(logger);

}

function iterate(someOtherFunction) {
  var array = [1,2,3,4,5];
  array.forEach(someOtherFunction)
  return array

}

function doToArray(array,newFunction){
  array.forEach(newFunction)
}
