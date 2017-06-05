import { combineReducers } from 'redux';
import { articles } from './articles';

const db = combineReducers({
  articles
})

export default db;