import fetchArticles from 'api/getArticles';

import { articlesAdd as dbArticlesAdd, articlesLoad as dbArticlesLoad } from 'store/db/articles';
import { articlesAdd as appArticlesAdd, articlesLoad as appArticlesLoad } from 'store/app/articles';

export const createFetchInitialDataAction = () => (dispatch) => {

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

};

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