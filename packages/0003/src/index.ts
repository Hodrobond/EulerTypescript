const factorHelper = require('@hodrobond/euler-getfactors');

// eslint-disable-next-line import/prefer-default-export
export const largestPrime: (n: number) => number = (n) => {
  const primeFactors = factorHelper.getPrimeFactors(n);
  return primeFactors[primeFactors.length - 1];
};
