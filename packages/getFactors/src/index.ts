export const getFactors: (n: number) => number[] = (n: number) => {
  const list: number[] = [];
  for (let i: number = 2; i < n; i += 1) {
    if (n % i === 0) list.push(i);
  }
  return list;
};

export const getPrimeFactors: (n: number) => number[] = (n: number) => {
  const list: number[] = [];
  let temp: number = n;
  let i: number = 2;
  while (i < temp && n > 1) {
    if (temp % i === 0) {
      list.push(i);
      temp /= i;
      i = 2;
    } else {
      i += 1;
    }
  }
  list.push(temp);
  return list.sort((a, b) => a - b);
};
