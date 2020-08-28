/**
 * 归并排序（基于数组实现）
 * 
 */

//合并两个有序的数组
const mergeArr = (a, b) => {
  let aPointer = 0;
  let bPointer = 0;
  let newArr = [];
  while(aPointer < a.length && bPointer < b.length) {
    if(a[aPointer] >= b[bPointer]) {
      newArr.push(b[bPointer]);
      bPointer++;
    }
    else {
      newArr.push(a[aPointer]);
      aPointer++;
    }
  }
  return newArr.concat(a.slice(aPointer)).concat(b.slice(bPointer));
}

//分而治之，分解成小问题
const mergeSort = (arr) => {
  if(arr.length <= 1) return arr;
  //寻找中点，拆分成两个数组
  const middlePointer = Math.round(arr.length / 2);
  const leftArr = arr.slice(0, middlePointer);
  const rightArr = arr.slice(middlePointer);
  return mergeArr(mergeSort(leftArr), mergeSort(rightArr));
}

const testArr = [2, 1, 29, 27, 45, 19, 20];
console.log(mergeSort(testArr)); 


 