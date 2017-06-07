import * as React from 'react';
import * as css from './ArticleAddModal.styl';
import * as cssRoot from 'components/Root.styl';

import Button from 'components/General/Button/Button';
import Row from 'components/General/Row/Row';
import { Mode } from 'store/app/mode';

export interface Props {
  mode: Mode
}

export interface Dispatch {
  onClickAdd: () => void;
}

export interface State {
  title: string;
  value: number;
}

export class ArticleAddModal extends React.Component<Props & Dispatch, State>{

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      value: 0
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'text' ? target.value : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render(){

    const {
      mode,
      onClickAdd,
    } = this.props;

    const addBtn = {
      title: 'Добавить',
      onClick: onClickAdd
    };

    return(<div>{ mode === Mode.ADDING && <div id={css.articleAddModal}>
      <Row>
        <input
          name="title"
          type="text"
          value={this.state.title}
          onChange={this.handleInputChange} />
      </Row>

      <Row>
        <input
          name="value"
          type="text"
          value={this.state.value}
          onChange={this.handleInputChange} />  
      </Row>  
      <Row>
        <Button {...addBtn}/>
      </Row>
    </div>}</div>);
  }
};