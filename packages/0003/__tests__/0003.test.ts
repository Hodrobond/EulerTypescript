import { largestPrime } from '../src';

describe('0003', () => {
    it('Passes test', () => {
      expect(largestPrime(600851475143)).toEqual(6857)
    });
});
