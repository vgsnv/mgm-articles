import * as React from 'react';
import * as css from './ControlPanel.styl';

import * as uc from 'components/General';

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
      type: uc.ButtonType.ENABLED,
    };

    const cngBtn = {
      title: 'Изменить',
      onClick: onClickChange,
      type: uc.ButtonType.ENABLED,
    };

    const cclBtn = {
      title: 'Отменить',
      onClick: onClickCancel,
      type: uc.ButtonType.ENABLED,
    };

    const delBtn = {
      title: 'Удалить',
      onClick: onClickDelete,
      type: uc.ButtonType.ENABLED,
    };

    return(<uc.Row>
      <div id={css.controlPanel}>
        <uc.Button {...addBtn}/>
        {mode !== Mode.CHANGING && <uc.Button {...cngBtn}/>}
        {mode === Mode.CHANGING && <uc.Button {...cclBtn}/>}
        {mode === Mode.CHANGING && <uc.Button {...delBtn}/>}
      </div>
    </uc.Row>);
  }
};