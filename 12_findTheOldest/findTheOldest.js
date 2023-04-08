const findTheOldest = function (arr) {
  if (!arr[0].yearOfDeath) {
    var largest = new Date().getFullYear() - arr[0].yearOfBirth;
  } else {
    var largest = arr[0].yearOfDeath - arr[0].yearOfBirth;
  }

  var largestPerson = 0;

  for (var i = 0; i < arr.length; i++) {
    // console.log(arr[i].yearOfDeath);
    let currentAge = 0;

    if (!arr[i].yearOfDeath) {
      currentAge = new Date().getFullYear() - arr[i].yearOfBirth;
      console.log(currentAge);
    } else {
      currentAge = arr[i].yearOfDeath - arr[i].yearOfBirth;
      console.log(currentAge);
    }

    // const currentAge = new Date().getFullYear() - arr[i].yearOfBirth;

    if (largest < currentAge) {
      largest = currentAge;
      largestPerson = i;

      //   console.log(arr[i].yearOfDeath);
    }
  }

  return arr[largestPerson];
  //   return arr[arr.findIndex(largest)].name;
};

const people = [
  {
    name: "Carly",
    yearOfBirth: 2018,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];
findTheOldest(people).name;

// Do not edit below this line
module.exports = findTheOldest;
