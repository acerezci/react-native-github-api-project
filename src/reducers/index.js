import { combineReducers } from 'redux';

import search from './search';
import user from './user';
import repos from './repos';
import followList from './followList';

export default combineReducers({
  search,
  user,
  repos,
  followList
});
