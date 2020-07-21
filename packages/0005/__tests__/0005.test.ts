import { smallestMultiple } from '../src';

describe('0005', () => {
    it('Passes 10', () => {
      expect(smallestMultiple(10)).toEqual(2520);
    });
    it('Passes 20', () => {
      expect(smallestMultiple(20)).toEqual(232792560);
    });
});
