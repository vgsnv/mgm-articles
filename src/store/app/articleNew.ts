import * as _ from 'lodash';

const ARTICLE_NEW_RESET = 'APP/ARTICLE_NEW_RESET';
const ARTICLE_NEW_UPD_TITLE = 'APP/ARTICLE_NEW_UPD_TITLE';
const ARTICLE_NEW_UPD_VALUE = 'APP/ARTICLE_NEW_UPD_VALUE';

export interface Article {
  readonly id: string;
  readonly title: string;
  readonly value: number;
  readonly isSelect: false;
};

export const articleNewUpdTitle = (data: string) => ({
  type: ARTICLE_NEW_UPD_TITLE,
  data: data
});

export const articleNewUpdValue = (data: number) => ({
  type: ARTICLE_NEW_UPD_VALUE,
  data: data
});

export const articleNewReset= () => ({
  type: ARTICLE_NEW_RESET
});

const defaultArticles: Article =  { id: 'null', title: '', value: 0, isSelect: false };

export const articleNew = (article: Article = defaultArticles, action) => {

  switch(action.type){
    case ARTICLE_NEW_UPD_TITLE:
      return {...article, ...{title: action.data}};
    case ARTICLE_NEW_UPD_VALUE:
      return {...article, ...{value: action.data}};      
    case ARTICLE_NEW_RESET:
      return {...defaultArticles}
    default:
      return article;
  }

}
