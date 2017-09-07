import * as React from "react";
import * as css from './Main.styl';

import Header from 'components/Header/HeaderCont';
import ArticleDetail from 'components/ArticleDetail/ArticleDetailCont';

const Article = ({ match}) => (
  <main id={css.main} >
    <ArticleDetail/>
  </main>
);

export default Article;