import { palindromeProduct } from '../src';

describe('0004', () => {
  it('Can throw', () => {
    try {
      palindromeProduct({
        numDigits: 1,
      });
    } catch (e) {
      expect(e.message).toEqual('Invalid input');
    }
  });
  it('Works with 2 digits', () => {
    expect(palindromeProduct()).toEqual(9009)
  });
  it('Works with 3 digits', () => {
    expect(palindromeProduct({
      numDigits: 3,
    })).toEqual(906609)
  });
});
