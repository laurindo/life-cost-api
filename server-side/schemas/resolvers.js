const books = [{
  title: 'Harry Potter',
  author: 'J.K Rowling'
}, {
  title: 'Jurassic Park',
  author: 'Michael Crichton'
}];

const names = [{
  name: 'Daniel',
  lastname: 'Laurindo'
}, {
  name: 'Jurassic Park',
  lastname: 'Michael Crichton'
}];

const _test = () => {
  return new Promise((resolve, reject) => {
    resolve(names);
  });
}

const resolvers = {
  Query: {
    books: () => books,
    names: async (root, args, context, info) => {
      return await _test();
    }
  }
};

export default resolvers;
