import * as React from "react";
import * as css from './Main.styl';

import Header from 'components/Header/HeaderCont';
import ControlPanel from 'components/ControlPanel/ControlPanelCont';
import SummaryPanel from 'components/SummaryPanel/SummaryPanelCont';
import Articles from 'components/Articles/ArticlesCont';

const Home = () => (
  <main id={css.main} >
    <ControlPanel />
    <SummaryPanel summary={500} />
    <Articles />
  </main>
);

export default Home;