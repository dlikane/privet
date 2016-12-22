/*...*/
import React from 'react';
import { connect } from 'react-redux';
import InfiniteList from './infinite/InfiniteList';

class BatchPage extends React.Component {
  render() {
    return (
      <InfiniteList/>
    );
  }
}

export default connect()(BatchPage);