import { combineReducers } from 'redux';
import { articles } from 'store/db/articles';

const entities = combineReducers({
  articles
})

export default entities;