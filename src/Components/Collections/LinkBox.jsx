import React from 'react';
import PropTypes from 'prop-types';
import { faCopy } from '@fortawesome/free-regular-svg-icons';
import Textbox from '../Basic/Textbox';
import IconButton from '../Basic/IconButton';

function LinkBox({ link, ...props }) {
  return (
    <>
      <Textbox value={link} width="75%" readOnly {...props} />
      <IconButton icon={faCopy} onClick={() => navigator.clipboard.writeText(link)} />
    </>
  );
}

LinkBox.propTypes = {
  link: PropTypes.string.isRequired,
};

export default LinkBox;
