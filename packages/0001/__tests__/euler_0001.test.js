const euler0001 = require('../src');

describe('euler_0001', () => {
  it('Passes initial case', () => {
    const ans = euler0001(10);
    expect(ans).toEqual(23);
  });
  it('Passes actual case', () => {
    const ans = euler0001(1000);
    expect(ans).toEqual(233168);
  });
});
