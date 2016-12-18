import {createSelector} from 'reselect';

const selectPostState = () => (state) => state.get('currentPost');

const selectCurrentPost = () => createSelector(
  selectPostState(),
  (currentPost) => currentPost
);

export default selectPostState;
export {
  selectCurrentPost,
}