import { euler0006 } from '../src';

describe('0006', () => {
    it('Passes base', () => {
      expect(euler0006(10)).toEqual(2640);
    });
    it('Passes default 100 case', () => {
      expect(euler0006()).toEqual(25164150);
    });
});
