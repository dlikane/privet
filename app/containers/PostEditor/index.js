/*
 *
 * PostEditor
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { Field, Form, Control } from 'react-redux-form/immutable';
import { createStructuredSelector } from 'reselect';
import { selectPostEditor } from './selectors';
import { loadPost } from './actions';

class PostEditor extends React.Component {
  handleSubmit(postEditor) {
    // Do anything you want with the form value
    console.log("postEditor: " + JSON.stringify(postEditor));
    this.props.dispatch(loadPost());
  }

  render() {
    let { postEditor } = this.props;

    return (
      <Form model="postEditor" onSubmit={(postEditor) => this.handleSubmit(postEditor)}>
        originId
        <Field model=".originId">
          <input type="text" />
        </Field>
        originKind
        <Field model=".originKind">
          <input type="text" />
        </Field>
        <Control.button
          model="postEditor"
          disabled={{ valid: false }}
        >Submit</Control.button>
      </Form>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  postEditor: selectPostEditor(),
});

export default connect(mapStateToProps)(PostEditor);
