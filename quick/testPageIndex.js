import React from 'react';
import { FormattedMessage } from 'react-intl';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

export default class TestPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props, context) {
    console.log('constructor');
    super(props, context);

    this.state = {
      value: ''
    };
  };

  getValidationState() {
    const length = this.state.value ? this.state.value.length : 0;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  };

  handleChange(e) {
    console.log('setting value');
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <form>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
        >
          <ControlLabel>Working example with validation</ControlLabel>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Enter text"
            onChange={this.handleChange.bind(this)}
          />
          <FormControl.Feedback />
          <HelpBlock>Validation is based on string length.</HelpBlock>
        </FormGroup>
      </form>
    );
  }
}
