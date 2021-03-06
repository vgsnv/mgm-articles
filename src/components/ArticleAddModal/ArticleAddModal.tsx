import * as React from 'react';
import * as css from './ArticleAddModal.styl';
import * as cssRoot from 'components/Root.styl';

import Button from 'components/General/Button/Button';
import Row from 'components/General/Row/Row';
import InputText from 'components/General/InputText/InputText';
import InputNumber from 'components/General/InputNumber/InputNumber';

import { Mode } from 'store/app/mode';
import { Article } from 'store/app/articleNew'

export interface Props {
  mode: Mode,
  articleNew: Article,
}

export interface Dispatch {
  onClickAdd: (data) => void;
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

  render(){

    const {
      mode,
      onClickAdd,
      articleNew,
      articleNewUpdTitle,
      articleNewUpdValue,
    } = this.props;

    const handleOnClickAdd = this.handleOnClickAdd;

    const addBtn = {
      title: 'Добавить',
      onClick: () => handleOnClickAdd(),
    };

    return(<div>{ mode === Mode.ADDING && <div id={css.articleAddModal}>

      <Row>
        <InputText
          value = {articleNew.title}
          maxLength = {25}
          onChange = {(value) => articleNewUpdTitle(value)}
          />
      </Row>

      <Row>
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