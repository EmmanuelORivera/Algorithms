// Find the maximum number in a list.
/*
    
    1.- Figure out a simple case as the base case.
    [1] return the last one value. 

    2.- Figure out how to reduce your problem and get to the base case.
    [5,3,2,6]
*/

const maxNumber = (arr: number[]): number => {
  const copyArr = [...arr];

  if (copyArr.length === 1) {
    return copyArr[0];
  }

  if (copyArr[0] < copyArr[1]) {
    copyArr.splice(0, 1);
  } else {
    copyArr.splice(1, 1);
  }

  return maxNumber(copyArr);
};

console.log(maxNumber([1, 5, 1, 21, 5]));
