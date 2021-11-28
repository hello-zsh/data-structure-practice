/**
 * 二分查找法
 */
//前提条件：数据是有序的并且是没有重复元素的
//利用递归实现
function binaryFindOne(arr, findValue, start, end) {
  if(arr.length === 0 || start > end) return -1;
  //这里不用 (startIndex + endIndex) / 2 是为了避免数据过大导致溢出的可能
  const mid = start + Math.floor((end - start) / 2);
  if(findValue === arr[mid]) {
    return mid;
  }
  else if(findValue > arr[mid]) {
    start = mid + 1;
  }
  else {
    end = mid - 1;
  }
  return binaryFindOne(arr, findValue, start, end);
}

//利用循环方式实现
function binaryFindTwo(arr, findValue) {
  if(arr.length === 0) return -1;
  let start = 0;
  let end = arr.length - 1;
  let mid = 0;
  while(start <= end) {
    mid = start + Math.floor((end - start) / 2);
    if(arr[mid] > findValue) {
      end = mid - 1;
    }
    else if(arr[mid] < findValue) {
      start = mid + 1;
    }
    else {
      return mid;
    }
  }
  return -1; 
}
// const arr = [1, 4, 5, 6, 7, 8, 10, 11, 23, 42, 44, 54, 56, 77, 102]
// console.log(binaryFindOne(arr, 11, 0, arr.length - 1))