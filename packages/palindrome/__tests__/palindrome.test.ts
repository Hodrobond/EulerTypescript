import { isPalindrome } from '../src';

describe('palindrome', () => {
    it('Successfully identifies a palindrome', () => {
      expect(isPalindrome('racecar')).toBe(true);
    });
    it('Successfully fails a non-palindrome', () => {
      expect(isPalindrome('racecarr')).toBe(false);
    });
});
