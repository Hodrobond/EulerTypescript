import { euler0009 } from '../src';

describe('0009', () => {
  it('Passes', () => {
    expect(euler0009(1000)).toEqual(31875000);
  });
  it('0 case', () => {
    expect(euler0009(0)).toEqual(0);
  });
});
