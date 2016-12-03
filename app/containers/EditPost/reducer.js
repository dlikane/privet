/*
 *
 * EditPost reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CHANGE_ORIGIN_ID,
  CHANGE_ORIGIN_KIND,
  LOAD_POST,
  LOAD_POST_SUCCESS,
  LOAD_POST_ERROR,
} from './constants';
import {OriginKindEnum} from "../../model/enums";

const initialState = fromJS({
  originId: '1601001553537687',
  originKind: OriginKindEnum.FACEBOOK_EVENT,
});

function editPostReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_ORIGIN_ID:
      return state.set('originId', action.oridingId);
    case CHANGE_ORIGIN_KIND:
      return state.set('originKind', action.oridingKind);
    case LOAD_POST:
      return state
        .set('loading', true)
        .set('error', false)
        .set('post', false);
    case LOAD_POST_SUCCESS:
      return state
        .set('post', action.post)
        .set('loading', false);
    case LOAD_POST_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default editPostReducer;
