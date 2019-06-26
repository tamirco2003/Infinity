import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.input.attrs(() => ({
  type: 'button',
  className: 'draugr',
}))`
  margin: 8px;
  padding: 8px 16px;
  border-radius: 8px;
  transition: 0.1s;
  ${props => props.variant === 'outlined' && `
    color: ${props.theme.main.default};
    background-color: white;
    border: 1px solid;
    border-color: ${props.theme.main.default};
    :hover {
      background-color: #DDD;
    }
  `}
  ${props => props.variant === 'primary' && `
    color: white;
    background-color: ${props.theme.main.default};
    border: none;
    :hover {
      background-color: ${props.theme.main.dark};
    }
  `}
  ${props => props.variant === 'error' && `
    color: white;
    background-color: ${props.theme.error.default};
    border: none;
    :hover {
      background-color: ${props.theme.error.dark};
    }
  `}
  :hover {
    cursor: pointer;
  }
`;

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'outlined', 'error']),
};

Button.defaultProps = {
  variant: 'outlined',
};

export default Button;
