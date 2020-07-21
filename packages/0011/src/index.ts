const createArray: (input: string) => number[][] = (input) => {
  const tempArr: number[] = input.split(' ').map((elem) => parseInt(elem, 10));
  const length: number = Math.sqrt(tempArr.length);
  const arr: number[][] = new Array(length);
  let count: number = 0;
  for (let i: number = 0; i < length; i += 1) {
    arr[i] = new Array(length);
    for (let j: number = 0; j < length; j += 1) {
      arr[i][j] = tempArr[count];
      count += 1;
    }
  }
  return arr;
};

interface ProductCheckerInterface {
  arr: number[][]
  x: number
  y: number
  digits: number
}

const getRightProduct: ({ x, y, arr, digits }: ProductCheckerInterface) => number = ({
  x,
  y,
  arr,
  digits,
}) => {
  if (x + digits > arr.length) {
    return 0;
  }
  let product = 1;
  for (let i: number = 0; i < digits; i += 1) {
    product *= arr[y][x + i];
  }
  return product;
};

const getDownProduct: ({ x, y, arr, digits }: ProductCheckerInterface) => number = ({
  x,
  y,
  arr,
  digits,
}) => {
  if (y + digits > arr.length) {
    return 0;
  }
  let product: number = 1;
  for (let i:number = 0; i < digits; i += 1) {
    product *= arr[y + i][x];
  }
  return product;
};

const getDownRightProduct: ({ x, y, arr, digits }: ProductCheckerInterface) => number = ({
  x,
  y,
  arr,
  digits,
}) => {
  if (y + digits > arr.length || x + digits > arr.length) {
    return 0;
  }
  let product: number = 1;
  for (let i: number = 0; i < digits; i += 1) {
    product *= arr[y + i][x + i];
  }
  return product;
};

const getDownLeftProduct: ({ x, y, arr, digits }: ProductCheckerInterface) => number = ({
  x,
  y,
  arr,
  digits,
}) => {
  if (y + digits > arr.length || x - (digits - 1) < 0) {
    return 0;
  }
  let product: number = 1;
  for (let i: number = 0; i < digits; i += 1) {
    product *= arr[y + i][x - i];
  }
  return product;
};

export interface Euler0011Props {
  input: string
  digits: number
}

// eslint-disable-next-line import/prefer-default-export
export const euler0011: ({ input, digits }: Euler0011Props) => number = ({
  input,
  digits = 4,
}) => {
  const arr = createArray(input);
  let highest: number = 0;
  for (let x: number = 0; x < arr.length; x += 1) {
    for (let y: number = 0; y < arr[x].length; y += 1) {
      const tempMax: number = Math.max(
        getRightProduct({ arr, y, x, digits }),
        getDownProduct({ arr, y, x, digits }),
        getDownRightProduct({ arr, y, x, digits }),
        getDownLeftProduct({ arr, y, x, digits }),
      );
      highest = (tempMax > highest) ? tempMax : highest;
    }
  }
  return highest;
};
