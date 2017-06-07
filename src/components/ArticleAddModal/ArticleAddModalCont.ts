import * as React from 'react';
import { connect } from 'react-redux';

import { ArticleAddModal, Props, Dispatch } from './ArticleAddModal';
import { articles, articlesSelect } from 'store/app/articles';
import { modeSetNormal } from 'store/app/mode';

type MapStateToProps = Props;

const mapStateToProps = ({app, db}): MapStateToProps => ({
  mode: app.mode
});

type MapDispatchToProps = Dispatch;

const mapDispatchToProps = (dispatch): MapDispatchToProps =>({
  onClickAdd: () => dispatch(modeSetNormal())
})

const ArticleAddModalCont = connect<MapStateToProps, MapDispatchToProps, {} >(mapStateToProps, mapDispatchToProps)(ArticleAddModal);

export default ArticleAddModalCont;