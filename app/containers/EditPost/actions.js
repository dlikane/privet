/*
 *
 * EditPost actions
 *
 */

import {
  CHANGE_ORIGIN_ID,
  CHANGE_ORIGIN_KIND,
  LOAD_POST,
  LOAD_POST_SUCCESS,
  LOAD_POST_ERROR,
} from './constants';

export function changeOriginId(originId) {
  return {
    type: CHANGE_ORIGIN_ID,
    originId,
  };
}

export function changeOriginKind(originKind) {
  return {
    type: CHANGE_ORIGIN_KIND,
    originKind,
  };
}

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
