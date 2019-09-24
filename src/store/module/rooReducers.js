import { combineReducers } from 'redux';

import Cart from './ex/reducer';

export default combineReducers({
  cart: Cart,
});
