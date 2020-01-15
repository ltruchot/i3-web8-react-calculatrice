/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

const FormControl = ({ labelText, placeholderText }) => (
  <div className="form-group">
    <label>
      {labelText}
:
      {' '}
    </label>
    <input
      className="form-control"
      placeholder={placeholderText}
    />
  </div>
);

FormControl.propTypes = {
  labelText: PropTypes.string.isRequired,
  placeholderText: PropTypes.string,
};

FormControl.defaultProps = {
  placeholderText: 'Taper ici',
};

export default FormControl;
