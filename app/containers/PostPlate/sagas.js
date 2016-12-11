/*...*/

import { takeLatest } from 'redux-saga';
import { take, call, put, select, fork, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { LOAD_POST } from './constants';
import { postLoaded, postLoadingError } from './actions';
import request from 'utils/request';
import { selectOriginId, selectOriginKind } from '../PostEditor/selectors';
import { buildUrl, buildPost } from '../../mapping/mapping';
import { getPostFromDbByOriginId } from '../../clientapi/posts';

export function* getPost() {
  const originId = yield select(selectOriginId());
  const originKind = yield select(selectOriginKind());

  try {
    // get post from DB
    let post = getPostFromDbByOriginId(originId);
    if (!post || !post.originId) {
      console.log('no luck, load from facebook');
      const requestUrl = buildUrl(originId, originKind);
      const event = yield call(request, requestUrl);
      post = buildPost(originKind, event);
    }
    yield put(postLoaded(post));
  } catch (err) {
    yield put(postLoadingError(err));
  }
}

export function* getPostWatcher() {
  yield fork(takeLatest, LOAD_POST, getPost);
}

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
