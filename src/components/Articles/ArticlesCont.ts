import * as React from 'react';
import { connect } from 'react-redux';

import { ArticleList, Props, Dispatch } from './Articles';
import { articles } from 'store/app/articles'

type MapStateToProps = Props;

const mapStateToProps = ({app, db}): MapStateToProps => ({
  entities: db.articles,
  articles: app.articles,
  mode: app.mode
});

type MapDispatchToProps = Dispatch;

const mapDispatchToProps = (dispatch): MapDispatchToProps =>({
  onClickTitle: () => {console.log('Order by Title')},
  onClickValue: () => {console.log('Order by Value')},
  // articlesSelect: (key) => {dispatch(articlesSelect(key))}
})

const ArticlesCont = connect<MapStateToProps, MapDispatchToProps, {} >(mapStateToProps, mapDispatchToProps)(ArticleList);

export default ArticlesCont;