import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from '../components/Post';
import * as Actions from '../actions/actions';
import { bindActionCreators } from 'redux';

class Single extends Component{
  componentWillMount(){
    const {params} = this.props.match;
    const {fetchPost} = this.props.actions
    fetchPost(params.id);
  }
  render(){
    const { isLoading } = this.props.post
    return(
      <div>
      Hello
      { isLoading ? <h2>Fetching Post...</h2> : <Post {...this.props.post}/>}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { receivePost } = state
  return{
    post: receivePost
  }
}

function mapDispatchToProps(dispatch){
  return{
    actions: bindActionCreators(Actions, dispatch)
  }
}

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(Single)
