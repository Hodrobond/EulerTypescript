import { getFiboSum } from '../src';

describe('0002', () => {
  it('Passes sample case', () => {
    expect(getFiboSum(89)).toEqual(44)
  });
  it('Passes', () => {
    expect(getFiboSum(4000000)).toEqual(4613732)
  });
});
