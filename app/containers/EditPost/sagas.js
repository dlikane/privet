/**
 * Gets post from faceook
 */

import { takeLatest } from 'redux-saga';
import { take, call, put, select, fork, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { LOAD_POST } from './constants';
import { postLoaded, postLoadingError } from './actions';

import request from 'utils/request';
import { selectPost, selectOriginId } from './selectors';

/**
 * Github repos request/response handler
 */
export function* getPost() {
  // Select username from store
  const originId = yield select(selectOriginId());
  const requestURL = `https://graph.facebook.com/${originId}?access_token=1126898087427042|6c75ae6050aea3f5ed7ec56365faa649`;
  try {
    // Call our request helper (see 'utils/request')
    const post = yield call(request, requestURL);
    yield put(postLoaded(post));
  } catch (err) {
    yield put(postLoadingError(err));
  }
}

/**
 * Watches for LOAD_REPOS actions and calls getRepos when one comes in.
 * By using `takeLatest` only the result of the latest API call is applied.
 */
export function* getPostWatcher() {
  yield fork(takeLatest, LOAD_POST, getPost);
}

/**
 * Root saga manages watcher lifecycle
 */
export function* postData() {
  // Fork watcher so we can continue execution
  const watcher = yield fork(getPostWatcher);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// Bootstrap sagas
export default [
  postData,
];
