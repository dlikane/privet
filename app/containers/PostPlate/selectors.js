import {createSelector, createStructuredSelector} from 'reselect';

/**
 * Direct selector to the editPost state domain
 */
export const selectEditPost = () => (state) => state.get('editPost');

export const selectPost = () => createSelector(
  selectEditPost(),
  (editPost) => editPost.get('post')
);

export const selectEnDescription = () => createSelector(
  selectPost(),
  (post) => post.en_description
);

export const mapStateToProps = createStructuredSelector({
  post: selectPost(),
  en_description: selectEnDescription(),
});
