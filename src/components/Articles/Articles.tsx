import * as React from 'react';
import * as css from './Articles.styl';

import { Articles as Entities } from 'store/db/articles';
import { Mode } from 'store/app/mode';

export interface Props{
  entities: Entities,
  articles: Array<string>,
  mode: Mode,
};

export interface Dispatch{
  onClickTitle: () => void;
  onClickValue: () => void;
};

interface State{

};

export class ArticleList extends React.Component<Props & Dispatch, State> {

  private getArticleListHeader(){

      const {
        mode,
        onClickTitle,
        onClickValue
      } = this.props

      return(<thead id={css.articleListHeader}>
        <tr>
          { mode === Mode.CHANGING && <th>Выбрать</th> }
          <th onClick={onClickTitle} >Заголовок</th>
          <th onClick={onClickValue} >Значение</th></tr>
      </thead>);

  }

    private getArticles(){

    const {
      entities,
      articles,
      mode,
    } = this.props;

    return articles.map( id => {

      return(
        <tr key={id} className={css.article}>
          {mode === Mode.CHANGING && 
            <td className={css.articleDelete}>
              hello
            </td>}
          <td className={css.artilceTitle} >{entities[id].title}</td>
          <td className={css.artilceValue}>{entities[id].value}</td>
        </tr>);

    });
    
  };

  render(){
    
    const {
      entities,
      articles,
      mode,
    } = this.props;

    const getArticleListHeader = this.getArticleListHeader();
    const getArticles = this.getArticles();

    return(<table id={css.articleList}>
      {getArticleListHeader}
      <tbody>{ getArticles }</tbody>
    </table>);

  };
};