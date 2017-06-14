import * as React from 'react';
import { Link } from 'react-router-dom';
import * as css from './Articles.styl';

import { Articles as Entities } from 'store/db/articles';
import { Articles as Articles } from 'store/app/articles';

import { Mode } from 'store/app/mode';

import SelectItem from 'components/General/SelectItem/SelectItem'

export interface Props{
  entities: Entities,
  articles: Articles,
  mode: Mode,
};

export interface Dispatch{
  onClickTitle: () => void;
  onClickValue: () => void;
  articlesSelect: (key: string) => void;
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
      articlesSelect,
    } = this.props;

    return Object.keys(articles).map(key => {

      const selectItemClick = () =>{
        articlesSelect(key);
      }

      return(
        <tr key={key} className={css.article}>
          {mode === Mode.CHANGING && 
            <td className={css.articleDelete}>
              <SelectItem  selectStatus = {articles[key].isSelect} onClick = { selectItemClick }/>
            </td>}
          <td className={css.artilceTitle} >
            {entities[key].title} <Link to={`/article/${key}`}>{key}</Link>
          </td>
          <td className={css.artilceValue}>{entities[key].value}</td>
        </tr>
              );
    })
    
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