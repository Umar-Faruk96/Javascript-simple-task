// Includes Method Exercise Script
const numbers = [1, 2, 3, 4, 5];
const searchItemTrue = 4;
const searchItemFalse = 8;

const includesThat = (array, searchElement) => {
  for (let item of array) if (item === searchElement) return true;

  return false;
};

// true output

console.log(includesThat(numbers, searchItemTrue));

// false output

console.log(includesThat(numbers, searchItemFalse));
