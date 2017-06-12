import { combineReducers } from 'redux';
import { articleNew } from './articleNew';
import { articles } from './articles';
import { mode } from './mode';

const app = combineReducers({
  articleNew,
  articles,
  mode,
})

export default app;