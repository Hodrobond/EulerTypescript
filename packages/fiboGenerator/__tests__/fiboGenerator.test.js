const fiboGenerator = require('../src');

describe('fiboGenerator', () => {
    it('generates first 10 numbers using upper limit', () => {
      expect(fiboGenerator({ upperLimit: 10 })).toEqual([1, 2, 3, 5, 8]);
    });
    it('generates first 10 numbers using length limit', () => {
      expect(fiboGenerator({ lengthLimit: 10 })).toEqual([1, 2, 3, 5, 8, 13, 21, 34, 55, 89]);
    });
    it('throws with missing input', () => {
      try {
        fiboGenerator();
      } catch (e) {
        expect(e.message).toEqual('Please specify an upper bound or length limit')
      }
    });
});
