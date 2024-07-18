// Function to get all books by a certain author
function getBooksByAuthor(authorName) {
  return books.filter(book => book.author === authorName);
}

// Function to get the author of a specific book
function getAuthorByBookTitle(bookTitle) {
  const book = books.find(book => book.title === bookTitle);
  return book ? book.author : null;
}

// Function to get all books published before a certain year
function getBooksBeforeYear(year) {
  return books.filter(book => book.year < year);
}
