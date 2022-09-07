// Array From Range Exercise Script

const arrayFromRange = (min, max) => {
  const output = [];

  for (let i = min; i <= max; i++) output.push(i);
  return output;
};

// positive input
console.log(arrayFromRange(1, 4));

// negative input

console.log(arrayFromRange(-10, -4));
