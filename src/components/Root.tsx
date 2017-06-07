import * as React from "react";
import * as css from './Root.styl';

import ControlPanel from 'components/ControlPanel/ControlPanelCont';
import SummaryPanel from 'components/SummaryPanel/SummaryPanelCont';
import Articles from 'components/Articles/ArticlesCont';
import ArticleAddModal from 'components/ArticleAddModal/ArticleAddModalCont';

class App extends React.Component<{}, {}> {

  render(){
    return(<main classID={css.main}>
      <ControlPanel/>
      <SummaryPanel summary={500}/>
      <Articles/>
      <ArticleAddModal/>
    </main>);
  }

}

export default App;
