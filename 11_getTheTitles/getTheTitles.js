const getTheTitles = function (books) {
  const bookArray = [];
  books.forEach((element) => {
    bookArray.push(element.title);
  });
  return bookArray;
};

const books = [
  {
    title: "Book",
    author: "Name",
  },
  {
    title: "Book2",
    author: "Name2",
  },
];

getTheTitles(books);

// Do not edit below this line
module.exports = getTheTitles;
