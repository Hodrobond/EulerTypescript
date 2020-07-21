import { primeSieve } from '@hodrobond/euler-primesieve';

// eslint-disable-next-line import/prefer-default-export
export const euler0007: (n:number) => number = (n) => primeSieve(100 * n)[n - 1];
