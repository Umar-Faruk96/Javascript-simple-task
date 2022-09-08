// Count Occurrences Exercise Script

const number = [1, 2, 3, 4, 5, 1];

const countOccurrences = (array, searchElement) => {
  let count = 0;

  for (let item of array) if (item === searchElement) count++;

  return count;
};

// positive result
const occurrenceP = countOccurrences(number, 1);
console.log(occurrenceP);

// negative result
const occurrenceN = countOccurrences(number, -1);
console.log(occurrenceN);

// try to achieve by reduce method

const numbers = [1, 2, 3, 4, 5, 2];

const reduceOccurrences = (array, searchElement) => {
  return array.reduce((previous, current) => {
    const returns = searchElement === current ? 1 : 0;
    return returns + previous;
  }, 0);
};

// positive result
const reduceOccurP = reduceOccurrences(numbers, 2);
console.log(reduceOccurP);

// positive result
const reduceOccurN = reduceOccurrences(numbers, -2);
console.log(reduceOccurN);
