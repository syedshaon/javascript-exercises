const repeatString = function (str, num) {
  if (num < 0) return "ERROR";
  let neweStr = "";
  for (let i = 0; i < num; i++) {
    neweStr += str;
  }
  return neweStr;
};

// Do not edit below this line
module.exports = repeatString;
