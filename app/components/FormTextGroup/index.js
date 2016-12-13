/*...*/
import React from 'react';
import { FormGroup, FormControl, Col, ControlLabel } from 'react-bootstrap';
import { Control } from 'react-redux-form/immutable';
import FormControlStatic from 'components/FormControlStatic';

class FormTextGroup extends React.PureComponent {
  render() {
    return (
      <FormGroup>
        <Col sm={2}><ControlLabel>{this.props.label}</ControlLabel></Col>
        <Col sm={10}>
          <Control model={"." + this.props.field}
                              component={this.props.static ? FormControlStatic : FormControl}/>
        </Col>
      </FormGroup>
    )
  }
}

export default FormTextGroup;