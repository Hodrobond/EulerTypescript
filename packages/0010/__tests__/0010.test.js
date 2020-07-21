import { euler0010 } from '../src';

describe('0010', () => {
    it('initial test', () => {
      expect(euler0010(10)).toEqual(17);
    });
    it('actual test', () => {
      expect(euler0010(2000000)).toEqual(142913828922);
    })
});
