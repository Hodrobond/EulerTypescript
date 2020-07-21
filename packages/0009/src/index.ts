// eslint-disable-next-line import/prefer-default-export
export const euler0009: (n: number) => number = (n) => {
  // todo figure out a better estimator/iterator
  for (let i:number = 1; i < n; i += 1) {
    for (let j:number = 1; j < n; j += 1) {
      const k:number = Math.sqrt(i * i + j * j);
      if (k === Math.floor(k) && k < n) {
        if (i + j + k === n) {
          return i * j * k;
        }
      }
    }
  }
  return 0;
};
