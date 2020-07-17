// eslint-disable-next-line import/prefer-default-export
export const isPalindrome: (n: string) => boolean = (n) => {
  const l:number = Math.floor(n.length / 2);
  for (let i:number = 0; i < l; i += 1) {
    if (n[i] !== n[n.length - 1 - i]) {
      return false;
    }
  }
  return true;
};
