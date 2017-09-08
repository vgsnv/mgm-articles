import * as React from 'react';
import { connect } from 'react-redux';

import { v1 } from 'uuid';

import { ArticleAddModal, Props, Dispatch } from './ArticleAddModal';
import { articles, articlesSelect, articlesAdd as appArticleAdd } from 'store/app/articles';
import { articleNewReset, articleNewUpdTitle, articleNewUpdValue } from 'store/app/articleNew';
import { articlesAdd as dbArticleAdd } from 'store/db/articles';
import { modeSetNormal } from 'store/app/mode';

type MapStateToProps = Props;

const mapStateToProps = ({ app, db }): MapStateToProps => ({
  mode: app.mode,
  articleNew: app.articleNew,
  showButton: !!app.articleNew.title && !!app.articleNew.value
});

const addArticle = (data) => (dispatch) => {

  const newId = v1();
  const newArticle = { ...data, ...{ id: newId, value: parseFloat(data.value) } };

  dispatch(dbArticleAdd(newArticle));
  dispatch(appArticleAdd({ id: newId, isSelect: false }));
  dispatch(articleNewReset());
  dispatch(modeSetNormal());

}

const cclArticleNew = () => (dispatch) => {
  dispatch(articleNewReset());
  dispatch(modeSetNormal());
}

type MapDispatchToProps = Dispatch;

const mapDispatchToProps = (dispatch): MapDispatchToProps => ({
  onClickAdd: (data) => dispatch(addArticle(data)),
  onClickCcl: () => dispatch(cclArticleNew()),
  articleNewUpdTitle: (data: string) => dispatch(articleNewUpdTitle(data)),
  articleNewUpdValue: (data: number) => dispatch(articleNewUpdValue(data)),
})

const ArticleAddModalCont = connect<MapStateToProps, MapDispatchToProps, {}>(mapStateToProps, mapDispatchToProps)(ArticleAddModal);

export default ArticleAddModalCont;