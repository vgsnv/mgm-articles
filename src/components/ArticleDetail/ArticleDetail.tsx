import * as React from 'react';
import { Link, match } from 'react-router-dom';

import * as uc from 'components/General';

import { Articles as Entities } from 'store/db/articles';
import { Articles as Articles } from 'store/app/articles';

import { Mode } from 'store/app/mode';

export interface Props {
  entities: Array<{}>
  match?: any
};

export interface Dispatch {
};

interface State {
 
};

export class ArticleDetail extends React.Component<Props & Dispatch, State> {

  render() {

    const {
      entities,
      match,
    } = this.props

    console.info('this.props', this.props, entities)

    return (<uc.Row>
      <div>Hello {Object.keys(entities).length ? entities[match.params.id].title : 'Hello'}</div>
    </uc.Row>);

  };
};