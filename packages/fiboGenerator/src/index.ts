export interface FibonacciLimits {
  upperLimit?: number,
  lengthLimit?: number,
}

export const fiboGenerator = (input: FibonacciLimits): number[] => {
  const { upperLimit = Infinity, lengthLimit = Infinity } = input || {};
  if (upperLimit === Infinity && lengthLimit === Infinity) {
    throw new Error('Please specify an upper bound or length limit');
  }
  let current: number = 1;
  const fiboList: number[] = [1];
  while (current < upperLimit && fiboList.length <= lengthLimit) {
    fiboList.push(current);
    current += fiboList[fiboList.length - 2];
  }
  fiboList.shift(); // remove first 1
  return fiboList;
};
