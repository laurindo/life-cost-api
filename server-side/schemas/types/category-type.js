exports.CategoryType = `
  type Category {
    id: String!
    name: String
  }
`;

const categories = [{
  id: "lkjlkjLKJ87676686",
  name: 'beef'
}, {
  id: "lkjlkj87678678HKHKkjh",
  name: 'drink',
}];

const _test = () => {
  return new Promise((resolve, reject) => {
    resolve(categories);
  });
}

exports.CategoryResolver = {
  categories: async (root, args, context, info) => {
    return await _test();
  }
};

exports.CategoryMutation = {
  createCategory: (root, args) => {
    categories.push({ id: args.id, name: args.name });
    return categories;
  }
};
