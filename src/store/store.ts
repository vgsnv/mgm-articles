import { combineReducers } from 'redux';
import app from 'store/app/app';
import db from 'store/db/db';

const store = combineReducers({
  app,
  db,
})

export default store;