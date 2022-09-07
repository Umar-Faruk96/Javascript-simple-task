// Count Truthy or Falsy Exercise Script

const array = [1, 2, NaN, false, 4, null, 0, undefined, "", 6];

const countTruthy = (array) => {
  let count = 0;
  for (let item of array) if (item) count++;
  return count;
  //   console.log(count);
};

console.log(countTruthy(array));
