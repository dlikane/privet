/*...*/

import {
  LOAD_POST,
  LOAD_POST_SUCCESS,
  LOAD_POST_ERROR,
} from './constants';

export function loadPost() {
  return {
    type: LOAD_POST,
  };
}

export function postLoaded(post) {
  return {
    type: LOAD_POST_SUCCESS,
    post,
  };
}

export function postLoadingError(error) {
  return {
    type: LOAD_POST_ERROR,
    error,
  };
}
