import { createStore } from 'redux';
import rootReducers from './root-reducers';

const initialState = {
  countries: []
};

const store = createStore(rootReducers, initialState);

export default store;
