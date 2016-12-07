/*...*/

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
      console.log('change_oringin_id: ' + action.oridingId);
      return state.set('originId', action.oridingId);
    case CHANGE_ORIGIN_KIND:
      console.log('change_oringin_kind: ' + action.originKind);
      return state.set('originKind', action.oridingKind);
    case LOAD_POST:
      console.log('load_post');
      return state
        .set('loading', true)
        .set('error', false)
        .set('post', false);
    case LOAD_POST_SUCCESS:
      console.log('load_post_success');
      return state
        .set('post', action.post)
        .set('loading', false);
    case LOAD_POST_ERROR:
      console.log('load_post_error: ' + action.error);
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default editPostReducer;
