import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Modal from '../Basic/Modal';

const Dialog = styled.div`
  background-color: #FFFFFF;
  margin: 64px auto;
  padding: 32px;
  width: 75%;
`;

function ModalDialog({
  open,
  handleClose,
  children,
  ...props
}) {
  return (
    <Modal open={open} {...props} onClick={e => e.target === e.currentTarget && handleClose()}>
      <Dialog>
        {children}
      </Dialog>
    </Modal>
  );
}

ModalDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default ModalDialog;
