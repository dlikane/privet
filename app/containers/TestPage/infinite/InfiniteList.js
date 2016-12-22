import React from 'react';
import { connect } from 'react-redux';
import Infinite from 'react-infinite';
import ListItem from './ListItem';
import StyledList from './StyledList';

//
// https://github.com/seatgeek/react-infinite/blob/master/examples/example.html
class InfiniteList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      elements: this.buildElements(0, 20),
      isInfiniteLoading: false
    };
  }

  buildElements(start, end) {
    var elements = [];
    for (var i = start; i < end; i++) {
      let li = (
        <ListItem ndx={i} key={i}/>
      );
      elements.push(li)
    }
    return elements;
  }

  handleInfiniteLoad() {
    var that = this;
    this.setState({
      isInfiniteLoading: true
    });
    setTimeout(function() {
      var elemLength = that.state.elements.length;
      var newElements = that.buildElements(elemLength, elemLength + 1000);
      that.setState({
        isInfiniteLoading: false,
        elements: that.state.elements.concat(newElements)
      });
    }, 2500);
  }

  elementInfiniteLoad() {
    return (
      <ListItem>
        Loading...
      </ListItem>
    );
  }

  render() {
    let elements = this.state.elements;

    return (
      <StyledList>
        <Infinite elementHeight={40}
                       containerHeight={250}
                       infiniteLoadingBeginBottomOffset={200}
                       onInfiniteLoad={this.handleInfiniteLoad}
                       loadingSpinnerDelegate={this.elementInfiniteLoad()}
                       isInfiniteLoading={this.state.isInfiniteLoading}
        >
          {elements}
        </Infinite>
      </StyledList>
    );
  }
}

InfiniteList.propTypes = {
};

export default connect()(InfiniteList);