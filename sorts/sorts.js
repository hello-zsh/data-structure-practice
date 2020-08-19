/**
 * 排序算法
 * 
 */

// 冒泡排序 
const bubbleSort = (arr) => {
  let end = arr.length -1;
  while(end > 0) {
    let isChangeFlag = false;
    for(let i = 0; i < end; i++) {
      if(arr[i] > arr[i+1]) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        isChangeFlag = true;
      }
    }
    //如果是false，说明没有位置交换，所有元素都到位
    if(!isChangeFlag) {
      return arr;
    }
    end--
  }
  return arr;
}

//插入排序
const insertionSort = (arr) => {
  if(arr.length <= 1) return arr;
  for(let i = 0; i < arr.length; i++) {
    const temp = arr[i];
    let j = i - 1;
    for(j; j >= 0; j--) {
      if(arr[j] > temp) {
        arr[j + 1] = arr[j];
      }
      else {
        break;
      }
    }
    arr[j + 1] = temp;
  }
  return arr;
}

//选择排序
const selectionSort = (arr) => {
  for(let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    //在剩下未排序区间寻找最小值，并且记录下来
    for(let j = i + 1; j < arr.length; j++) {
      if(arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    const temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr;
}


const testBubbleSortArr = [1, 2, 3, 4, 5];
// console.log(bubbleSort(testBubbleSortArr));

const testInsertSortArr = [2, 4, 1, 3, 0];
// console.log(insertionSort(testInsertSortArr));

const testSelectionSortArr = [2,1,7,3,4];
console.log(selectionSort(testSelectionSortArr));

