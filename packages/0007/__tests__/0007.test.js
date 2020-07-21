import { euler0007 } from '../src';

describe('0006', () => {
    it('Passes base', () => {
      expect(euler0007(6)).toEqual(13);
    });
    it('Passes default 10001 case', () => {
      expect(euler0007(10001)).toEqual(104743);
    });
});
