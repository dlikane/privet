/*...*/

import React from 'react';
import {connect} from 'react-redux';
import {Field, Form, Control} from 'react-redux-form/immutable';
import {createStructuredSelector} from 'reselect';
import {selectPostEditor} from './selectors';
import {loadPost} from '../PostPlate/actions';
import PostPlate from "containers/PostPlate";
import { Form as BootstrapForm, FormGroup, ControlLabel, FormControl, HelpBlock, Button } from 'react-bootstrap';

class PostEditor extends React.Component {
  handleSubmit(postEditor) {
    console.log("postEditor: " + JSON.stringify(postEditor));
    this.props.dispatch(loadPost());
  }

  render() {
    let {postEditor} = this.props;

    return (
      <div>
        <Form component={BootstrapForm} model="postEditor" onSubmit={(postEditor) => this.handleSubmit(postEditor)}>
          <FormGroup>
            <ControlLabel>originId:</ControlLabel>
            <Control component={FormControl} model=".originId"/>
          </FormGroup>
          <FormGroup>
            <ControlLabel>origin kind:</ControlLabel>
            <Control component={FormControl} model=".originKind"/>
          </FormGroup>
          <Control component={Button} type="submit"
            model="postEditor"
            disabled={{valid: false}}
          >Submit</Control>
        </Form>
        <PostPlate/>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  postEditor: selectPostEditor(),
});

export default connect(mapStateToProps)(PostEditor);
