import React from 'react';
import StyledItem from './SyledItem';

class ListItem extends React.PureComponent {
  render() {
    return (
      <StyledItem>
        List Item {this.props.ndx}
      </StyledItem>
    );
  }
}

export default ListItem;
