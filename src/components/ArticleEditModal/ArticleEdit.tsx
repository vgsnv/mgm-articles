import * as React from 'react';
import * as css from './ArticleEdit.styl';

import Button, { ButtonType } from 'components/General/Button/Button';
import Row from 'components/General/Row/Row';
import InputText from 'components/General/InputText/InputText';
import InputNumber from 'components/General/InputNumber/InputNumber';

import { Article } from 'store/app/articleNew'

export interface Props {
  articleNew: Article,
}

export interface Dispatch {
}

export interface State {
}

export class ArticleEdit extends React.Component<Props & Dispatch, State>{

  render(){

    const {
      articleNew
    } = this.props;

    return(<Row>
        <div className={css.btn}>{articleNew.title} {articleNew.value}</div>
      
      </Row>);
  }
};