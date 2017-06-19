import * as React from 'react';
import { Link } from 'react-router-dom';
import * as css from './Header.styl';

import * as uc from 'components/General';

import { Article } from 'store/app/articleNew'

export interface Props {
}

export interface Dispatch {
}

export interface State {
}

export class Header extends React.Component<Props & Dispatch, State>{

  render(){

    return(<uc.Row>
        <Link to={`/`}>
          <header id={css.header} >
            <uc.Row>
              <h1>Managment Articles</h1>
            </uc.Row>
          </header> 
        </Link>
      </uc.Row>);
  }
};