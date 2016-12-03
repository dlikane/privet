/*
 *
 * TestPage actions
 *
 */

import {
  CHANGE_ORIGIN_ID,
} from './constants';

export function chnageOriginId(originId) {
  return {
    type: CHANGE_ORIGIN_ID,
    originId,
  };
}
