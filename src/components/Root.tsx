import * as React from "react";
import * as css from './Root.styl';

import ControlPanel from 'components/ControlPanel/ControlPanelCont';
import Articles from 'components/Articles/ArticlesCont';

class App extends React.Component<{}, {}> {

  render(){
    return(<main classID={css.main}>
      <ControlPanel/>
      <Articles/>
    </main>);
  }

}

export default App;
