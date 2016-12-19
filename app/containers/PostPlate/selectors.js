import {createSelector} from 'reselect';

const selectPostState = () => (state) => state.get('post');
const selectPost = () => createSelector(
  selectPostState(),
  (post) => post
);

const selectErrorState = () => (state) => state.get('error');
const selectError = () => createSelector(
  selectErrorState(),
  (error) => error
);

export {
  selectPost,
  selectError,
}