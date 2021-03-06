import { createSelector } from 'reselect';

/**
 * Direct selector to the editPost state domain
 */
const selectEditPost = () => (state) => state.get('editPost');

const selectPost = () => createSelector(
  selectEditPost(),
  (editState) => editState.get('post')
);

export default selectEditPost;
export {
  selectPost,
};
