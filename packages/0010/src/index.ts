import { primeSieve } from '@hodrobond/euler-primesieve';

// Find the sum of all the primes below two million.

// eslint-disable-next-line import/prefer-default-export
export const euler0010: (n: number) => number = (n) => {
  const primes: number[] = primeSieve(n);
  return primes.reduce((fin, acc) => fin + acc, 0);
};
