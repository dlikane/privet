/*...*/
import React from 'react';
import { FormGroup, FormControl, Col, ControlLabel } from 'react-bootstrap';
import { Control } from 'react-redux-form/immutable';
import Img from './Img';

class FormImg extends React.PureComponent {
  render() {
    return (
      <FormGroup>
        <Col sm={2}><ControlLabel>{this.props.label}</ControlLabel></Col>
        <Col sm={5}>
          <Control model={"." + this.props.field}
                   component={FormControl}/>
        </Col>
        <Col sm={5}>
          <Control model={"." + this.props.field} component={Img} alt="Image"
             mapProps={{
               src: (props) => props.viewValue,
             }}
          />
        </Col>
      </FormGroup>
    )
  }
}
export default FormImg;