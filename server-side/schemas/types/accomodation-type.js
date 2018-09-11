exports.AccomodationType = `
  type Accomodation {
    id: String
    name: String
    description: String
    price: Float
    category: String
    subCategory: String
    currency: String
    createdAt: String
    country: String
    state: String
    city: String
    neighbourhood: String
  }
`;

const accomodations = [{
  id: '1234',
  name: 'Aluguel Casa',
  quantityPeople: 1,
  price: 900,
  near: 'downtown', // downtown, outside
  level: '3', // cheap(1), inexpensive(2), expensive(3), luxuous(4)
  category: 'accomodation',
  subCategory: 'house',
  currency: 'EUR',
  createdAt: '2018-11-10T10:20:37.000Z',
  country: 'ireland',
  state: 'galway',
  city: 'xxxx',
  neighbourhood: 'xxxx'
}];

const _test = () => {
  return new Promise((resolve, reject) => {
    resolve(accomodations);
  });
}

exports.AccomodationResolver = {
  accomodations: async (root, args, context, info) => {
    return await _test();
  }
};

exports.AccomodationMutation = {
  createAccomodation: (root, args) => {
    accomodations.push({
      name: args.name,
      quantity: args.quantity,
      price: args.price,
      category: args.category,
      subCategory: args.subCategory, // swine, birds, fish
      portionQuantity: args.portionQuantity,
      portionType: args.portionType,
      currency: args.currency,
      createdAt: new Date().toISOString(),
      country: args.country,
      state: args.state,
      city: args.city,
      neighbourhood: args.neighbourhood
    });
    return accomodations;
  }
};
