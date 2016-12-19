/*...*/

import React from 'react';
import {connect} from 'react-redux';
import {fromJS} from 'immutable';
import {Form} from 'react-redux-form/immutable';
import {createStructuredSelector} from 'reselect';
import {selectPostEditor} from './selectors';
import {OriginKindEnum} from '../../model/enums';

import FormHorizontal from 'components/FormHorizontal';
import FormTextGroup from 'components/FormTextGroup';
import FormSelect from 'components/FormSelect';
import FormSubmitGroup from 'components/FormSubmitGroup';
import PostPlate from "containers/PostPlate";

import { buildUrl, buildPost } from '../../mapping/mapping';
import { getPostFromDbByOriginId } from '../../clientapi/posts';
import request from 'utils/request';
import { actions } from 'react-redux-form';

class PostEditor extends React.Component {
  handleSubmit(editor) {
    const { dispatch } = this.props;
    const originId = editor.get("originId");
    const originKind = editor.get("originKind");

    dispatch(actions.change('post', fromJS({loading: 'true'})));
    // get post from DB
    getPostFromDbByOriginId(originId)
      .then( (post) => {
        if (!post || !post.originId) {
          // if not then get it from FB
          const requestUrl = buildUrl(originId, originKind);
          request(requestUrl).then((event) => {
            post = buildPost(originKind, event);
            dispatch(actions.change('post', post));
          });
        }
        else {
          dispatch(actions.change('post', post));
        }
      })
      .catch( (err) => {
        dispatch(actions.change('error', err.message));
      });
  }

  render() {
    let {editor} = this.props;

    return (
      <div>
        <Form component={FormHorizontal} model="editor" onSubmit={(postEditor) => this.handleSubmit(postEditor)}>
          <FormTextGroup label="origin ID" field="originId"/>
          <FormSelect label="origin kind" field="originKind" lookups={OriginKindEnum} />
          <FormSubmitGroup label='Load' model="editor" />
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
