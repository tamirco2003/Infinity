import React from 'react';
import PropTypes from 'prop-types';
import { faSquare, faCheckSquare } from '@fortawesome/free-regular-svg-icons';
import IconButton from './Basic/IconButton';

function Checkbox({ checked, ...props }) {
  return (
    <IconButton icon={!checked ? faSquare : faCheckSquare} {...props} />
  );
}

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
};

export default Checkbox;
