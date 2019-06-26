import React from 'react';
import PropTypes from 'prop-types';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import List from '../Basic/List';
import IconButton from '../Basic/IconButton';
import ActionBar from '../ActionBar';
import Issue from '../Issue';

function ReadingList({
  list,
  onClose,
  addIssues,
  removeList,
  moveIssueUp,
  moveIssueDown,
  removeIssue,
  setIssueAsRead,
  ...props
}) {
  return (
    <List {...props}>
      <ActionBar title={list.name}>
        <IconButton style={{ margin: '8px' }} icon={faTrashAlt} onClick={removeList} />
        <IconButton style={{ margin: '8px' }} icon={faPlus} onClick={addIssues} />
        <IconButton style={{ margin: '8px' }} icon={faTimes} onClick={onClose} />
      </ActionBar>
      {list.issues.map((issue, index) => (
        <Issue
          name={issue.name}
          id={issue.id}
          read={issue.read}
          moveUp={() => moveIssueUp(index)}
          moveDown={() => moveIssueDown(index)}
          removeIssue={() => removeIssue(index)}
          setRead={() => setIssueAsRead(index)}
          key={issue.id}
        />
      ))}
    </List>
  );
}

ReadingList.propTypes = {
  list: PropTypes.shape({ name: PropTypes.string.isRequired }).isRequired,
  onClose: PropTypes.func.isRequired,
  addIssues: PropTypes.func.isRequired,
  removeList: PropTypes.func.isRequired,
  moveIssueUp: PropTypes.func.isRequired,
  moveIssueDown: PropTypes.func.isRequired,
  removeIssue: PropTypes.func.isRequired,
  setIssueAsRead: PropTypes.func.isRequired,
};

export default ReadingList;
