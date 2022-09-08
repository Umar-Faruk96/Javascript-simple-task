// Get Max Number of a given array Exercise Script

const numbers = [1, 2, 5, 4, 3, 7];
const numbersReduce = [1, 2, 5, 4, 3, 6];

const getMax = (array) => {
  if (array.length === 0) return undefined;

  let max = 0;

  for (let item of array) if (item > max) max = item;

  return max;
};

// positive output
const outputP = getMax(numbers);

// undefined output
const outputU = getMax([]);

console.log(outputP, outputU);

// now try with reduce method

const reduceMax = (array) => {
  if (array.length === 0) return undefined;

  return array.reduce((previous, current) => {
    if (current > previous) current;
    return current;
  }, 0);
};

// positive output
const reduceOutputP = reduceMax(numbersReduce);

// undefined output
const reduceOutputU = reduceMax([]);

console.log(reduceOutputP, reduceOutputU);
