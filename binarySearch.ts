const binarySearch = <T>(list: Array<T>, item: T) => {
  const lastPositionOnTheArray = list.length - 1;
  // low and high keep track of wich part of the list you'll search in
  let lowPosition = 0;
  let highPosition = lastPositionOnTheArray;

  // This loop is keep going until we get one element;
  while (lowPosition <= highPosition) {
    // Check the middle element.
    const middlePosition = Math.floor((lowPosition + highPosition) / 2);
    const guessedElement = list[middlePosition];

    console.log({ middlePosition, guessedElement });
    // The item was found.
    if (guessedElement === item) {
      return middlePosition;

      //The guess was too high
    } else if (guessedElement > item) {
      highPosition = middlePosition - 1;

      //The guess was too low
    } else {
      lowPosition = middlePosition + 1;
    }
  }
  // The element on the array does't exist.
  return null;
};

const myList = [1, 5, 6, 23, 52];

console.log(binarySearch(myList, 5));
console.log(binarySearch(myList, -1));
