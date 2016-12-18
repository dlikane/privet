/*...*/
import React from 'react';
import { connect } from 'react-redux';
import { Form, Control } from 'react-redux-form/immutable';
import { createSelector, createStructuredSelector } from 'reselect';
import FormHorizontal from 'components/FormHorizontal';
import FormTextGroup from 'components/FormTextGroup';
import FormSubmitGroup from 'components/FormSubmitGroup';
import FormDatepicker from 'components/FormDatepicker';

class TestPage extends React.Component {
  handleSubmit(val) {
    console.log("val: " + JSON.stringify(val));
  }
  render() {
    let { user } = this.props;
    console.log("render.user props: " + JSON.stringify(this.props));
    console.log("render.user user: " + JSON.stringify(user));

    return (
      <div>
        <Form component={FormHorizontal} model="user.currentUser" onSubmit={(val) => this.handleSubmit(val)}>
          <h1>Hello, {user.getIn(['currentUser','name'])}!</h1>
          <FormTextGroup label="name" field="name"/>
          <FormTextGroup label="email" field="email"/>
          <FormTextGroup label="static" field="name" static="true"/>
          <FormDatepicker label="startTime" field="startTime"/>
          <FormSubmitGroup model="user"/>
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