import React from 'react'
import {connect} from 'react-redux'
import {Field, reduxForm, formValueSelector} from 'redux-form'
import {mapStateToProps} from './selectors';


// http://redux-form.com/6.2.1/examples/selectingFormValues/
class PostPlate extends React.PureComponent {

  render() {
    const {
      en_description
      , handleSubmit
      , pristine
      , submitting
    } = this.props;

    console.log("en_description: " + en_description);

    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Description</label>
          <div>
            <Field name="en_description" component="input" type="text" placeholder="First Name" />
          </div>
        </div>
        <div>
          <button type="submit" disabled={pristine || submitting}>Submit</button>
        </div>
        <div>
          {JSON.stringify(this.props.post)}
        </div>
      </form>
    )
  }
}

PostPlate = reduxForm({
  form: 'postPlateValues',
})(PostPlate);

PostPlate = connect(
  state => ({
    initialValues: state.editPost
  }),
  {
    // load: loadAccount
  }
)(PostPlate)

export default PostPlate;