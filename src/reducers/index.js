import { combineReducers } from 'redux';
import playReducer from './play-pause';
import infoReducer from './info';

const allReducers = combineReducers({
  isPlaying: playReducer,
  isOpen: infoReducer,
});

export default allReducers;
