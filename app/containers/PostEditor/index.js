/*
 *
 * PostEditor
 *
 */

import React from 'react';
import {connect} from 'react-redux';
import {selectOriginId, selectOriginKind, selectPost} from './selectors';
import {FormattedMessage} from 'react-intl';
import messages from './messages';
import {createStructuredSelector} from 'reselect';
import {loadPost, changeOriginId, changeOriginKind} from './actions';
import PostItem from "containers/PostItem";
import PostPlate from "containers/PostPlate";
import {FormGroup, ControlLabel, FormControl} from 'react-bootstrap';


export class PostEditor extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    if (this.props.originId && this.props.originId.trim().length > 0) {
      this.props.onSubmitForm();
    }
  }

  getValidationState() {
    return 'success';
  }

  render() {
    let mainContent = '';
    if (this.props.post) {
      console.log('post for: ' + this.props.post.originId);
      mainContent = (
        <PostPlate post={this.props.post}/>
      );
    }
    else {
      console.log('post is null');
    }
    console.log('originId: ' + this.props.originId);
    console.log('originKind: ' + this.props.originKind);

    return (
      <div>
        <form>
          <h1><FormattedMessage {...messages.header} /></h1>
          <FormGroup
            validationState={this.getValidationState()}
            onSubmit={this.props.onSubmitForm}
          >
            <ControlLabel><FormattedMessage {...messages.originId} /></ControlLabel>
            <FormControl
              id="originId"
              type="text"
              placeholder="facebook|youtube ID"
              value={this.props.originId}
              onChange={this.props.onChangeOriginId}
            />
            <ControlLabel><FormattedMessage {...messages.originKind} /></ControlLabel>
            <FormControl
              id="originKind"
              type="text"
              placeholder="facebook#post"
              value={this.props.originKind}
              onChange={this.props.onChangeOriginKind}
            />
          </FormGroup>
        </form>
        {mainContent}
      </div>
    );
  }
}

PostEditor.propTypes = {
  onSubmitForm: React.PropTypes.func,
  originId: React.PropTypes.string,
  onChangeOriginId: React.PropTypes.func,
  originKind: React.PropTypes.string,
  onChangeOriginKind: React.PropTypes.func,
  post: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
};

const mapStateToProps = createStructuredSelector({
  originId: selectOriginId(),
  originKind: selectOriginKind(),
  post: selectPost(),
});

function mapDispatchToProps(dispatch) {
  return {
    onChangeOriginId: (evt) => dispatch(changeOriginId(evt.target.value)),
    onChangeOriginKind: (evt) => dispatch(changeOriginKind(evt.target.value)),
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault)
        evt.preventDefault();
      dispatch(loadPost());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostEditor);
