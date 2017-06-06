import * as _ from 'lodash';

const ARTICLES_ADD = 'APP/ARTICLES_ADD';
const ARTICLES_SELECT = 'APP/ARTICLES_SELECT';
const ARTICLES_REMOVE = 'APP/ARTICLES_REMOVE';

interface Article {
  readonly id: string;
  readonly isSelect: boolean;
};

export interface Articles {
  [key: string]: Article
};

export const articlesAdd = (data: Article) => ({
  type: ARTICLES_ADD,
  data: data
});

export const articlesSelect= (id: string) => ({
  type: ARTICLES_SELECT,
  data: id
});

export const articlesRemove= () => ({
  type: ARTICLES_REMOVE,
});

const defaultArticles = {
  '19df4': { id: '19df4', isSelect: false },
  '19df3': { id: '19df4', isSelect: false },
  '19df5': { id: '19df4', isSelect: false },
};

export const articles = (articles: Articles = defaultArticles, action) => {

  switch(action.type){
    case ARTICLES_ADD:
      return {...articles, [action.data.id]: action.data};
    case ARTICLES_SELECT:
      return {...articles, [action.data]: {...articles[action.data], isSelect: !articles[action.data].isSelect } }
    case ARTICLES_REMOVE:
      return _.pickBy(articles, article => article.isSelect)
    default:
      return articles;
  }

}
