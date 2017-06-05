import * as React from 'react';
import * as css from './Button.styl';

interface Props{
  title: string;
  onClick: () => void;
};

interface State{

};

export default class Button extends React.Component<Props, State> {

  render(){
    
    const {
      title,
      onClick
    } = this.props;

    return(
      <button onClick = { onClick } className={ css.btn }>{ title }</button>
    );

  };
};