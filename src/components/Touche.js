import React from 'react';
import PropTypes from 'prop-types';

const Touche = ({ valeur, callback }) => (
  <button type="button" onClick={() => callback(valeur)}>{valeur}</button>
);
Touche.propTypes = {
  valeur: PropTypes.string.isRequired,
  callback: PropTypes.func,
};
Touche.defaultProps = {
  callback: (a) => a,
};
export default Touche;
