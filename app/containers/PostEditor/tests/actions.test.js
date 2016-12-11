import expect from 'expect';
import {
  defaultAction,
} from '../../PostPlate/actions';
import {
  DEFAULT_ACTION,
} from '../../PostPlate/constants';

describe('PostEditor actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: DEFAULT_ACTION,
      };
      expect(defaultAction()).toEqual(expected);
    });
  });
});
