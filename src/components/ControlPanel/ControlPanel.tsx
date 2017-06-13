import * as React from 'react';
import * as css from './ControlPanel.styl';

import Button, { ButtonType } from 'components/General/Button/Button';
import { Mode } from 'store/app/mode';

export interface Props {
  mode: Mode;
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
      mode,
    } = this.props;

    const addBtn = {
      title: 'Добавить',
      onClick: onClickAdd,
      type: ButtonType.ENABLED,
    };

    const cngBtn = {
      title: 'Изменить',
      onClick: onClickChange,
      type: ButtonType.ENABLED,
    };

    const cclBtn = {
      title: 'Отменить',
      onClick: onClickCancel,
      type: ButtonType.ENABLED,
    };

    const delBtn = {
      title: 'Удалить',
      onClick: onClickDelete,
      type: ButtonType.ENABLED,
    };

    return(<div className={css.controlPanel}>
      <Button {...addBtn}/>
      {mode !== Mode.CHANGING && <Button {...cngBtn}/>}
      {mode === Mode.CHANGING && <Button {...cclBtn}/>}
      {mode === Mode.CHANGING && <Button {...delBtn}/>}
    </div>);
  }
};