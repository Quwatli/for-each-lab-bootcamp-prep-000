
function iterativeLog(array)
{
  array.forEach((ele, ind)=>{console.log(ind+": "+ele)})
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
