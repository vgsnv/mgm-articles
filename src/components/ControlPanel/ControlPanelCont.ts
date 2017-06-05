import * as React from 'react';
import { connect } from 'react-redux';

import { ControlPanel, Props, Dispatch } from './ControlPanel';

import { modeSetAdding, modeSetChanging, modeSetCanceling, modeSetDelete } from "store/app/mode";

type MapStateToProps = Props;

const mapStateToProps = ({app}): MapStateToProps => ({
  articlesMode: app.mode
});

type MapDispatchToProps = Dispatch;

const mapDispatchToProps = (dispatch): MapDispatchToProps =>({
  onClickAdd: () => dispatch(modeSetAdding()),
  onClickChange: () => dispatch(modeSetChanging()),
  onClickCancel: () => dispatch(modeSetCanceling()),
  onClickDelete: () => dispatch(modeSetDelete()),
})

const ControlPanelCont = connect<MapStateToProps, MapDispatchToProps, {} >(mapStateToProps, mapDispatchToProps)(ControlPanel);

export default ControlPanelCont;