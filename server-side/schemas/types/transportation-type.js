exports.TransportationType = `
  type Transportation {
    _id: String
    name: String!
    unitPrice: Float!,
    dailyPrice: Float,
    weeklyPrice: Float,
    monthlyPrice: Float,
    category: String!
    subCategory: String!
    currency: String!
    createdAt: String
    country: String!
    state: String!
    city: String!
    neighbourhood: String
  }
`;

const transportations = [{
  id: 't3214',
  name: 'Bus Ticket',
  unitPrice: 3.40,
  dailyPrice: 0,
  weeklyPrice: 0,
  monthlyPrice: 0,
  category: 'transportation',
  subCategory: 'bus',
  currency: 'R$',
  createdAt: '2018-11-10T10:20:37.000Z',
  country: 'brazil',
  state: 'ceara',
  city: 'fortaleza',
  neighbourhood: 'downtown'
}];

const _test = () => {
  return new Promise((resolve, reject) => {
    resolve(transportations);
  });
}

exports.TransportationResolver = {
  transportations: async (root, args, context, info) => {
    return await _test();
  }
};

exports.TransportationMutation = {
  createTransportation: (root, args) => {
    transportations.push({
      id: args.id,
      name: args.name,
      quantity: args.quantity,
      unitPrice: args.price,
      dailyPrice: args.dailyPrice,
      weeklyPrice: args.weeklyPrice,
      monthlyPrice: args.monthlyPrice,
      category: args.category, // transportation
      subCategory: args.subCategory, // bus, train, flight, particular
      currency: args.currency,
      createdAt: new Date().toISOString(),
      country: args.country,
      state: args.state,
      city: args.city,
      neighbourhood: args.neighbourhood
    });
    return transportations;
  }
};
