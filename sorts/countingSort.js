/**
 * 计数排序 只针对非负整数
 * 
 */

//首先进行分桶
function createBucket(arr) {
  if(arr.length < 2) return arr;
  //寻求最大值和最小值
  let maxValue = arr[0], minValue = arr[0];
  for(let i = 1; i < arr.length; i++) {
    if(arr[i] > maxValue) {
      maxValue = arr[i];
    }
    if(arr[i] < minValue) {
      minValue = arr[i];
    }
  }
  //根据最大值和最小值进行分组
  let buckets = new Array(maxValue - minValue + 1).fill(0);
  for(let i = 0; i < arr.length; i++) {
    const index = arr[i] - minValue;
    buckets[index]++
  }
  return {
    buckets,
    minValue
  };
}

function countingSort(arr) {
  //先分组
  let { buckets, minValue } = createBucket(arr);
  // 个数叠加
  buckets.forEach((item, index) => {
    if(index !== 0) {
      buckets[index] = item + buckets[index - 1]
    }
    else {
      buckets[index] = item;
    }
  })
  let sortArr = new Array(arr.length);
  for(let i = arr.length - 1; i >= 0; i--) {
    const inBucketsIndex = arr[i] - minValue;
    const value = buckets[inBucketsIndex];
    sortArr[value - 1] = arr[i];
    buckets[inBucketsIndex] = value - 1;
  }
  return sortArr;
}
// 上述写法空间复杂度较为复杂



//另一种实现方式
// 思路：桶的大小从0开始到数据中的最大值，然后直接在原数组中替换元素 但是此种方式非稳定排序

function findMaxValue(array) {
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
      if (array[i] > max) {
          max = array[i];
      }
  }
  return max;
}

const countSort = (arr) => {
  if(arr.length < 2) return arr;
  
  //
  const maxValue = findMaxValue(arr);
  const countArr = new Array(maxValue + 1);

  for(let i = 0; i < arr.length; i++) {
    const number = arr[i];
    
    if(!countArr[number]) {
      countArr[number] = 1;
    }
    else {
      countArr[number]++;
    } 
  }
  let i = 0;
  countArr.forEach((count, index) => {
    while(count && count > 0) {
      arr[i] = index;
      i++;
      count--;
    }
  })
  return arr;
}


