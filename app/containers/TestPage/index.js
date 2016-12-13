/*...*/
import React from 'react';
import { connect } from 'react-redux';
import { Form, Control } from 'react-redux-form/immutable';
import { createSelector, createStructuredSelector } from 'reselect';
import FormHorizontal from 'components/FormHorizontal';
import FormTextGroup from 'components/FormTextGroup';
import SubmitGroup from 'components/SubmitGroup';
import FormControlStatic from 'components/FormControlStatic';
import FormDatepicker from 'components/FormDatepicker';
import DatePicker from 'react-bootstrap-date-picker';
import TimePicker from 'react-bootstrap-time-picker';

import { FormGroup, FormControl, Col, ControlLabel } from 'react-bootstrap';

class TestPage extends React.Component {
  handleSubmit(val) {
    console.log("val: " + JSON.stringify(val));
  }

  render() {
    let { user } = this.props;
    console.log("render.user: " + JSON.stringify(user));
    console.log("user.name: " + user.get('name'));

    return (
      <div>
        <Form component={FormHorizontal} model="user" onSubmit={(val) => this.handleSubmit(val)}>
          <DatePicker />
          <TimePicker />
          <h1>Hello, {user.get('name')}!</h1>
          <FormTextGroup label="name" field="name"/>
          <FormTextGroup label="email" field="email"/>
          <FormGroup>
            <Col sm={2}><ControlLabel>Static text</ControlLabel></Col>
            <Col sm={10}>
              <Control model={".name"}
                       component={FormControlStatic}/>
            </Col>
          </FormGroup>
          <FormDatepicker label="startTime" field="startTime"/>
          <SubmitGroup model="user"/>
        </Form>
      </div>
    );
  }
}

// selectors
const selectUserState = () => (state) => state.get('user');

const selectUser = () => createSelector(
  selectUserState(),
  (user) => user
);

const mapStateToProps = createStructuredSelector({
  user: selectUser(),
});

export default connect(mapStateToProps)(TestPage);
