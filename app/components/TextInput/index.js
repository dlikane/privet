import React from 'react';

import FormField from '../FormField';

export default class TextInput extends React.PureComponent {
  render() {
    var {field, help, label, onChange, ...inputProps} = this.props;
    return (
      <FormField field={field} help={help} inputProps={inputProps} label={label}>
        <input
          {...inputProps}
          className="form-control"
          name={field.name}
          onBlur={field.onBlur}
          onChange={onChange && field.onChange}
        />
      </FormField>
    );
  }
}

TextInput.shouldComponentUpdate = FormField.shouldFormFieldUpdate;

TextInput.propTypes = {
  field: React.PropTypes.object.isRequired
};
