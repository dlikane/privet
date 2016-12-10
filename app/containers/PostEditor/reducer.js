/*...*/
import { combineReducers } from 'redux-immutable';
import { createForms } from 'react-redux-form/immutable';
import {
  LOAD_POST,
  LOAD_POST_SUCCESS,
  LOAD_POST_ERROR,
} from './constants';

function editPostReducer(state = {}, action) {
  switch (action.type) {
    case LOAD_POST:
      console.log('load_post');
      return state
        .set('loading', true)
        .set('error', false)
        .set('post', false);
    case LOAD_POST_SUCCESS:
      console.log('reducer: load_post_success');
      return state
        .set('post', action.post)
        .set('loading', false);
    case LOAD_POST_ERROR:
      console.log('reducer: load_post_error: ' + action.error);
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default editPostReducer;
