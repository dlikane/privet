/*...*/
import React from 'react';
import {Form} from 'react-bootstrap';
import {fromJS} from 'immutable';
const stringify = require('../../utils/stringify');
import {assign, merge} from 'lodash';

class FormHorizontal extends Form {
  render() {
    console.log("BEFORE: this.props: " + Object.prototype.toString.call(this.props));
    console.log("BEFORE: this.props: " + stringify.stringify(this.props));
    merge(this.props, this.props, {'horizontal': true});
    console.log("AFTER: this.props: " + stringify.stringify(this.props));
    return super.render();
  }
}

export default FormHorizontal;
