/*...*/
import { combineReducers } from 'redux-immutable';
import { fromJS } from 'immutable';
import { createForms } from 'react-redux-form/immutable';
import {
  LOAD_POST,
  LOAD_POST_SUCCESS,
  LOAD_POST_ERROR,
} from './constants';

function editPostReducer(state = fromJS({}), action) {
  switch (action.type) {
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
