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

import Root from 'components/Root';

import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import reducers from 'store/store';

import { articlesAdd as dbArticlesAdd, articlesLoad as dbArticlesLoad } from 'store/db/articles';
import { articlesAdd as appArticlesAdd, articlesLoad as appArticlesLoad } from 'store/app/articles';
import ArticleEditModal from 'components/ArticleEditModal/ArticleEditModalCont';

const loggerMiddleware = createLogger()

const store = createStore(
  reducers,
  applyMiddleware(thunk, loggerMiddleware),
);

const fetchArticles = () => {
  return fetch('/node').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
}

const createFetchInitialDataAction = () => (dispatch) => {

    fetchArticles().then(articles => {

      dispatch(dbArticlesLoad(articles));

      //todo: Поправить
      let ArticleApp = {};

      Object.keys(articles).forEach(( value, index, array )=>{

        ArticleApp[value] = {
          id: value.toString(),
          isSelect: false,
        }
      });

      dispatch(appArticlesLoad(ArticleApp));

    }).catch(error => {
      throw(error);
    });

}

const history = syncHistoryWithStore(createBrowserHistory(), store);

ReactDOM.render(
  <Provider store={store}>
    <Router history = {history}>
      <div>
        <Route exact path="/" component={Root}/>
        <Route path="/article/:id" component={ArticleEditModal}/>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);

store.dispatch(createFetchInitialDataAction());