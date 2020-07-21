// eslint-disable-next-line import/prefer-default-export
export const primeSieve: (limit: number) => number[] = (limit) => {
  const primesArr: boolean[] = [];
  const primes: number[] = [2];
  for (let i:number = 0; i < limit; i += 1) {
    primesArr[i] = true;
  }
  primesArr[0] = false;
  primesArr[1] = false;
  primesArr[2] = false;
  for (let i:number = 3; i < limit; i += 2) {
    if (primesArr[i] !== false) {
      primes.push(i);
      for (let j:number = i; j < limit; j += i) {
        primesArr[j] = false;
      }
    }
  }
  return primes;
};
