import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledButton = styled.button`
  border: none;
  padding: 8px;
  font-size: 24px;
  background-color: inherit;
  border-radius: 50%;
  transition: 0.1s;
  :hover {
    cursor: pointer;
    background-color: #DDD;
  }
`;

function IconButton({ icon, ...props }) {
  return (
    <StyledButton {...props}>
      <FontAwesomeIcon icon={icon} fixedWidth />
    </StyledButton>
  );
}

IconButton.propTypes = {
  icon: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default IconButton;
