/*
 *
 * PostEditor
 *
 */

import React from 'react';
import {connect} from 'react-redux';
import {Field, Form, Control} from 'react-redux-form/immutable';
import {createStructuredSelector} from 'reselect';
import {selectPost} from './selectors';
import { Form as BootstrapForm, FormGroup, ControlLabel, FormControl, HelpBlock, Button } from 'react-bootstrap';

class PostPlate extends React.Component {
  handleSubmit(post) {
    // Do anything you want with the form value
    console.log("Add/Update post: " + JSON.stringify(post));
  }

  render() {
    let {post} = this.props;
    console.log("PostPlate.render post: " + JSON.stringify(post));

    return (
      <div>
        <Form component={BootstrapForm} model="post.post" onSubmit={(post) => this.handleSubmit(post)}>
          <FormGroup>
            <ControlLabel>description</ControlLabel>
            <Control component={FormControl} model=".en_description"/>
          </FormGroup>
          <Control component={Button} type="submit"
            model="post"
          >{post.id ? 'Update' : 'Save'}</Control>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  post: selectPost(),
});

export default connect(mapStateToProps)(PostPlate);
