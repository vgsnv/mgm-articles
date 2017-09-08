import * as React from 'react';
import { connect } from 'react-redux';

import { ControlPanel, Props, Dispatch } from './ControlPanel';

import { modeSetNormal, modeSetAdding, modeSetChanging, modeSetCanceling, modeSetDelete } from "store/app/mode";
import { articlesRemove } from 'store/app/articles';

type MapStateToProps = Props;

const mapStateToProps = ({ app }): MapStateToProps => ({
  mode: app.mode
});

type MapDispatchToProps = Dispatch;

const deleteArticles = () => (dispatch) => {
  dispatch(modeSetNormal());
  dispatch(articlesRemove());
}

const mapDispatchToProps = (dispatch): MapDispatchToProps => ({
  onClickAdd: () => dispatch(modeSetAdding()),
  onClickChange: () => dispatch(modeSetChanging()),
  onClickCancel: () => dispatch(modeSetCanceling()),
  onClickDelete: () => dispatch(deleteArticles()),
})

const ControlPanelCont = connect<MapStateToProps, MapDispatchToProps, {}>(mapStateToProps, mapDispatchToProps)(ControlPanel);

export default ControlPanelCont;