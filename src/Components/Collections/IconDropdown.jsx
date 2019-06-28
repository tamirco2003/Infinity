import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import IconButton from '../Basic/IconButton';

const Dropdown = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownContent = styled.div`
  display: ${props => (props.open ? 'block' : 'none')};
  position: absolute;
  background-color: #f1f1f1;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
`;

DropdownContent.propTypes = {
  open: PropTypes.bool.isRequired,
};

function useOutsideAlerter(ref, callback) {
  function handleClickOutside(event) {
    if (ref.current && !ref.current.contains(event.target)) {
      callback();
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });
}

function IconDropdown({ icon, children, ...props }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  useOutsideAlerter(dropdownRef, () => setOpen(false));

  return (
    <Dropdown ref={dropdownRef} {...props}>
      <IconButton icon={icon} onClick={() => setOpen(!open)} />
      <DropdownContent open={open}>
        {children}
      </DropdownContent>
    </Dropdown>
  );
}

IconDropdown.propTypes = {
  icon: PropTypes.shape({
    iconName: PropTypes.string,
    prefix: PropTypes.string,
    icon: PropTypes.array,
  }).isRequired,
  children: PropTypes.node.isRequired,
};

export default IconDropdown;
