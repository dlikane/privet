import React from 'react';
import FormField from '../FormField';

export default class StaticField extends React.PureComponent {
  shouldComponentUpdate(nextProps) {
    return (this.props.label !== nextProps.label ||
            this.props.value !== nextProps.value)
  };

  render() {
    var {label, value} = this.props;
    return (
      <FormField inputClass="form-control-static" label={label}>{value}</FormField>
    );
  }
}
