const ARTICLES_ADD = 'APP/ARTICLES_ADD';
const ARTICLES_REMOVE = 'APP/ARTICLES_REMOVE';

export const articlesAdd = (id: string) => ({
  type: ARTICLES_ADD,
  data: id
});

export const articlesRemove = (id: string) => ({
  type: ARTICLES_REMOVE,
  data: id
});

const defaultArticles = ['19df4', '19df3', '19df5'];

export const articles = (articles: Array<string> = defaultArticles, action) => {

  switch(action.type){
    case ARTICLES_ADD:
      return [...articles, action.data];
    case ARTICLES_REMOVE:
      return articles.filter((value: string)=> value !== action.data)
    default:
      return articles;
  }

}
