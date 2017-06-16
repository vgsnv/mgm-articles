import * as React from 'react';
import * as css from './ArticleEdit.styl';

import * as uc from 'components/General';

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

    return(<uc.Row>
        <div className={css.btn}>{articleNew.title} {articleNew.value}</div>
      
      </uc.Row>);
  }
};