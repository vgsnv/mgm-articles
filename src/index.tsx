import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import reducers, { createFetchInitialDataAction } from 'store/store';

import Home from 'views/Home';
import Article from 'views/Article';
import Header from 'components/Header/HeaderCont';

const loggerMiddleware = createLogger();

const store = createStore(
  reducers,
  applyMiddleware(thunk, loggerMiddleware),
);

const Main = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path="/article/:id" component={Article} />
  </Switch>
);

const App = () => (
  <div>
    <Header />
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