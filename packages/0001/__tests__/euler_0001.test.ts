import { fizzBuzz } from '../src';

describe('euler_0001', () => {
  it('Passes initial case', () => {
    const ans = fizzBuzz(10);
    expect(ans).toEqual(23);
  });
  it('Passes actual case', () => {
    const ans = fizzBuzz(1000);
    expect(ans).toEqual(233168);
  });
});
