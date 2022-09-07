// Except (exclude from array) Exercise Script

const numbers = [1, 2, 3, 4, 1, 1];
const excludeElement = (array, excludeArray) => {
  const output = [];

  for (let item of array) if (!excludeArray.includes(item)) output.push(item);

  return output;
};

console.log(excludeElement(numbers, [1, 2, 4]));
