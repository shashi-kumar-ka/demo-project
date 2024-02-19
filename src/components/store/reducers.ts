import { combineReducers } from 'redux';
import { favoritesReducer } from './actions';

const rootReducer = combineReducers({
  favorites: favoritesReducer,
});

export default rootReducer;