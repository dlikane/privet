/*...*/

import React from 'react';
import {connect} from 'react-redux';
import {Form} from 'react-redux-form/immutable';
import {createStructuredSelector} from 'reselect';
import {selectPost, selectError} from './selectors';
import FormHorizontal from 'components/FormHorizontal';
import FormTextGroup from 'components/FormTextGroup';
import FormSubmitGroup from 'components/FormSubmitGroup';
import FormDatepicker from 'components/FormDatepicker';
import FormImg from 'components/FormImg';
import { savePost } from 'api/clientapi/posts';
import { clearPost } from 'services/onboard';

class PostPlate extends React.Component {
  handleSubmit(post) {
    savePost(post);
    clearPost(this.props.dispatch);
  }

  onCancel() {
    console.log('onCancel...');
    clearPost(this.props.dispatch);
  }

  render() {
    let {post, error} = this.props;

    let content = (
      <h5>please select origin ID</h5>
    );
    if (post.get('loading')) {
      content = (
        <h5>Loading.....</h5>
      );
    }
    else if (post.get('status')) {
      content = (
        <Form component={FormHorizontal} model="post" onSubmit={(post) => this.handleSubmit(post)}>
          <FormTextGroup label="id" field="_id" static="true"/>
          <FormTextGroup label="leadId" field="leadId" static="true"/>
          <FormTextGroup label="status" field="status" static="true"/>
          <FormTextGroup label="originId" field="originId" static="true"/>
          <FormTextGroup label="originKind" field="originKind" static="true"/>
          <FormTextGroup label="en" field="en_description"/>
          <FormTextGroup label="ru" field="ru_description"/>
          <FormDatepicker label="startTime" field="startTime"/>
          <FormDatepicker label="postedTime" field="postedTime"/>
          <FormTextGroup label="duration" field="duration"/>
          <FormTextGroup label="location" field="location"/>
          <FormImg label="originImg" field="originImg"/>
          <FormSubmitGroup label={post.get("_id") ? 'Update' : 'Add'} model="post" onCancel={(dispatch) => this.onCancel(dispatch)} />
        </Form>
      );
    }
    return content;
  }
}

const mapStateToProps = createStructuredSelector({
  post: selectPost(),
  error: selectError(),
});

export default connect(mapStateToProps)(PostPlate);
