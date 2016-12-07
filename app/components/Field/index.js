/*...*/
import React, { PropTypes } from 'react';

function Field(props) {
  return (
    <div>
      <div>{props.name}</div>
      <div>{props.value}</div>
    </div>
  );
}

Field.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
};

export default Field;
