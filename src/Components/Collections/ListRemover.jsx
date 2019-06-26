import React from 'react';
import PropTypes from 'prop-types';
import ModalDialog from '../ModalDialog';
import ModalDialogActions from '../Basic/ModalDialogActions';
import Form from '../Basic/Form';
import Button from '../Basic/Button';

function ListRemover({
  open,
  handleClose,
  removeList,
  ...props
}) {
  return (
    <ModalDialog open={open} handleClose={handleClose} {...props}>
      <Form onSubmit={(e) => {
        e.preventDefault();
        removeList();
      }}
      >
        <h3 className="jotun">Are you sure you want to remove this list?</h3>
        <ModalDialogActions>
          <Button onClick={handleClose} value="Cancel" />
          <Button variant="error" type="submit" value="Remove" />
        </ModalDialogActions>
      </Form>
    </ModalDialog>
  );
}

ListRemover.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  removeList: PropTypes.func.isRequired,
};

export default ListRemover;
