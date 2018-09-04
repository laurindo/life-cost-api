const axios = require('axios');
const parser = require('xml2json');

class Country {
  /**
   * @param {string} country - BR, GR, ES, etc
  */
  async getCountry(country = '') {
    return axios({
      method: 'get',
      responseType: 'document',
      url: `http://api.geonames.org/countryInfo?country=${country}&username=costoflifeapi`
      //url: `${process.env.URI_GEONAME_API}/countryInfo?country=${country}&username=${process.env.USERNAME_GEONAME_API}`
    });
  }

  /**
   * @param {object} res - Object with all countries in XML format
   * Example:
   * {
   *    geonames: {
   *      country: {
   *        "countryName": "Brazil",
   *        "countryCode": "BR",
   *        "continent": "SA",
   *        ... etc
   *      }
   *    }
   * }
  */
  getCountryParsed(res) {
    try {
      const data = parser.toJson(res.data);
      let dataParsed = '';

      if (typeof data === 'string') {
        dataParsed = JSON.parse(data);
      }

      if (dataParsed && dataParsed.geonames && dataParsed.geonames.country && !Array.isArray(dataParsed.geonames.country)) {
        return [dataParsed.geonames.country];
      } else if (dataParsed && dataParsed.geonames && dataParsed.geonames.country && dataParsed.geonames.country.length) {
        return dataParsed.geonames.country;
      } else {
        return [];
      }
    } catch (error) {
      return [];
    }
  }
}

module.exports = Country;
