import * as React from 'react';
import * as css from './ArticleAddModal.styl';

import * as uc from 'components/General';

import { Mode } from 'store/app/mode';
import { Article } from 'store/app/articleNew';

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
      type: showButton ? uc.ButtonType.ENABLED : uc.ButtonType.DISABLED,
    };

    const cclBtn = {
      title: 'Отмена',
      onClick: () => handleOnClickCcl(),
      type: uc.ButtonType.ENABLED,
    };

    return(<div>{ mode === Mode.ADDING && <div id={css.articleAddModal}>
      <uc.Row>
        <uc.Button {...cclBtn}/>
      </uc.Row>

      <uc.Row>
        <label>Title</label>
        <uc.InputText
          value = {articleNew.title}
          maxLength = {25}
          onChange = {(value) => articleNewUpdTitle(value)}
          />
      </uc.Row>

      <uc.Row>
        <label>Value</label>
        <uc.InputNumber
          value = {articleNew.value}
          maxLength = {25}
          onChange = {(value)=> articleNewUpdValue(value)}
          />
      </uc.Row>
      <uc.Row>
        <uc.Button {...addBtn}/>
      </uc.Row>
    </div>}</div>);
  }
};