/*...*/
import React from 'react';
import { FormGroup, FormControl, Col, ControlLabel } from 'react-bootstrap';
import { Control } from 'react-redux-form/immutable';
import DatePicker from 'react-bootstrap-date-picker';
import TimePicker from 'react-bootstrap-time-picker';

class FormDatepicker extends React.PureComponent {
  render() {
    return (
    <FormGroup>
      <Col sm={2}><ControlLabel>{this.props.label}</ControlLabel></Col>
      <Col sm={5}>
        <Control model={"." + this.props.field} component={DatePicker}/>
      </Col>
      <Col sm={5}>
        <Control model={"." + this.props.field} component={TimePicker}/>
      </Col>
    </FormGroup>
    )
  }
}

export default FormDatepicker;

