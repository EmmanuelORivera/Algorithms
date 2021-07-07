// Suppose you have a sorted list of 128 names, and you’re searching
// through it using binary search. What’s the maximum number of
// steps it would take?

// ANSWER
// log(128) => 7
console.log(Math.log(128) / Math.log(2));

// Suppose you double the size of the list. What’s the maximum
// number of steps now?
// log(128*2) => 8
console.log(Math.log(128 * 2) / Math.log(2));

const SEVEN_BILLIONS = 7000000000;
console.log(Math.log(SEVEN_BILLIONS) / Math.log(2));

// log(SEVEN_BILLIONS) => 32.7...
