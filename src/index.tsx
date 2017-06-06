import * as React from "react";
import * as ReactDOM from "react-dom";

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import Root from 'components/Root';

import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import reducers from 'store/store';
import { articlesAdd as dbArticlesAdd } from 'store/db/articles';
import { articlesAdd as appArticlesAdd } from 'store/app/articles';

const loggerMiddleware = createLogger()

const store = createStore(
  reducers,
  applyMiddleware(thunk, loggerMiddleware),
);

ReactDOM.render(
  <Provider store={store}>
    <Root/>
  </Provider>,
  document.getElementById('root')
);

store.dispatch(dbArticlesAdd({id: '1905', title: 'Печеньки', value: 500}));
store.dispatch(appArticlesAdd({id: '1905', isSelect: true}));