/*...*/
import React from 'react';
import { connect } from 'react-redux';
import PostList from './PostList'

//
// https://github.com/bvaughn/react-virtualized/blob/master/source/List/List.example.js

class TestPage extends React.Component {
  render() {
    return (
      <PostList/>
    );
  }
}

export default connect()(TestPage);