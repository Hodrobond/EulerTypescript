/*
If we list all the natural numbers below 10 that are multiples of 3 or 5,
we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000
*/
const fizzBuzz: (limit: number) => number = (limit) => {
  let sum: number = 0;
  let current: number = 0;
  while (current < limit) {
    if (current % 3 === 0
      || current % 5 === 0) {
      sum += current;
    }
    current += 1;
  }
  return sum;
};

module.exports = fizzBuzz;
