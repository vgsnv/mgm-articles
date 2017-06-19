import * as React from "react";
import * as css from './Main.styl';

import ControlPanel from 'components/ControlPanel/ControlPanelCont';
import SummaryPanel from 'components/SummaryPanel/SummaryPanelCont';
import Articles from 'components/Articles/ArticlesCont';
import ArticleAddModal from 'components/ArticleAddModal/ArticleAddModalCont';
import Header from 'components/Header/HeaderCont';

class App extends React.Component<{}, {}> {

  render(){
    return(<main id={css.main} >
      <Header/>
    </main>);
  }

}

export default App;
