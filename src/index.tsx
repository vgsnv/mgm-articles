import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import { createBrowserHistory } from 'history';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';

import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import reducers, { createFetchInitialDataAction } from 'store/store';

import Root from 'views/Root';
import Article from 'views/Article';

const loggerMiddleware = createLogger()

const store = createStore(
  reducers,
  applyMiddleware(thunk, loggerMiddleware),
);

const history = syncHistoryWithStore(createBrowserHistory(), store);

ReactDOM.render(
  <Provider store={store}>
    <Router history = {history}>
      <div>
        <Route exact path="/" component={Root}/>
        <Route path="/article/:id" component={Article}/>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);

store.dispatch(createFetchInitialDataAction());