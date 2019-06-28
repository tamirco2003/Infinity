import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import ListItem from '../Basic/ListItem';
import List from '../Basic/List';
import IconButton from '../Basic/IconButton';
import Checkbox from './Checkbox';

const IssueContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const IssueName = styled.a.attrs(() => ({
  className: 'jotun',
}))`
  flex-grow: 1;
  margin-left: 16px;
  text-decoration: ${props => (props.read ? 'line-through' : 'initial')};
  color: inherit;
`;

function Issue({
  name,
  id,
  read,
  moveUp,
  moveDown,
  removeIssue,
  setRead,
  ...props
}) {
  return (
    <ListItem {...props}>
      <IssueContainer>
        <List>
          <IconButton icon={faChevronUp} onClick={moveUp} />
          <Checkbox checked={read} onClick={setRead} />
          <IconButton icon={faChevronDown} onClick={moveDown} />
        </List>
        <IssueName href={`https://read.marvel.com/#/book/${id}`} target="_blank" read={read}>{name}</IssueName>
        <IssueContainer>
          <IconButton icon={faTrashAlt} onClick={removeIssue} />
        </IssueContainer>
      </IssueContainer>
    </ListItem>
  );
}

Issue.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  read: PropTypes.bool.isRequired,
  moveUp: PropTypes.func.isRequired,
  moveDown: PropTypes.func.isRequired,
  removeIssue: PropTypes.func.isRequired,
  setRead: PropTypes.func.isRequired,
};

export default Issue;
