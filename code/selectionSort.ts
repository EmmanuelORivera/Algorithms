// [5,2,1,6,4]
const findSmallest = (arr: number[]): number => {
  let smallest = arr[0];
  let smallestIndex = 0;

  //  O(n)
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallestIndex = i;
    }
  }
  return smallestIndex;
};

const selectionSortA = (arr: number[]) => {
  let newArray = [];
  let copyArr = [...arr];

  // O(n)
  for (let i = 0; i < arr.length; i++) {
    let smallestIndex = findSmallest(copyArr);
    newArray.push(...copyArr.splice(smallestIndex, 1));
  }

  return newArray;
};

// Selection Sort without spread operator and only one function.
function selectionSortB(inputArr: number[]) {
  let n = inputArr.length;

  for (let i = 0; i < n; i++) {
    // Finding the smallest number in the subarray
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (inputArr[j] < inputArr[min]) {
        min = j;
      }
    }
    if (min != i) {
      // Swapping the elements with a temporary variable
      let tmp = inputArr[i];
      inputArr[i] = inputArr[min];
      inputArr[min] = tmp;
    }
  }
  return inputArr;
}

console.log(findSmallest([5, 2, 2, 2, 4]));

console.time('find');
console.log(selectionSortA([5, 2, 1, 6, 4]));
console.timeEnd('find');

console.time('find');
console.log(selectionSortB([2, 1, 4]));
console.timeEnd('find');
console.log(selectionSortA([2, 1, 4]));
