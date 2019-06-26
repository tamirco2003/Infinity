import styled from 'styled-components';
import PropTypes from 'prop-types';

const ListItem = styled.div`
  padding: 8px;
  border-bottom: 1px solid;
  width: 100%;
`;

ListItem.propTypes = {
  order: PropTypes.string,
};
ListItem.defaultProps = {
  order: 'initial',
};

export default ListItem;
