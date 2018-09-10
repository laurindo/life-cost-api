exports.CategoryType = `
  type Category {
    _id: String
    name: String
  }
`;

const categories = [{
  _id: "lkjlkjLKJ87676686",
  name: 'beef'
}, {
  _id: "lkjlkj87678678HKHKkjh",
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
    categories.push({ _id: args._id, name: args.name });
    return categories;
  }
};
