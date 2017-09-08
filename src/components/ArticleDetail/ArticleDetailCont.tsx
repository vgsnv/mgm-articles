import * as React from 'react';
import { connect } from 'react-redux';

import { ArticleDetail, Props, Dispatch } from './ArticleDetail';
import { articles, articlesSelect } from 'store/app/articles';

import { withRouter } from 'react-router-dom';

type MapStateToProps = Props;

const mapStateToProps = ({app, db}, { match: { params } }): MapStateToProps => ({
  entity: db.articles[params.id]
});

type MapDispatchToProps = Dispatch;

const mapDispatchToProps = (dispatch): MapDispatchToProps => ({

})

const ArticlesCont = withRouter(connect<MapStateToProps, MapDispatchToProps, {}>(mapStateToProps, mapDispatchToProps)(ArticleDetail));

export default ArticlesCont;