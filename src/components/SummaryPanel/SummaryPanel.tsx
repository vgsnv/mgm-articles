import * as React from 'react';
import * as css from './SummaryPanel.styl';

export interface Props{
  summary: number;
};

export interface Dispatch{

};

export interface State{

};

export class SummaryPanel extends React.Component<Props, State> {

  render(){
    
    const {
      summary,
    } = this.props;

    return(<div id={css.summaryPanel}>
      <p id = { css.summaryTitle }>Итого</p>
      <p id = { css.summarySummary }>{ summary }</p>
    </div>);

  };
};