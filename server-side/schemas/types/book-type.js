exports.BookType = `
  type Book {
    title: String
    author: String
    getBooks: [Book]
  }
`;

const books = [{
  title: 'Harry Potter',
  author: 'J.K Rowling'
}, {
  title: 'Jurassic Park',
  author: 'Michael Crichton'
}];

exports.BookResolver = {
  books: () => books
};
