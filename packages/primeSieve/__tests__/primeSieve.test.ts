import { primeSieve } from '../src';

const firstTen = [true, true, true, false, true, false, true, false, false]

describe('primeSieve', () => {
    it('needs tests', () => {
      expect(primeSieve(10)).toEqual(firstTen)
    });
});
