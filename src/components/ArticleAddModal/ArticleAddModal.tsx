import * as React from 'react';
import * as css from './ArticleAddModal.styl';
import * as cssRoot from 'components/Root.styl';

import Button, { ButtonType } from 'components/General/Button/Button';
import Row from 'components/General/Row/Row';
import InputText from 'components/General/InputText/InputText';
import InputNumber from 'components/General/InputNumber/InputNumber';

import { Mode } from 'store/app/mode';
import { Article } from 'store/app/articleNew'

export interface Props {
  mode: Mode,
  articleNew: Article,
  showButton: boolean
}

export interface Dispatch {
  onClickAdd: (data) => void;
  onClickCcl: () => void;
  articleNewUpdTitle: (data: string) => void;
  articleNewUpdValue: (data: number) => void;
}

export interface State {
  title: string;
  value: number;
}

export class ArticleAddModal extends React.Component<Props & Dispatch, State>{

  private handleOnClickAdd = () => {

    const {
      articleNew,
      onClickAdd,
    } = this.props;
    
    onClickAdd(articleNew);

  }

  private handleOnClickCcl = () => {

    const {
      onClickCcl,
    } = this.props;
    
    onClickCcl();

  }

  render(){

    const {
      mode,
      onClickAdd,
      articleNew,
      articleNewUpdTitle,
      articleNewUpdValue,
      showButton
    } = this.props;

    const handleOnClickAdd = this.handleOnClickAdd;
    const handleOnClickCcl = this.handleOnClickCcl;

    const addBtn = {
      title: 'Добавить',
      onClick: showButton? () => handleOnClickAdd() : () => {},
      type: showButton ? ButtonType.ENABLED : ButtonType.DISABLED,
    };

    const cclBtn = {
      title: 'Отмена',
      onClick: () => handleOnClickCcl(),
      type: ButtonType.ENABLED,
    };

    return(<div>{ mode === Mode.ADDING && <div id={css.articleAddModal}>
      <Row>
        <Button {...cclBtn}/>
      </Row>

      <Row>
        <label>Title</label>
        <InputText
          value = {articleNew.title}
          maxLength = {25}
          onChange = {(value) => articleNewUpdTitle(value)}
          />
      </Row>

      <Row>
        <label>Value</label>
        <InputNumber
          value = {articleNew.value}
          maxLength = {25}
          onChange = {(value)=> articleNewUpdValue(value)}
          />
      </Row>
      <Row>
        <Button {...addBtn}/>
      </Row>
    </div>}</div>);
  }
};