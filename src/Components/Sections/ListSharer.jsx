import React from 'react';
import PropTypes from 'prop-types';
import ModalDialog from '../Collections/ModalDialog';
import LinkBox from '../Collections/LinkBox';
import ModalDialogActions from '../Basic/ModalDialogActions';
import Button from '../Basic/Button';

function ListSharer({
  open,
  handleClose,
  link,
  ...props
}) {
  return (
    <ModalDialog open={open} handleClose={handleClose} {...props}>
      <h3 className="jotun">Share List</h3>
      <LinkBox link={link} />
      <ModalDialogActions>
        <Button variant="primary" onClick={handleClose} value="Close" />
      </ModalDialogActions>
    </ModalDialog>
  );
}

ListSharer.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  link: PropTypes.string.isRequired,
};

export default ListSharer;
