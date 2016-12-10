import { createSelector } from 'reselect';

const selectPostEditorState = () => (state) => state.get('postEditor');

const selectPostEditor = () => createSelector(
  selectPostEditorState(),
  (postEditor) => postEditor
);

const selectOriginId = () => createSelector(
  selectPostEditorState(),
  (postEditor) => postEditor.get('originId')
);
const selectOriginKind = () => createSelector(
  selectPostEditorState(),
  (postEditor) => postEditor.get('originKind')
);

export default selectPostEditorState;
export {
  selectPostEditor,
  selectOriginId,
  selectOriginKind,
};
