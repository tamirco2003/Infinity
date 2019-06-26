import styled from 'styled-components';
import PropTypes from 'prop-types';

const Modal = styled.div`
  display: ${props => (props.open ? 'block' : 'none')};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.4);
  overflow: auto;
`;

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default Modal;
