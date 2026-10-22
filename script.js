function stringChop(str, size) {
  // your code here
  if (str.length === 0) return []
  let arr = []
  while(str){
    arr.push(str.substring(0,size))
    str = str.substring(size, str.length)
  }
  return arr
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
