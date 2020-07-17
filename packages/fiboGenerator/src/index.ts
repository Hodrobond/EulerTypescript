// returns a list of fibonacci numbers below a limit
const fiboGenerator: ({
  upperLimit: number,
  lengthLimit: number,
}) => number = ({ upperLimit = Infinity, lengthLimit = Infinity } = {}) => {
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

module.exports = fiboGenerator;
