import { getPrimeFactors } from '@hodrobond/euler-getfactors';

// eslint-disable-next-line import/prefer-default-export
export const smallestMultiple: (n: number) => number = (n) => {
  const factors: number[] = [];
  for (let i: number = 2; i <= n; i += 1) {
    const currentPrimes: number[] = getPrimeFactors(i);
    const tempFactors: number[] = [...factors];
    for (let j: number = 0; j < currentPrimes.length; j += 1) {
      const index: number = tempFactors.indexOf(currentPrimes[j]);
      if (index > -1) {
        tempFactors.splice(index, 1);
      } else {
        factors.push(currentPrimes[j]);
      }
    }
  }
  return factors.reduce((acc: number, val: number) => acc * val, 1);
};
