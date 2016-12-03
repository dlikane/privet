/*
 *
 * TestPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CHANGE_ORIGIN_ID,
} from './constants';

const initialState = fromJS({
  oriningId: '',
});

function testPageReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_ORIGIN_ID:
      return state.set('oringId', action.originId);
    default:
      return state;
  }
}

export default testPageReducer;
