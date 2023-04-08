const removeFromArray = function (arr, ...e) {
  const newArr = [];
  arr.forEach((element) => {
    if (!e.includes(element)) {
      newArr.push(element);
    }
  });
  return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
