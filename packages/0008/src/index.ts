export interface Euler0008Params {
  number: string
  digits: number
}

export const euler0008: ({ number, digits }: Euler0008Params) => number = ({
  number,
  digits,
}) => {
  const split: string[] = number.split('');
  let currentLargest: number = 0;
  const stack: string[] = split.splice(0, digits);
  while (split.length > 0) {
    const product: number = stack.reduce((acc, val) => acc * parseInt(val, 10), 1);
    if (product > currentLargest) {
      currentLargest = product;
    }
    stack.splice(0, 1);
    stack.push(split.splice(0, 1)[0]);
  }
  return currentLargest;
};
