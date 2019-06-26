import styled from 'styled-components';
import PropTypes from 'prop-types';

const Textbox = styled.input.attrs(() => ({
  type: 'text',
}))`
  border: none;
  border-bottom: 1px solid;
  padding: 8px;
  margin: 8px 8px 16px 8px;
  width: ${props => props.width};
  font-size: 16px;
  font-weight: 400;
  font-family: 'Montserrat', sans-serif;
  background-color: inherit;
`;

Textbox.propTypes = {
  width: PropTypes.string,
};

Textbox.defaultProps = {
  width: '200px',
};

export default Textbox;
