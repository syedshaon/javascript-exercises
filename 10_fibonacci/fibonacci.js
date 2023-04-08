const fibonacci = function (num) {
  if (num < 0) {
    return "OOPS";
  }
  const fib = [];

  let n1 = 0,
    n2 = 1,
    nextTerm;

  for (let i = 1; i <= num + 1; i++) {
    fib.push(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }
  return fib[num];
};

fibonacci(60);

// Do not edit below this line
module.exports = fibonacci;
