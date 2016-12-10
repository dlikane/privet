/*...*/
import React, { PropTypes } from 'react';

import { Col, FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

export default function FieldGroup({id, label, help, ...props}) {
  return (
    <FormGroup controlId={id} >
      <Col sm={2}>
        <ControlLabel>{label}</ControlLabel>
      </Col>
      <Col sm={10}>
        <FormControl {...props} />
      </Col>
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}
