interface Article {
  readonly id: string;
  readonly title: string;
  readonly value: number;
};

const ARTICLES_ADD = 'DB/ARTICLES_ADD';
const ARTICLES_UPD = 'DB/ARTICLES_UPD';

export const articlesAdd = (article: Article) => ({
  type: ARTICLES_ADD,
  data: article
});

export const articlesUpd = (article: Article) => ({
  type: ARTICLES_UPD,
  data: article
});

export interface Articles {
  [key: string]: Article
}

const initialArticles: Articles = {
  '19df4': { id: '19df4', title: 'Макароны', value: 130 },
  '19df3': { id: '19df3', title: 'Сосиски', value: 240 },
  '19df5': { id: '19df5', title: 'Доширак', value: 20 },
};

export const articles = (articles: Articles = initialArticles, action) => {

  switch(action.type){
    case ARTICLES_ADD:
    case ARTICLES_UPD:
      return {...articles, [action.data.id]: action.data};
    default:
      return articles;
  }

}
