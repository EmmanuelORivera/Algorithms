// 4.2 Write a recursive funtion to count the number of items in a list.

/*
    1.- Figure out a simple case as the base case.
    [] return 0

    2.- Figure out how to reduce your problem and get to the base case.
    [1,3,5]
    when the array contains at least one element return countItems +1 ;


*/

const countItems = (arr: number[]): number => {
  const arrayCopy = [...arr];
  if (!arrayCopy.shift()) {
    return 0;
  } else {
    return countItems(arrayCopy) + 1;
  }
};
console.log(countItems([4, 5]));
