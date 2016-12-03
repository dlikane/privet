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

export class TestPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>
        <FormattedMessage {...messages.header} />
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
