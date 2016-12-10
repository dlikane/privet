import React from 'react';
import DateTimePicker from 'react-widgets/lib/DateTimePicker';

import FormField from '../FormField';

export default class DateInput extends React.PureComponent {
  render() {
    var {field, help, label, afterChange, ...inputProps} = this.props;
    var onChange = field.onChange;
    if (afterChange) {
      onChange = function(...args) {
        field.onChange(...args);
        afterChange(...args);
      }
    }
    return (
      <FormField field={field} help={help} inputProps={inputProps} label={label}>
      <DateTimePicker
        {...inputProps}
        format="dd/MM/yyyy"
        name={field.name}
        onChange={onChange}
        time={false}
        value={field.value}
      />
    </FormField>
    );
  }
};

DateInput.shouldComponentUpdate = FormField.shouldFormFieldUpdate;

DateInput.propTypes = {
  field: React.PropTypes.object.isRequired
};
