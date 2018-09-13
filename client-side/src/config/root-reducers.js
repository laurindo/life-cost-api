import { combineReducers } from 'redux';
import { getCountries } from '../reducers/country-reducer';

const rootReducer = combineReducers({
  getCountries
});

export default rootReducer;
