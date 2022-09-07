// Sum of Multiples 3 and 5 Exercise Script

/* 
Multiples of 3 until 10 is 3, 6, 9
Multiples of 5 until 10 is 5, 10
and so on...
*/

const sum = (limit) => {
  let sum = 0;

  for (let i = 0; i <= limit; i++) if (i % 3 === 0 || i % 5 === 0) sum += i;

  return sum;
};

console.log(sum(10));
