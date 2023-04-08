const sumAll = function (a, b) {
  if (!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR";
  if (a < 0 || b < 0) return "ERROR";
  let m = 0;
  let n = 0;
  if (a > b) {
    m = a;
    n = b;
  } else {
    m = b;
    n = a;
  }
  const allNum = [];
  let sum = n;
  for (let i = n - 1; i < m; i++) {
    allNum.push(sum);
    sum += 1;
  }
  return allNum.reduce((partialSum, a) => partialSum + a, 0);

  //   return ((m - n + 1) * (m + n)) / 2;
};
sumAll(4, 1);
// Do not edit below this line
module.exports = sumAll;
