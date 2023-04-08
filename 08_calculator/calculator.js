const add = function (...arr) {
  if (arr.length === 0) {
    return "Error";
  } else {
    return arr.reduce((partialSum, a) => partialSum + a, 0);
  }
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    return arr.reduce((partialSum, a) => partialSum + a, 0);
  }
};

const multiply = function (arr) {
  if (arr.length === 0) {
    return "Error";
  } else {
    return Number(arr.reduce((partialSum, a) => partialSum * a, 1));
  }
};

const power = function (a, b) {
  return Math.pow(a, b);
};

const factorial = function (n) {
  if (n < 0) {
    return "number has to be positive.";
  }

  //base case
  if (n == 0 || n == 1) {
    return 1;
    //recursive case
  } else {
    return n * factorial(n - 1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
