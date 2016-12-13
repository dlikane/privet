/*...*/

import React from 'react';
import {connect} from 'react-redux';
import {Form} from 'react-redux-form/immutable';
import {createStructuredSelector} from 'reselect';
import {selectPost} from './selectors';
import FormHorizontal from 'components/FormHorizontal';
import FormTextGroup from 'components/FormTextGroup';
import SubmitGroup from 'components/SubmitGroup';
import Img from 'components/Img';

class PostPlate extends React.Component {
  handleSubmit(post) {
    // Do anything you want with the form value
    console.log("Add/Update post: " + JSON.stringify(post));
  }

  render() {
    let {post} = this.props;
    // console.log("PostPlate.render post: " + JSON.stringify(post));
    console.log("PostPlate.render img: " + (post ? post.originImg : 'Undefined'));

    return (
      <div>
        <Form component={FormHorizontal} model="post.post" onSubmit={(post) => this.handleSubmit(post)}>
          <FormTextGroup label="id" field="id" static="true"/>
          <FormTextGroup label="leadId" field="leadId" static="true"/>
          <FormTextGroup label="status" field="status" static="true"/>
          <FormTextGroup label="originId" field="originId" static="true"/>
          <FormTextGroup label="originKind" field="originKind" static="true"/>
          <FormTextGroup label="description (en)" field="en_description"/>
          <FormTextGroup label="description (ru)" field="ru_description"/>
          <FormTextGroup label="originImg" field="originImg"/>
          <Img src={post.post ? post.post.originImg : 'undefined'} alt="reference image" />
          <SubmitGroup label={post.id ? 'Update' : 'Save'} model="user" />
        </Form>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  post: selectPost(),
});

export default connect(mapStateToProps)(PostPlate);
