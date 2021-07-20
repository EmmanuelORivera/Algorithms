// A function that sums an array with recursion.

// 1.- Figure out a simple case as the base case.
// [] (Empty array) return 0

// 2.- Figure out how to reduce your problem and get to the base case.
// get the first element of the array and call sum without him.

// [1,5,7]
const sum = (arr: number[]): number => {
  const arrayCopy = [...arr];
  if (arrayCopy === []) {
    return 0;
  }
  const firstValue = arrayCopy.shift()!;
  return firstValue + sum(arrayCopy);
};

console.log(sum([15, 5, 2]));
