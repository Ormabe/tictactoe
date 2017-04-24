import { combineReducers } from 'redux';
import { reducer as notifications } from 'react-notification-system-redux';
import cells from './cells';
import player from './player';

const reducer = combineReducers({
  notifications,
  cells,
  player
});

export default reducer;
