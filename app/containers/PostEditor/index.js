/*...*/

import React from 'react';
import {connect} from 'react-redux';
import {Form} from 'react-redux-form/immutable';
import {createStructuredSelector} from 'reselect';
import {selectEditor} from './selectors';
import {selectPost} from '../PostPlate/selectors';
import {OriginKindEnum} from '../../model/enums';
import {fromJS} from 'immutable';

import FormHorizontal from 'components/FormHorizontal';
import FormTextGroup from 'components/FormTextGroup';
import FormSelect from 'components/FormSelect';
import FormSubmitGroup from 'components/FormSubmitGroup';
import PostPlate from "containers/PostPlate";

import { loadPost, parseUrl } from 'services/onboard';
import { actions } from 'react-redux-form';

class PostEditor extends React.Component {
  componentDidMount() {
    this.props.dispatch(actions.change('editor', fromJS({
      originId: '1601001553537687',
      originKind: 'facebook#event'
    })));
  }

  handleSubmit(editor) {
    console.log("editor: " + JSON.stringify(editor));
    loadPost(editor.get("originId"), editor.get("originKind"), this.props.dispatch);
  }

  render() {
    console.log('post: ' + JSON.stringify(this.props.post));

    let form = (
      <PostPlate/>
    )
    if (!this.props.post.get('originId')) {
      form = (
        <Form component={FormHorizontal} model="editor" onSubmit={(editor) => this.handleSubmit(editor)}>
          <FormTextGroup label="origin ID" field="originId" parser={parseUrl}/>
          <FormSelect label="origin kind" field="originKind" lookups={OriginKindEnum} />
          <FormSubmitGroup label='Load' model="editor" />
        </Form>
      );
    }

    return (
      <div>
        {form}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  editor: selectEditor(),
  post: selectPost(),
});

export default connect(mapStateToProps)(PostEditor);
