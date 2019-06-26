import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const LoadingIcon = styled.div`
  border: ${props => props.width} solid transparent;
  border-top: ${props => props.width} solid ${props => props.theme.main.default};
  border-radius: 50%;
  margin: 16px;
  width: ${props => props.size};
  height: ${props => props.size};
  animation: ${spin} 2s linear infinite;
`;

LoadingIcon.propTypes = {
  width: PropTypes.string,
  size: PropTypes.string,
};

LoadingIcon.defaultProps = {
  width: '12px',
  size: '90px',
};

export default LoadingIcon;
