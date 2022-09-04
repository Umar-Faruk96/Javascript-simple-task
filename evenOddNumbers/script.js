// Even and Odd Numbers Exercise Script

const evenOddNumber = (limit) => {
  for (let i = 0; i <= limit; i++) {
    const output = i % 2 === 0 ? `${i} "Even"` : `${i} "Odd"`;
    console.log(output);
  }
};

console.log(evenOddNumber(10));
