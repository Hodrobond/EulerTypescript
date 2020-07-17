const palindromeHelper = require('@hodrobond/euler-palindrome');

// eslint-disable-next-line import/prefer-default-export
export const palindromeProduct = ({
  numDigits = 2,
} = {}) => {
  if (numDigits <= 1) {
    throw new Error('Invalid input');
  }
  const maxNum: number = parseInt('9'.repeat(numDigits), 10);
  const closeEnoughApproximation: number = Math.floor(maxNum * 0.9);
  let largest: number = 0;
  for (let i = maxNum; i > closeEnoughApproximation; i -= 1) {
    for (let j = i; j > closeEnoughApproximation; j -= 1) {
      const current: number = i * j;
      if (palindromeHelper.isPalindrome(current.toString())) {
        if (current > largest) {
          largest = current;
        }
      }
    }
  }
  return largest;
};
