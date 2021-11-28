/**
 * 二分查找法 针对数组是有序的但不是唯一的情况
 */

//查找第一个等于给定值
function binaryFindFirst(arr, value) {
  if(!arr.length) return -1;

  let start = 0;
  let end = arr.length - 1;
  let mid = 0;
  while(start <= end) {
    mid = start + Math.floor((end - start) / 2);
    if(value > arr[mid]) {
      start = mid + 1;
    }
    else if(value < arr[mid]) {
      end = mid - 1;
    }
    else {
      if(mid === 0 || arr[mid - 1] < value) return mid;
      end = mid - 1; 
    }
  }
  return -1;
}

//查找最后一个相等的数
function binaryFindLast(arr, value) {
  if(!arr.length) return -1;

  let start = 0;
  let end = arr.length - 1;
  let mid = 0;
  while(start <= end) {
    mid = start + Math.floor((end - start) / 2);
    if(value > arr[mid]) {
      start = mid + 1;
    }
    else if(value < arr[mid]) {
      end = mid - 1;
    }
    else {
      if(mid === 0 || arr[mid + 1] > value) return mid;
      start = mid + 1; 
    }
  }
  return -1;
}

//查找第一个大于等于给定值的元素
function binaryFindFirstBigOrEqual(arr, target) {
  if(!arr.length) return -1;

  let start = 0;
  let end = arr.length - 1;
  while(start <= end) {
    const mid = start + Math.floor((end - start) / 2);
    if(arr[mid] >= target) {
      if( mid === 0 || arr[mid - 1] < target) {
        return mid;
      }
      end = mid - 1;
    }
    else {
      if(arr[mid + 1] >= target) {
        return mid + 1;
      }
      start = mid + 1;
    }
  }
  return -1;
}

//查找最后一个小于等于给定值的元素
function binaryFindLastLessOrEqual(arr, target) {
  if(!arr.length) return -1;
  let start = 0;
  let end = arr.length - 1;
  while(start <= end) {
    const mid = start + Math.floor((end - start) / 2);
    if(arr[mid] > target) {
      end = mid - 1;
    }
    else {
      if(start === end || arr[mid + 1] > target) {
        return mid;
      }
      start = mid + 1;
    }
  }
  return -1;
}

const testArr = [2, 4, 5, 5, 10, 20, 21]
console.log(binaryFindLastLessOrEqual(testArr, 3));