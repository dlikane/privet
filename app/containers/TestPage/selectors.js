import { createSelector } from 'reselect';

/**
 * Direct selector to the testPage state domain
 */
const selectTestPage = () => (state) => state.get('testPage');

const selectOriginId = () => createSelector(
  selectTestPage(),
  (testState) => testState.get('originId')
);

export default selectTestPage;
export {
  selectOriginId,
};
