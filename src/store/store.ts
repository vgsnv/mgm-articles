import { combineReducers } from 'redux';
import app from 'store/app/app';
import db from 'store/db/db';

import { routerReducer } from 'react-router-redux';

const store = combineReducers({
  app,
  db,
  routing: routerReducer,
})

export default store;