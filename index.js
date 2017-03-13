
function iterativeLog(array)
{
  array.forEach((element)=>{return console.log('${index}: ${element}')})
}

function iterate(callback)
{
  var arr=["thing1", "thing2"];
  arr.forEach(callback)
  return arr;
}

function doToArray(array, callback)
{
  array.forEach(callback)
}
