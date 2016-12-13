/**
 * Combine all reducers in this file and export the combined reducers.
 * If we were to do this in store.js, reducers wouldn't be hot reloadable.
 */

import { combineReducers } from 'redux-immutable';
import { fromJS } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';
import languageProviderReducer from 'containers/LanguageProvider/reducer';
import { createForms } from 'react-redux-form/immutable';

/*
 * routeReducer
 *
 * The reducer merges route location changes into our immutable state.
 * The change is necessitated by moving to react-router-redux@4
 *
 */

// Initial routing state
const routeInitialState = fromJS({
  locationBeforeTransitions: null,
});

/**
 * Merge route into the global application state
 */
function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    /* istanbul ignore next */
    case LOCATION_CHANGE:
      return state.merge({
        locationBeforeTransitions: action.payload,
      });
    default:
      return state;
  }
}

const initialUser = fromJS({
  name: 'hey there',
  email: '',
  startTime: new Date(2016, 12, 25, 11, 0)
});

const initialPostEditor = fromJS({
  originId: '1601001553537687',
  originKind: 'facebook#event',
});

const initialPost = fromJS({
  en_description: 'test description'
});

/**
 * Creates the main reducer with the asynchronously loaded ones
 */
export default function createReducer(asyncReducers) {
  return combineReducers({
    ...createForms({
      user: initialUser,
      postEditor: initialPostEditor,
      post: initialPost,
    }),
    route: routeReducer,
    language: languageProviderReducer,
    ...asyncReducers,
  });
}
