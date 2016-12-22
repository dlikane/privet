/*...*/
import React from 'react';
import { FormGroup, Col, Button, ButtonGroup } from 'react-bootstrap';
import { Control } from 'react-redux-form/immutable';

class FormSubmitGroup extends React.PureComponent {
  render() {
    let cancelButton;
    if (this.props.onCancel) {
      cancelButton = (
        <Button onClick={this.props.onCancel}>
          Cancel
        </Button>
      );
    }

    return (
      <FormGroup>
        <Col smOffset={2} sm={8}>
          <ButtonGroup>
            <Control component={Button} type="submit"
                     model={this.props.model}
            >{this.props.label ? this.props.label : 'Submit'}
            </Control>
          {cancelButton}
          </ButtonGroup>
        </Col>
      </FormGroup>
    )
  }
}

export default FormSubmitGroup;