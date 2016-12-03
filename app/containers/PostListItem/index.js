/**
 * PostListItem
 *
 * Lists the name and the issue count of a repository
 */

import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { FormattedNumber } from 'react-intl';

import IssueIcon from './IssueIcon';
import IssueLink from './IssueLink';
import ListItem from 'components/ListItem';
import PostLink from './PostLink';
import Wrapper from './Wrapper';

export class PostListItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const item = this.props.item;

    // Put together the content of the repository
    const content = (
      <Wrapper>
        <PostLink href={item.html_url} target="_blank">
          item.name}
        </PostLink>
        <IssueLink href={`${item.html_url}/issues`} target="_blank">
          <IssueIcon />
          <FormattedNumber value={item.open_issues_count} />
        </IssueLink>
      </Wrapper>
    );

    // Render the content into a list item
    return (
      <ListItem key={`post-list-item-${item.full_name}`} item={content} />
    );
  }
}

PostListItem.propTypes = {
  item: React.PropTypes.object,
  currentUser: React.PropTypes.string,
};

export default connect(createSelector(
  (currentUser) => ({ currentUser })
))(PostListItem);
