import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledActionBar = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

function ActionBar({ title, children, ...props }) {
  return (
    <StyledActionBar {...props}>
      <h1 className="draugr" style={{ flexGrow: 1 }}>{title}</h1>
      {children}
    </StyledActionBar>
  );
}

ActionBar.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ActionBar;
