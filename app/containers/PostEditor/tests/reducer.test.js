import expect from 'expect';
import editPostReducer from '../reducer';
import { fromJS } from 'immutable';

describe('editPostReducer', () => {
  it('returns the initial state', () => {
    expect(editPostReducer(undefined, {})).toEqual(fromJS({}));
  });
});
