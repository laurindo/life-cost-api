exports.FoodType = `
  type Food {
    _id: String
    name: String!
    quantity: Float!
    price: Float!
    category: String!
    subCategory: String!
    portionQuantity: Float!
    portionType: String!
    currency: String!
    createdAt: String
    country: String!
    state: String!
    city: String!
    neighbourhood: String
  }
`;

const foods = [{
  name: 'Leite UHT Integral',
  quantity: 1.0,
  price: 2.98,
  category: 'drink',
  subCategory: 'milk',
  portionQuantity: 200,
  portionType: 'ml',
  currency: 'R$',
  createdAt: '2018-11-10T10:20:37.000Z',
  country: 'brazil',
  state: 'ceara',
  city: 'fortaleza',
  neighbourhood: 'pirambu'
}, {
  name: 'Energetico TNT Lata',
  quantity: 1.0,
  price: 8.49,
  category: 'drink',
  subCategory: 'energetic',
  portionQuantity: 473,
  portionType: 'ml',
  currency: 'R$',
  createdAt: '2018-11-10T10:20:37.000Z',
  country: 'brazil',
  state: 'ceara',
  city: 'fortaleza',
  neighbourhood: 'pirambu'
}, {
  name: 'Picanha 1,300 KG',
  quantity: 1.0,
  price: 47.88,
  category: 'beef',
  subCategory: 'bovine', // swine, birds, fish
  portionQuantity: 1.300,
  portionType: 'kg',
  currency: 'R$',
  createdAt: '2018-11-10T10:20:37.000Z',
  country: 'brazil',
  state: 'ceara',
  city: 'fortaleza',
  neighbourhood: 'pirambu'
}];

const _test = () => {
  return new Promise((resolve, reject) => {
    resolve(foods);
  });
}

exports.FoodResolver = {
  foods: async (root, args, context, info) => {
    return await _test();
  }
};

exports.FoodMutation = {
  createFood: (root, args) => {
    foods.push({
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
    return foods;
  }
};
