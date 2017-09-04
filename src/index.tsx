import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom'

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

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Root} />
      <Route path="/article/:id" component={Article} />
    </Switch>
  </main>
);

const App = () => (
  <div>
    <Main />
  </div>
);

ReactDOM.render((

  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider> 

), document.getElementById('root'))

store.dispatch(createFetchInitialDataAction());