/*...*/
import React from 'react';
import { FormGroup, FormControl, Col, ControlLabel } from 'react-bootstrap';
import { Control } from 'react-redux-form/immutable';
import DateTimePicker from 'react-widgets/lib/DateTimePicker';


class FormDatepicker extends React.PureComponent {
  render() {
    return (
      <FormGroup>
        <Col sm={2}><ControlLabel>{this.props.label}</ControlLabel></Col>
        <Col sm={10}>
          <Control model={"." + this.props.field} component={DateTimePicker}
             mapProps={{
               value: (props) => new Date(props.viewValue),
               onChange: (props) => props.onChange,
             }}
          />
        </Col>
      </FormGroup>
    )
  }
}

export default FormDatepicker;
