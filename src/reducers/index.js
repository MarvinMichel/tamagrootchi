import { combineReducers } from 'redux';
import danceReducer from './dance';
import infoReducer from './info';

const allReducers = combineReducers({
  isDancin: danceReducer,
  isOpen: infoReducer,
});

export default allReducers;
