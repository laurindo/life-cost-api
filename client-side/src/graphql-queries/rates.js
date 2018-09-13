import gql from 'graphql-tag';

export const RATES = gql`
{
  rates(currency: "USD") {
    currency
    rate
  }
}
`;
