import { combineReducers } from 'redux';
import infoReducer from './info';

const allReducers = combineReducers({
  isOpen: infoReducer,
});

export default allReducers;
