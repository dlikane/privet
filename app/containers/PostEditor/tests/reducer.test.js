import expect from 'expect';
import editPostReducer from '../../PostPlate/reducer';
import { fromJS } from 'immutable';

describe('editPostReducer', () => {
  it('returns the initial state', () => {
    expect(editPostReducer(undefined, {})).toEqual(fromJS({}));
  });
});
