import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import List from '../Basic/List';
import ListItem from '../Basic/ListItem';
import IconButton from '../Basic/IconButton';
import ActionBar from '../ActionBar';

const ReadingListItem = styled(ListItem)`
  transition: 0.1s;
  :hover {
    cursor: pointer;
    background-color: #DDD;
  }
`;

function ReadingLists({
  lists,
  onListSelect,
  openListAdder,
  ...props
}) {
  return (
    <List {...props}>
      <ActionBar title="Reading Lists">
        <IconButton style={{ margin: '8px' }} icon={faPlus} onClick={openListAdder} />
      </ActionBar>
      {lists.map((list, index) => (
        <ReadingListItem key={index} onClick={() => onListSelect(index)}>
          <h1 className="jormungandr">{list.name}</h1>
          <p className="fenrir" style={{ overflow: 'hidden' }}>{list.description}</p>
        </ReadingListItem>
      ))}
    </List>
  );
}

ReadingLists.propTypes = {
  lists: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onListSelect: PropTypes.func.isRequired,
  openListAdder: PropTypes.func.isRequired,
};

export default ReadingLists;
