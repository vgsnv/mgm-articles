import { combineReducers } from 'redux';
import { articles } from './articles';
import { mode } from './mode';

const app = combineReducers({
  articles,
  mode,
})

export default app;