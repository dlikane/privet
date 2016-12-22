/*...*/
import React from 'react';
import { connect } from 'react-redux';
import { Form, Control } from 'react-redux-form/immutable';
import { createSelector, createStructuredSelector } from 'reselect';
import FormHorizontal from 'components/FormHorizontal';
import FormSubmitGroup from 'components/FormSubmitGroup';
import { FormGroup, FormControl, Col, ControlLabel } from 'react-bootstrap';
import { loadPost, parseUrl, clearPost } from 'services/onboard';
import { OriginKindEnum } from 'model/enums';
import { savePost } from 'api/clientapi/posts';

class BatchPage extends React.Component {
  handleSubmit(val) {
    if (!val.get('urls'))
      return;
    val.get('urls').match(/[^\r\n]+/g).forEach((url) => {
      let id = parseUrl(url);
      if (id) {
        console.log("id: " + id);
        loadPost(id, OriginKindEnum.FACEBOOK_EVENT, this.props.dispatch)
          .then((post) => {
            console.log("post: " + JSON.stringify(post));
            savePost(post);
            clearPost(this.props.dispatch);
          }
        );
      }
    });
  }

  render() {
    return (
      <div>
        <Form component={FormHorizontal} model="batch" onSubmit={(val) => this.handleSubmit(val)}>
          <FormGroup>
            <Col sm={2}><ControlLabel>Chuck it here</ControlLabel></Col>
            <Col sm={10}>
              <Control model={'.urls'}
                       component={FormControl}
                       componentClass="textarea" placeholder="textarea"
              />
            </Col>
          </FormGroup>
          <FormSubmitGroup model="batch"/>
        </Form>
      </div>
    );
  }
}

export default connect()(BatchPage);