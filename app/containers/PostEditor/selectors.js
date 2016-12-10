import { createSelector } from 'reselect';

/**
 * Direct selector to the editPost state domain
 */
const selectEditPost = () => (state) => state.get('editPost');

const selectPost = () => createSelector(
  selectEditPost(),
  (globalState) => globalState.get('post')
);

const selectOriginId = () => createSelector(
  selectEditPost(),
  (editPost) => { console.log('selecting originId: ' + editPost.get('originId')); return editPost.get('originId'); }
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


export default selectEditPost;
export {
  selectPost,
  selectOriginId,
  selectOriginKind,
  selectLoading,
  selectError,
};
