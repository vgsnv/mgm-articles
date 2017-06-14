import * as React from 'react';
import * as css from './SummaryPanel.styl';

import Row from 'components/General/Row/Row';

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

    return(
            <Row>
              <div id={css.summaryPanel}>
              <p id = { css.summaryTitle }>Итого</p>
      <p id = { css.summarySummary }>{ summary }</p>
      </div>
      </Row>


    );

  };
};