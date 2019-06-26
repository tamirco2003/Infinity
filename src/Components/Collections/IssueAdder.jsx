import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import ModalDialog from '../ModalDialog';
import Form from '../Basic/Form';
import ModalDialogActions from '../Basic/ModalDialogActions';
import Button from '../Basic/Button';
import Textbox from '../Basic/Textbox';
import IconButton from '../Basic/IconButton';
import List from '../Basic/List';
import ListItem from '../Basic/ListItem';
import LoadingIcon from '../Basic/LoadingIcon';

const IssueListItem = styled(ListItem)`
  transition: 0.1s;
  :hover {
    cursor: pointer;
    background-color: #DDD;
  }
`;

function IssueAdder({
  open,
  handleClose,
  addIssues,
  ...props
}) {
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [issueNum, setIssueNum] = useState('');
  const [issues, setIssues] = useState([]);
  const [pendingIssues, setPendingIssues] = useState({});
  const [loading, setLoading] = useState(false);

  return (
    <ModalDialog open={open} handleClose={handleClose} {...props}>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          setPendingIssues({});
          setIssues([]);
          setLoading(true);

          const url = `https://gateway.marvel.com:443/v1/public/comics?apikey=${process.env.REACT_APP_APIKEY}&title=${title}${year !== '' ? `&startYear=${year}` : ''}${issueNum !== '' ? `&issueNumber=${issueNum}` : ''}&noVariants=true&hasDigitalIssue=true&orderBy=issueNumber`;
          fetch(url, { method: 'GET' })
            .then(res => res.json())
            .then(res => res.data.results)
            .then(res => res.map(issue => ({
              name: issue.title,
              id: issue.digitalId,
              read: false,
            })))
            .then((res) => {
              setLoading(false);
              setIssues(res);
            })
            .catch((err) => {
              setLoading(false);
              console.log(err);
            });
        }}
      >
        <h3 className="jotun">Add Issues</h3>
        <div>
          <Textbox placeholder="Title" width="auto" value={title} onChange={e => setTitle(e.target.value)} required />
          <Textbox placeholder="Year" width="auto" value={year} onChange={e => setYear(e.target.value)} />
          <Textbox placeholder="Issue #" width="auto" value={issueNum} onChange={e => setIssueNum(e.target.value)} />
          <IconButton icon={faSearch} type="submit" />
        </div>
      </Form>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          addIssues(Object.values(pendingIssues));
        }}
      >
        <List style={{ height: '300px', overflow: 'auto' }}>
          {loading && <LoadingIcon />}
          {issues.map(issue => (
            <IssueListItem
              style={{ padding: '8px 0px', backgroundColor: pendingIssues[issue.id] ? '#DDD' : 'initial' }}
              key={issue.id}
              onClick={() => {
                const pendingIssuesCopy = Object.assign({}, pendingIssues);

                if (pendingIssues[issue.id]) {
                  delete pendingIssuesCopy[issue.id];
                } else {
                  pendingIssuesCopy[issue.id] = issue;
                }

                setPendingIssues(pendingIssuesCopy);
              }}
            >
              <p className="alf" style={{ marginLeft: '16px' }}>{issue.name}</p>
            </IssueListItem>
          ))}
        </List>
        <ModalDialogActions>
          <Button onClick={handleClose} value="Cancel" />
          <Button variant="primary" type="submit" value="Add" />
        </ModalDialogActions>
      </Form>
    </ModalDialog>
  );
}

IssueAdder.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  addIssues: PropTypes.func.isRequired,
};

export default IssueAdder;
