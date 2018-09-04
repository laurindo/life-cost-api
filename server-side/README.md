## Life of Cost API

This API uses a external WebService called geonames to get countries, cities, neighbourhood, etc
Following link to see more: http://www.geonames.org/export/web-services.html

#### Technologies Involved
* NodeJS
* GraphQL
* Apollo Server
* Express

#### Example Query to get all countries
``
{
  countries {
    countryName
    countryCode
    continent
    currencyCode
    languages
    geonameId
    postalCodeFormat
  }
}
``

#### Example Query to get countries filtered by "countryCode"
``
{
  countries(countryCode: "BR") {
    countryName
    countryCode
    continent
    currencyCode
    languages
    geonameId
    postalCodeFormat
  }
}
``

#### Example Mutation - to create a simple name (this a simple test)
``
mutation {
  createName(name: "jhon", lastname: "handson") {
    name
    lastname
  }
}
``

#### Example Mutation- to create a Food
``
# Try to write your query here
mutation {
  createFood(
    name: "Camarao"
    quantity: 1.0
    price: 30
    category: "food"
    subCategory: "fish"
    portionQuantity: 1
    portionType: "kg"
    currency: "R$"
    country: "BR"
    state: "CE"
    city: "Fortaleza",
    neighbourhood: "Carlito Pamplona"
  ) {
    name
    quantity
    price
    category
    subCategory
    portionQuantity
    portionType
    currency
    country
    state
    city
  }
}

``
