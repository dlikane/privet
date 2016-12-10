/**
 * PostItem
 *
 * Lists the name and the issue count of a repository
 */

import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import Wrapper from './Wrapper';
import FieldGroup from 'components/FieldGroup';
import {Col, Form, FormGroup, Image, Button} from 'react-bootstrap';
import {selectPost} from './selectors';

export class PostItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  onSubmitForm() {
    console.log('submitting: ' + JSON.stringify(this.props.post));
  }

  render() {
    const post = this.props.post;

    console.log('PostItem.reder: ' + JSON.stringify(post));
    let mainContent = 'empty';

    if (post) {
      mainContent = (
        <Form horizontal>
          <FieldGroup id='id1' label='ID' value={post.id}/>
          <FieldGroup id='leadId' label="Lead ID" value={post.leadId}/>
          <FieldGroup id='status' label="Status" value={post.status}/>
          <FieldGroup id='originKind' label="Origin Kind" value={post.originKind}/>
          <FieldGroup id='originId' label="Origin ID" value={post.originId}/>
          <FieldGroup id='originLocale' label="Origin Locale" value={post.originLocale}/>

          <Col smOffset={2} sm={10}>
            <Image src={post.originImg} alt="original image" responsive/>
          </Col>
          <Col sm={2}>
            <Button type="submit" onSubmit={this.onSubmitForm()}>Save</Button>
          </Col>
        </Form>
      )
    }
    return (
      <Wrapper>
        {mainContent}
      </Wrapper>
    );

    // description: [ {
    //   locale: String,
    //   text: String
    // }],
    //   start_time: Date,
    //   posted_time: Date,
    //   duration: String,
    //   location: String,
    //   parties: [ { type: String }],
    //   tags: [ { type: String }]
  }
}

PostItem.propTypes = {
  post: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
};

const mapStateToProps = createStructuredSelector({
  post: selectPost(),
});

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(PostItem);
