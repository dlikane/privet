import { createSelector } from 'reselect';

const selectPostEditorState = () => (state) => state.get('editor');

const selectPostEditor = () => createSelector(
  selectPostEditorState(),
  (editor) => editor
);

export default selectPostEditorState;
export {
  selectPostEditor,
};
