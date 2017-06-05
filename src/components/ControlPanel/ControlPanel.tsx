import * as React from 'react';
import { connect } from 'react-redux';
import * as css from './ControlPanel.styl';
import Button from 'components/General/Button/Button';

export interface Props {
  articlesMode: string;
}

export interface Dispatch {
  onClickAdd: () => void;
  onClickChange: () => void;
  onClickCancel: () => void;
  onClickDelete: () => void;
}

export class ControlPanel extends React.Component<Props & Dispatch, any>{

  render(){

    const {
      onClickAdd,
      onClickChange,
      onClickCancel,
      onClickDelete,
      articlesMode,
    } = this.props;

    const addBtn = {
      title: 'Добавить',
      onClick: onClickAdd
    };

    const cngBtn = {
      title: 'Изменить',
      onClick: onClickChange
    };

    const cclBtn = {
      title: 'Отменить',
      onClick: onClickCancel
    };

    const delBtn = {
      title: 'Удалить',
      onClick: onClickDelete
    };

    return(<div className={css.controlPanel}>
      <Button {...addBtn}/>
      {articlesMode !== 'CHANGING' && <Button {...cngBtn}/>}
      {articlesMode === 'CHANGING' && <Button {...cclBtn}/>}
      {articlesMode === 'CHANGING' && <Button {...delBtn}/>}
    </div>);
  }
};