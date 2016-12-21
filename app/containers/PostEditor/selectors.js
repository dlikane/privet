import { createSelector } from 'reselect';

const selectEditorState = () => (state) => state.get('editor');

const selectEditor = () => createSelector(
  selectEditorState(),
  (editor) => editor
);

export default selectEditorState;
export {
  selectEditor,
};
