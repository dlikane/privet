/*...*/
import React from 'react';
import {FormControl} from 'react-bootstrap';
import {assign} from 'lodash';

class FormControlStatic extends FormControl {
  render() {
    this.props = assign({}, this.props, {'readOnly': true});
    return super.render();
  }
}

export default FormControlStatic;
