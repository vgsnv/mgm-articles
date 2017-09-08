import * as React from 'react';
import { Link, match } from 'react-router-dom';

import * as uc from 'components/General';

import { Articles as Entities } from 'store/db/articles';
import { Articles as Articles } from 'store/app/articles';

import { Mode } from 'store/app/mode';
import { Article } from 'store/db/articles';

export interface Props {
  entity: Article
};

export interface Dispatch {
};

interface State {

};

export class ArticleDetail extends React.Component<Props & Dispatch, State> {

  render() {

    const {
      entity,
    } = this.props

    return (<section>
      {!!entity &&
        <div>
          <uc.Row>
            <label>Заголовок</label>
            <p>{entity.title}</p> 
          </uc.Row>

          <uc.Row>
            <label>Значение</label>
            <p>{entity.value}</p> 
          </uc.Row>
        </div>
      }</section>);
  };
};