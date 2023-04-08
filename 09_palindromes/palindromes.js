const palindromes = function (str) {
  let nStr = str.toUpperCase().replace(/[^a-zA-Z]+/g, "");

  let newStr = "";
  for (let i = nStr.length - 1; i > -1; i--) {
    newStr += nStr[i];
  }

  return newStr == nStr;
};

// Do not edit below this line
module.exports = palindromes;
