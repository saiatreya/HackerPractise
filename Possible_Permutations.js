
let permitationStr = [];
const allCombinations = [];
const totalElements = 4;
for (let i = 1 ;i <= totalElements ; i++) {
  permitationStr.push(i);
}
for(let s=0;s<totalElements;s++) {
  //swapping the array elements
  if (s > 0) {
    const tempInx= permitationStr[0];
    permitationStr[0] = permitationStr[s];
    permitationStr[s] = tempInx;
  }
  for (let k=0;k<totalElements-1;k++) {
    for (let j=1;j<totalElements-1;j++) {
      const nextInx = permitationStr[j+1];
      permitationStr[j+1] = permitationStr[j];
      permitationStr[j] = nextInx;
      const combination = [...permitationStr];
      allCombinations.push(combination);
    }
  }
}

console.log(allCombinations);