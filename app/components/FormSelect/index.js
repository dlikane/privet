/*...*/

import React from 'react';
import { FormGroup, FormControl, Col, ControlLabel } from 'react-bootstrap';
import { Control } from 'react-redux-form/immutable';

class FormSelect extends React.PureComponent {

  options(lookups) {
    let options = [];
    for(var key in lookups) {
      options.push(
        <option key={key}>{lookups[key]}</option>
      );
    }
    return options;
  }

  render() {
    return (
      <FormGroup>
        <Col sm={2}><ControlLabel>{this.props.label}</ControlLabel></Col>
        <Col sm={10}>
          <Control model={"." + this.props.field} component={FormControl} componentClass="select" placeholder="type here">
            {this.options(this.props.lookups)}
          </Control>
        </Col>
      </FormGroup>
    );
  }
}
export default FormSelect;
