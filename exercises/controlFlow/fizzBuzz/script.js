// fizzBuzz Exercise implementation script

/* 
Exercise Logic:
1. if the number is divisible by 3, output is 'Fizz'
2. if the number is divisible by 5, output is 'Buzz'
3. if the number is divisible by both 3 and 5, output is 'FizzBuzz'
4. if the number is not divisible by 3 or 5, output is that number
5. if the input is not a number, output is 'Not a number' 
*/

const fizzBuzz = (input) => {
  if (typeof input !== "number") return NaN;
  else if (input % 15 === 0) return "FizzBuzz";
  else if (input % 5 === 0) return "Buzz";
  else if (input % 3 === 0) return "Fizz";
  else return input;
};
console.log(fizzBuzz(45));
