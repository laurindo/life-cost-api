const CountryResolver = require('../resolvers/country-resolver');

exports.CountryType = `
  type Country {
    countryCode(country: String): String
    countryName: String
    continent: String
    currencyCode: String
    languages: String
    geonameId: String
    postalCodeFormat: String
  }
`;

exports.CountryResolver = {
  countries: async (root, args = {}, context, info) => {
    const Country = new CountryResolver();
    const res = await Country.getCountry(args.countryCode).catch(error => error);
    return Country.getCountryParsed(res);
  }
};
