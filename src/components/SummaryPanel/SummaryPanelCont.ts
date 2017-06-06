import * as React from 'react';
import { connect } from 'react-redux';

import { Articles as Entities } from 'store/db/articles';
import { Articles as Articles } from 'store/app/articles';

import { Props, Dispatch, State, SummaryPanel} from './SummaryPanel';
import { articles, articlesSelect } from 'store/app/articles'

type MapStateToProps = Props;

const getSummary = (entities: Entities, articles: Articles) =>{

  return Object.keys(articles).reduce( (previousValue, currentValue, index, array) => {
    return  previousValue + entities[currentValue].value
  }, 0);

}

const mapStateToProps = ({app, db}): MapStateToProps => ({
  summary: getSummary(db.articles, app.articles),
});

type MapDispatchToProps = Dispatch;

const mapDispatchToProps = (dispatch): MapDispatchToProps =>({
  onClickTitle: () => {console.log('Order by Title')},
  onClickValue: () => {console.log('Order by Value')},
  articlesSelect: (key) => {dispatch(articlesSelect(key))},
})

const SummaryPanelCont = connect<MapStateToProps, MapDispatchToProps, {} >(mapStateToProps, mapDispatchToProps)(SummaryPanel);

export default SummaryPanelCont;