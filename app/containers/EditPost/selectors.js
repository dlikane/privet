import { createSelector } from 'reselect';

/**
 * Direct selector to the editPost state domain
 */
const selectEditPost = () => (state) => state.get('editPost');

const selectOriginId = () => createSelector(
  selectEditPost(),
  (editPost) => editPost.get('originId')
);

const selectOriginKind = () => createSelector(
  selectEditPost(),
  (editPost) => editPost.get('originKind')
);


const selectLoading = () => createSelector(
  selectEditPost(),
  (editPost) => globalState.get('loading')
);

const selectError = () => createSelector(
  selectEditPost(),
  (editPost) => editPost.get('error')
);

const selectPost = () => createSelector(
  selectEditPost(),
  (editPost) => editPost.get('post')
);


export default selectEditPost;
export {
  selectOriginId,
  selectOriginKind,
  selectLoading,
  selectError,
  selectPost,
};
