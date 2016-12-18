/*...*/

import React from 'react';
import {connect} from 'react-redux';
import {Form} from 'react-redux-form/immutable';
import {createStructuredSelector} from 'reselect';
import {selectCurrentPost} from './selectors';
import FormHorizontal from 'components/FormHorizontal';
import FormTextGroup from 'components/FormTextGroup';
import FormSubmitGroup from 'components/FormSubmitGroup';
import FormDatepicker from 'components/FormDatepicker';
import FormImg from 'components/FormImg';

class PostPlate extends React.Component {
  handleSubmit(post) {
    console.log("Add/Update post: " + JSON.stringify(post));
  }

  render() {
    let {currentPost} = this.props;
    console.log("render.plate props: " + JSON.stringify(this.props));
    console.log("render.plate currentPost: " + JSON.stringify(currentPost));

    let content = (
      <h5>please select origin ID</h5>
    );
    if (currentPost.get('loading')) {
      content = (
        <h5>Loading.....</h5>
      );
    }
    // else if (currentPost.get('error')) {
    //   content = (
    //     <h5>ERROR: {currentPost.get('error')}</h5>
    //   );
    // }
    else if (currentPost.get('post')) {
      // let post = currentPost.get('post');
      content = (
        <div>
          <Form component={FormHorizontal} model="currentPost.post" onSubmit={(post) => this.handleSubmit(post)}>
            <h1>Description: {currentPost.getIn(['post','en_description'])}</h1>
            <FormTextGroup label="en" field="en_description"/>
{/*
 <FormTextGroup label="id" field="id" static="true"/>
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
            <FormSubmitGroup label={post.id ? 'Update' : 'Save'} model="currentPost.post" />
*/}
            <FormSubmitGroup label='Save' model='currentPost' />
          </Form>
        </div>
      );
    }
    return content;
  }
}

const mapStateToProps = createStructuredSelector({
  currentPost: selectCurrentPost(),
});

export default connect(mapStateToProps)(PostPlate);
