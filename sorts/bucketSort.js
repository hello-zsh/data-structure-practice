/**
 * 桶排序
 * 
 */
function bucketSort(arr, bucketSize) {
  if(arr.length < 2) return arr;
  const bucketArr = createBucket(arr, bucketSize);
  return sortBuckets(bucketArr);
}

//先分桶  bucketSize是桶的大小
function createBucket(array, bucketSize) {
  // let minValue = 0, maxValue = 0;
  let minValue = array[0], maxValue = array[0];
  //先遍历查找数组最大值和最小值
  for(let i = 1; i < array.length; i++) {
    if(array[i] < minValue) {
      minValue = array[i];
    }
    if(array[i] > maxValue) {
      maxValue = array[i];
    }
  }
  //根据最大值、最小值、桶的大小计算出桶的个数
  const bucketCount = Math.ceil((maxValue - minValue) / bucketSize);
  //建立一个二维数组，将桶放入二维数组中
  let bucketArr = [];
  for(let i = 0; i < bucketCount; i++) {
    bucketArr[i] = [];
  }
  //对数据进行分桶
  for(let i = 0; i < array.length; i++) {
    const bucketIndex = Math.ceil((array[i] - minValue) / bucketSize) - 1;
    bucketArr[bucketIndex].push(array[i]);
  }

  return bucketArr;
}

//在组内排序 
function sortBuckets(buckets) {
  const sortedArray = [];
  for(let i = 0; i < buckets.length; i++) {
    insertSort(buckets[i]);
    sortedArray.push(...buckets[i]);
  }
  return sortedArray;
}

//插入排序
function insertSort(arr) {
  //分为已排区域和未排区域，将未排区域的数据逐一插入到已排区域中  
  if(arr.length < 1) return;
  for(let i = 1; i < arr.length; i++) { 
    const value = arr[i];
    let j = i - 1;
    while(j >= 0) {
      if(arr[j] > value) {
        arr[j+1] = arr[j];
        j--;
      }
      else {
        break;
      }
    }
    arr[j + 1] = value;
  }
}


// const testArr = new Array(20).fill(0).map(item => {
//   return Math.round(Math.random() * 100);
// });
