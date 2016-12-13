/*...*/
import React from 'react';
import { FormGroup, Col, Button } from 'react-bootstrap';
import { Control } from 'react-redux-form/immutable';

class TextGroup extends React.PureComponent {
  render() {
    return (
      <FormGroup>
        <Col smOffset={2} sm={10}>
          <Control component={Button} type="submit"
                   model={this.props.model}
                   disabled={{ valid: false }}
          >{this.props.label ? this.props.label : 'Submit'}</Control>
        </Col>
      </FormGroup>
    )
  }
}

export default TextGroup;