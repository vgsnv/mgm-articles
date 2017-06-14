import * as React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

interface Props{
  data1: any;
  data2: any
};

interface State{

};

interface Dispatch{

};

class ArticleEditModalPage extends React.Component<Props, State> {

  render(){
    
    const {
      data1,
      data2
    } = this.props;

    console.log('!!!!!id', data1, data2)

    return(
      <div>
        <p>Hello ID: {data2} </p>
        <Link to={'/'}>Домой</Link>
      </div>
    );

  };
};

type MapStateToProps = Props;

const mapStateToProps = (state, ownProps) =>({
  data1: state,
  data2: ownProps.match.params.id
});

// type MapDispatchToProps = Dispatch;
// const mapDispatchToProps = (dispatch): MapDispatchToProps =>({

// });

export default connect(mapStateToProps)(ArticleEditModalPage);