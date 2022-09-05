// Find Prime Numbers Exercise Script

const limit = 10;

const showPrimes = (limit) => {
  for (let number = 2; number <= limit; number++)
    if (isPrime(number)) console.log(number);
};

const isPrime = (number) => {
  if (number <= 1) return "Not prime number";
  else {
    for (let factor = 2; factor < number; factor++)
      if (number % factor === 0) return false;
  }
  return true;
};
console.log(showPrimes(limit));
