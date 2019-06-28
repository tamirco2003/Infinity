import './Typography.css';
import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import AppBar from './Components/Basic/AppBar';
import ReadingLists from './Components/Sections/ReadingLists';
import ReadingList from './Components/Sections/ReadingList';
import MainContent from './Components/Basic/MainContent';
import ListAdder from './Components/Sections/ListAdder';
import ListRemover from './Components/Sections/ListRemover';
import IssueAdder from './Components/Sections/IssueAdder';
import ListSharer from './Components/Sections/ListSharer';

const theme = {
  main: {
    light: '#689bc4',
    default: 'SteelBlue',
    dark: '#38688f',
  },
  error: {
    default: '#D02020',
    dark: '#B00000',
  },
};

function App() {
  const [lists, setLists] = useState([]);
  const [currentList, setCurrentList] = useState(0);
  const [inList, setInList] = useState(false);
  const [addingList, setAddingList] = useState(false);
  const [removingList, setRemovingList] = useState(false);
  const [addingIssues, setAddingIssues] = useState(false);
  const [sharingList, setSharingList] = useState(false);

  useEffect(() => {
    const storedLists = localStorage.getItem('lists');
    const searchParams = new URLSearchParams(window.location.search);
    let newList = searchParams.get('newlist') || null;

    if (newList) {
      newList = JSON.parse(atob(newList));
    }

    if (storedLists) {
      if (newList) {
        setLists([...JSON.parse(storedLists), newList]);
      } else {
        setLists(JSON.parse(storedLists));
      }
    } else if (newList) {
      setLists([newList]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('lists', JSON.stringify(lists));
  }, [lists]);

  return (
    <ThemeProvider theme={theme}>
      <>
        <AppBar className="draugr">
          Infinity
        </AppBar>
        <MainContent>
          {!inList
            ? (
              <ReadingLists
                lists={lists}
                onListSelect={(index) => { setCurrentList(index); setInList(true); }}
                openListAdder={() => setAddingList(true)}
              />
            )
            : (
              <ReadingList
                list={lists[currentList]}
                onClose={() => setInList(false)}
                addIssues={() => setAddingIssues(true)}
                removeList={() => setRemovingList(true)}
                moveIssueUp={(i) => {
                  if (i === 0) {
                    return;
                  }

                  const listsCopy = [...lists];
                  const { issues } = listsCopy[currentList];

                  [issues[i - 1], issues[i]] = [issues[i], issues[i - 1]];
                  setLists(listsCopy);
                }}
                moveIssueDown={(i) => {
                  if (i === lists[currentList].issues.length - 1) {
                    return;
                  }

                  const listsCopy = [...lists];
                  const { issues } = listsCopy[currentList];

                  [issues[i], issues[i + 1]] = [issues[i + 1], issues[i]];
                  setLists(listsCopy);
                }}
                removeIssue={(i) => {
                  const listsCopy = [...lists];
                  const { issues } = listsCopy[currentList];

                  issues.splice(i, 1);
                  setLists(listsCopy);
                }}
                setIssueAsRead={(i) => {
                  const listsCopy = [...lists];

                  listsCopy[currentList].issues[i].read = !listsCopy[currentList].issues[i].read;
                  setLists(listsCopy);
                }}
                shareList={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: 'Infinity',
                      url: `${window.location.href.split('?')[0]}?newlist=${btoa(JSON.stringify(lists[currentList]))}`,
                    });
                  } else {
                    setSharingList(true);
                  }
                }}
              />
            )
          }
        </MainContent>
        <ListAdder
          open={addingList}
          handleClose={() => setAddingList(false)}
          addList={(name, description) => {
            setLists([...lists, {
              name,
              description,
              issues: [],
            }]);
            setAddingList(false);
          }}
        />
        <ListRemover
          open={removingList}
          handleClose={() => setRemovingList(false)}
          removeList={() => {
            setRemovingList(false);
            setInList(false);

            const listsCopy = [...lists];

            listsCopy.splice(currentList, 1);
            setLists(listsCopy);
          }}
        />
        <IssueAdder
          open={addingIssues}
          handleClose={() => setAddingIssues(false)}
          addIssues={(issues) => {
            setAddingIssues(false);

            const listsCopy = [...lists];

            listsCopy[currentList].issues = listsCopy[currentList].issues.concat(issues);
            setLists(listsCopy);
          }}
        />
        <ListSharer
          open={sharingList}
          handleClose={() => setSharingList(false)}
          link={`${window.location.href.split('?')[0]}?newlist=${btoa(JSON.stringify(lists[currentList]))}`}
        />
      </>
    </ThemeProvider>
  );
}

export default App;
