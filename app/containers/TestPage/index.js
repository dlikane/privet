/*...*/
import React from 'react';
import { connect } from 'react-redux';
import { Field, Form, Control } from 'react-redux-form/immutable';
import { createSelector, createStructuredSelector } from 'reselect';
import { FormGroup, ControlLabel, FormControl, HelpBlock, Button } from 'react-bootstrap';
import FormHorizontal from 'components/FormHorizontal';

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
          <h1>Hello, {user.get('name')}!</h1>
          <FormGroup>
            <ControlLabel>name</ControlLabel>
            <Control model=".name" component={FormControl}/>
            {/*<Control.text model=".name"/>*/}
          </FormGroup>
          <FormGroup>
            <ControlLabel>email</ControlLabel>
            <Control model=".email" component="FormControl"/>
          </FormGroup>
          <Control component={Button} type="submit"
            model="user"
            disabled={{ valid: false }}
          >Submit</Control>
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
