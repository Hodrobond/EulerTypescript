export const getSumOfSquares: (n: number) => number = (n) => {
  let product: number = 0;
  for (let i: number = 0; i <= n; i += 1) {
    product += (i * i);
  }
  return product;
};

export const getSquareOfSum: (n: number) => number = (n) => {
  let sum: number = 0;
  for (let i: number = 0; i <= n; i += 1) {
    sum += i;
  }
  return (sum * sum);
};

export const euler0006: (n: number) => number = (n = 100) => {
  const sumOfSquares = getSumOfSquares(n);
  const squareOfSums = getSquareOfSum(n);
  return (squareOfSums - sumOfSquares);
};
