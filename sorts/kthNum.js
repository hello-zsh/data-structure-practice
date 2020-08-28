/**
 * 第k大的数  根据快速排序的思想
 *   
  */

const kthNum = (arr, startIndex, endIndex, k) => {
  if(startIndex >= endIndex) return arr[k - 1];
  const pivotValue = arr[endIndex];
  let i = startIndex;
  for(let j = startIndex; j <= endIndex; j++) {
    if(arr[j] <= pivotValue) {
      if(i !== j) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
      i++
    }
  }
  // console.log(i, k);
  if(k <= i - 1) {
    return kthNum(arr, startIndex, i - 2, k);
  }
  else if(k -1 >= i) {
    return kthNum(arr, i, endIndex, k);
  }
  else if(k === i) {
    return arr[ k - 1];
  }
}

const testArr = [8, 3, 2, 10, 5, 11, 23, 1, 4, 9];
console.log(kthNum(testArr, 0, testArr.length - 1, 10));
console.log(testArr);
