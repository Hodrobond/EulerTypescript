// eslint-disable-next-line import/prefer-default-export
export const primeSieve: (limit: number) => boolean[] = (limit) => {
  const sieve: boolean[] = new Array(limit);
  for (let i: number = 0; i < limit; i += 1) {
    sieve[i] = true;
  }
  let iterator: number = 2;
  while (iterator < Math.floor(limit / 2)) {
    for (let incrementor: number = iterator * 2; incrementor < limit; incrementor += iterator) {
      sieve[incrementor] = false;
    }
    iterator += 1;
  }
  sieve.shift();
  return sieve;
};
