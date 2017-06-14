import * as React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Button, { ButtonType } from 'components/General/Button/Button';

interface Props{
  data1: any;
  data2: any
};

interface State{

};

interface Dispatch{

};

class ArticleEditModal extends React.Component<Props, State> {

  render(){
    
    const {
      data1,
      data2
    } = this.props;

    const addBtn = {
      title: 'Добавить',
      onClick: () => data2.history.replace('asdfasdf'),
      type: ButtonType.ENABLED,
    };

    console.log('!!!!!id', data1, data2)

    return(
      <div>
        <p>Hello ID: </p>
        <Link to={'/'}>Домой</Link>

        <Button {...addBtn}/>

      </div>
    );

  };
};

type MapStateToProps = Props;

const mapStateToProps = (state, ownProps) =>({
  data1: state,
  data2: ownProps
});

// type MapDispatchToProps = Dispatch;
// const mapDispatchToProps = (dispatch): MapDispatchToProps =>({

// });

export default connect(mapStateToProps)(ArticleEditModal);