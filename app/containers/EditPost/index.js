/*
 *
 * EditPost
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { selectOriginId, selectOriginKind, selectPost } from './selectors';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { createStructuredSelector } from 'reselect';
import { loadPost, changeOriginId, changeOriginKind } from './actions';
import Form from "./Form";
import Input from "./Input";
import PostItem from "containers/PostItem";

export class EditPost extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    if (this.props.originId && this.props.originId.trim().length > 0) {
      this.props.onSubmitForm();
    }
  }

  render() {
    let mainContent = '';
    if (this.props.post) {
      console.log('post for: ' + this.props.post.originId);
      mainContent = (
        <PostItem post={this.props.post} />
      );
    }
    else {
      console.log('post is null');
    }
    console.log('originId: ' + this.props.originId);
    console.log('originKind: ' + this.props.originKind);

    return (
      <div>
        <FormattedMessage {...messages.header} />

        <Form onSubmit={this.props.onSubmitForm}>
          <label htmlFor="originId">
            <FormattedMessage {...messages.originId} />
            <Input
              id="originId"
              type="text"
              placeholder="facebook|youtube ID"
              value={this.props.originId}
              onChange={this.props.onChangeOriginId}
            />
          </label>
          <label htmlFor="originKind">
            <FormattedMessage {...messages.originKind} />
            <Input
              id="originKind"
              type="text"
              placeholder="facebook#post"
              value={this.props.originKind}
              onChange={this.props.onChangeOriginKind}
            />
          </label>
        </Form>
        {mainContent}
      </div>
    );
  }
}

EditPost.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(EditPost);
