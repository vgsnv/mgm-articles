import * as React from "react";
import * as css from './Root.styl';

import ControlPanel from 'components/ControlPanel/ControlPanelCont';

class App extends React.Component<{}, {}> {

  render(){
    return(<main classID={css.main}>
      <ControlPanel/>
    </main>);
  }

}

export default App;
