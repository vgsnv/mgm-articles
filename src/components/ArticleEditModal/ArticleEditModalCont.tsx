import * as React from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import { ArticleEdit, Props, Dispatch } from './ArticleEdit';

// class ArticleEditModal extends React.Component<Props, State> {

//   render(){
    
//     const {
//       data1,
//       data2
//     } = this.props;

//     const addBtn = {
//       title: 'Добавить',
//       onClick: () => data2.history.replace('asdfasdf'),
//       type: ButtonType.ENABLED,
//     };

//     console.log('!!!!!id', data1, data2)

//     return(
//       <div>
//         <p>Hello ID: </p>
//         <Link to={'/'}>Домой</Link>

//         <Button {...addBtn}/>

//       </div>
//     );

//   };
// };

type MapStateToProps = Props;

const mapStateToProps = ({app, db}, ownProps): MapStateToProps =>({
  // entities: state.db.articles,
  // articleId: ownProps.match.params.id,
  articleNew: app.articleNew
});

// type MapDispatchToProps = Dispatch;
// const mapDispatchToProps = (dispatch): MapDispatchToProps =>({

// });

export default connect(mapStateToProps)(ArticleEdit);