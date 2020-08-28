/**
 * 快速排序（基于数组实现）
 * 
 */

const quickSort = (arr, startIndex, endIndex) => {
  if(startIndex >= endIndex) return;
  const pivot = arr[endIndex];
  let i = startIndex;
  for(let j = startIndex; j <= endIndex; j++) {
    if(arr[j] <= pivot) {
      if(i !== j) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
      i++
    }
  }
  quickSort(arr, startIndex, i - 2);
  quickSort(arr, i, endIndex);
}

const testArr = []
let i = 0
while (i < 10) {
    testArr.push(Math.floor(Math.random() * 1000))
    i++
}
quickSort(testArr, 0, testArr.length - 1);
console.log(testArr);