/*...*/
import React from 'react';
import { connect } from 'react-redux';
import { Field, Form, Control } from 'react-redux-form/immutable';
import { createSelector, createStructuredSelector } from 'reselect';

class TestPage extends React.Component {
  handleSubmit(val) {
    // Do anything you want with the form value
    console.log("val: " + JSON.stringify(val));
  }

  render() {
    let { user } = this.props;
    console.log("render.user: " + JSON.stringify(user));
    console.log("user.name: " + user.get('name'));

    return (
      <Form model="user" onSubmit={(val) => this.handleSubmit(val)}>
        <h1>Hello, {user.get('name')}!</h1>
        <Field model=".name">
          <input type="text" />
        </Field>
        <Field model=".email">
          <input type="text" />
        </Field>
        <Control.button
          model="user"
          disabled={{ valid: false }}
        >Submit</Control.button>
      </Form>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  user: selectUser(),
});

export default connect(mapStateToProps)(TestPage);

// selectors
const selectUserState = () => (state) => state.get('user');

const selectUser = () => createSelector(
  selectUserState(),
  (user) => user
);
