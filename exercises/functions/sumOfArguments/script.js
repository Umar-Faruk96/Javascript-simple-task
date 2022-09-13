// Sum Of Arguments Exercise Script

const sum = (...args) => {
  if (args.length === 1 && Array.isArray(args[0])) args = [...args[0]];
  return args.reduce((a, b) => a + b);
};
console.log(
  `Output of passing unlimited arguments: ${sum(1, 2, 3, 4, 5, 10, 15)}.`
);
console.log(
  `Output of passing an array argument in same function with rest operator: ${sum(
    [1, 2, 3, 7, 5, 10, 15]
  )}.`
);

const sumArray = (args) => {
  return Array.isArray(args) ? args.reduce((a, b) => a + b) : "Not an Array";
};

console.log(
  `Output of passing an array argument in different function: ${sumArray([
    1, 2, 3, 4, 5, 10, 5,
  ])}.`
);
