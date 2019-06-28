import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ModalDialog from '../Collections/ModalDialog';
import Textbox from '../Basic/Textbox';
import Form from '../Basic/Form';
import ModalDialogActions from '../Basic/ModalDialogActions';
import Button from '../Basic/Button';

function ListAdder({
  open,
  handleClose,
  addList,
  ...props
}) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  return (
    <ModalDialog open={open} handleClose={handleClose} {...props}>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          addList(name, description);
          setName('');
          setDescription('');
        }}
      >
        <h3 className="jotun">Add a New List</h3>
        <Textbox placeholder="Name" value={name} onChange={e => setName(e.target.value)} required />
        <Textbox placeholder="Description" width="auto" value={description} onChange={e => setDescription(e.target.value)} />
        <ModalDialogActions>
          <Button onClick={handleClose} value="Cancel" />
          <Button variant="primary" type="submit" value="Add" />
        </ModalDialogActions>
      </Form>
    </ModalDialog>
  );
}

ListAdder.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  addList: PropTypes.func.isRequired,
};

export default ListAdder;
