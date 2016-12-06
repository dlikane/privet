/**
 * PostItem
 *
 * Lists the name and the issue count of a repository
 */

import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import Wrapper from './Wrapper';

export class PostItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const post = this.props.post;

    return (
      <Wrapper>
        <Field name="ID" value="{post.id}" />
        <Field name="Lead ID" value="{post.leadId}" />
        <Field name="Status" value="{post.status}" />
        <Field name="Origin Kind" value="{post.originKind}" />
        <Field name="Origin ID" value="{post.originId}" />
        <Field name="Origin Locale" value="{post.originLocale}" />
      </Wrapper>
    );

    // description: [ {
    //   locale: String,
    //   text: String
    // }],
    //   start_time: Date,
    //   posted_time: Date,
    //   duration: String,
    //   location: String,
    //   parties: [ { type: String }],
    //   tags: [ { type: String }]
  }
}

PostItem.propTypes = {
  post: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
};

export default PostItem;
