/*...*/
import React from 'react';
import {Form} from 'react-bootstrap';
import {assign} from 'lodash';

class FormHorizontal extends Form {
  render() {
    this.props = assign({}, this.props, {'horizontal': true});
    return super.render();
  }
}

export default FormHorizontal;
