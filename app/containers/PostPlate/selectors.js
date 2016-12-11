import {createSelector} from 'reselect';

const selectPostState = () => (state) => state.get('post');

const selectPost = () => createSelector(
  selectPostState(),
  (post) => post
);

export default selectPostState;
export {
  selectPost,
}