import { getFactors, getPrimeFactors } from '../src';

describe('getFactors', () => {
    it('Gets factors', () => {
      expect(getFactors(20)).toEqual([2, 4, 5, 10]);
    });
    it('Gets prime factors', () => {
      expect(getPrimeFactors(20)).toEqual([2, 2, 5]);
    });
    it('Gets prime factors nested', () => {
      expect(getPrimeFactors(1024)).toEqual(new Array(10).fill(2));
    });
});
