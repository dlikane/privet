/*...*/
import React from 'react';
import { connect } from 'react-redux';
import PostList from './PostList'
import { generateRandomList } from './demo'
import Immutable from 'immutable';

//
// https://github.com/bvaughn/react-virtualized/blob/master/source/List/List.example.js

const list = Immutable.List(generateRandomList());

class TestPage extends React.Component {

  render() {

    return (
      <PostList list={list} />
    );
  }
}

export default connect()(TestPage);