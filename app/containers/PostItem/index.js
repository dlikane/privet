/**
 * PostItem
 *
 * Lists the name and the issue count of a repository
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Wrapper from './Wrapper';
import { selectPost } from './selectors';
import Field from '../../components/Field';
import Img from './Img';

export class PostItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const post = this.props.post;

    let mainContent = 'empty';

    if (post) {
      mainContent = (
        <div>
          <Field name="ID" value={post.id} />
          <Field name="Lead ID" value={post.leadId} />
          <Field name="Status" value={post.status} />
          <Field name="Origin Kind" value={post.originKind} />
          <Field name="Origin ID" value={post.originId} />
          <Field name="Origin Locale" value={post.originLocale} />
          <Img src={post.originImg} alt="original image" />
        </div>
      )
    }
    return (
      <Wrapper>
        {mainContent}
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

const mapStateToProps = createStructuredSelector({
  post: selectPost(),
});

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(PostItem);
