/*
 *
 * TestPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import selectTestPage from './selectors';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Input from './Input';
import { SplitButton, MenuItem } from 'react-bootstrap';

export class TestPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>
        <FormattedMessage {...messages.header} />
        <SplitButton title="Dropdown right" pullRight id="split-button-pull-right">
          <MenuItem eventKey="1">Action</MenuItem>
          <MenuItem eventKey="2">Another action</MenuItem>
          <MenuItem eventKey="3">Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey="4">Separated link</MenuItem>
        </SplitButton>
        <Input
          id="originKind"
          type="text"
          placeholder="facebook#post"
          value={this.props.orinigKind}
          onChange={this.props.onChangeOringKind}
        />
      </div>
    );
  }
}

const mapStateToProps = createSelector(
  selectTestPage(),
  (originId) => ({originId}),
);

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TestPage);
