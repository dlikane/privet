/*
 *
 * LanguageProvider reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CHANGE_LOCALE,
} from './constants';
import {
  DEFAULT_LOCALE,
} from '../App/constants'; // eslint-disable-line

// import Globalize from 'globalize'
// import {globalizeLocalizer} from 'react-widgets/lib/localizers/globalize')

const initialState = fromJS({
  locale: DEFAULT_LOCALE,
});

function languageProviderReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_LOCALE:

      // Globalize.locale(action.locale)
      // globalizeLocalizer(Globalize);

      return state
        .set('locale', action.locale);
    default:
      return state;
  }
}

export default languageProviderReducer;

