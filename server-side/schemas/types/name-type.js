exports.NameType = `
  type Name {
    name: String
    lastname: String
  }
`;

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

exports.NameResolver = {
  names: async (root, args, context, info) => {
    return await _test();
  }
};

exports.NameMutation = {
  createName: (root, args) => {
    names.push({ name: args.name, lastname: args.lastname });
    return names;
  }
};
