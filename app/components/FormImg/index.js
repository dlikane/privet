/*...*/
import React from 'react';
import { FormGroup, FormControl, Col, ControlLabel } from 'react-bootstrap';
import { Control } from 'react-redux-form/immutable';
import Img from 'components/Img';

class FormImg extends React.PureComponent {
  render() {
    return (
      <FormGroup>
        <Col sm={2}><ControlLabel>{this.props.label}</ControlLabel></Col>
        <Col sm={10}>
          <Control model={"." + this.props.field}
                   component={FormControl}/>
        </Col>
      </FormGroup>
    )
  }
}
/*
alt = 'image'
mapProps={{
src: (props) => props.viewValue,
}}

*/
export default FormImg;