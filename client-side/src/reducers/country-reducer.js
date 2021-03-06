const getCountries = (state = [], action) => {
  switch (action.type) {
    case "GET_COUNTRIES":
      return { ...state, countries: action.payload };
    default:
      return state;
  }
};

export { getCountries };
