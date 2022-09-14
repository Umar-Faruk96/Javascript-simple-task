// Error Handling Exercise Script

const numbers = [1, 2, 3, 4, 5, 2];
const numbers1 = {};

const reduceOccurrences = (array, searchElement) => {
  // throw error exception
  if (!Array.isArray(array)) throw new Error("Input is not an array");

  return array.reduce((previous, current) => {
    const returns = searchElement === current ? 1 : 0;
    return returns + previous;
  }, 0);
};

// catch the error and return to the console
try {
  const reduceOccur = reduceOccurrences(numbers, 2);
  console.log(reduceOccur);
} catch (e) {
  console.log(e);
}
