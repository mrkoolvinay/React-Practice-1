import Footer from './Footer';
import Header from './Header';
import MainContent from './MainContent';
import { Container, Grid, Paper } from '@material-ui/core';
import { useState, useEffect } from 'react';
import AddItem from "./AddItem";
import SearchItem from './SearchItem';
import { makeStyles } from '@material-ui/core/styles';
import apiRequest from './apiRequest';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }
}));


function App() {

  const API_URL = "http://localhost:3500/items";

  const classes = useStyles();

  const [items, setItems] = useState([]);

  const [compItems, setCompItems] = useState([]);

  const [newItem, setNewItem] = useState('');

  const [searchItem, setSearchItem] = useState('');

  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error("Error while fetching items");
        const listItems = await response.json();
        setItems(listItems);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      }
    }
    fetchItems();
  }, []);

  const toggleCheck = (id) => {
    const newListState = items.map(item => item.id === id ? { ...item, checked: !item.checked } : item);
    setItems(newListState);
    setCompItems(items.filter(item => item.checked));

    const myItem = newListState.find(item => item.id === id);
    const reqUrl = `${API_URL}/${id}`;
    const updateOptions = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ checked: myItem.checked })
    }
    const errMsg = apiRequest(reqUrl, updateOptions);
    if (errMsg) setFetchError(errMsg);
  }

  const deleteItem = (id) => {
    const newListState = items.filter(item => item.id !== id);
    setItems(newListState);

    const reqUrl = `${API_URL}/${id}`;
    const delOptions = {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json"
      }
    }
    const errMsg = apiRequest(reqUrl, delOptions);
    if (errMsg) setFetchError(errMsg);
  }

  const addItem = async (item) => {
    const id = items.length > 0 ? items[items.length - 1].id + 1 : 1;
    const newItem = { id, checked: false, item };
    const newItemsList = [...items, newItem];
    setItems(newItemsList);

    const addOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newItem)
    }
    const errMsg = await apiRequest(API_URL, addOptions);
    if (errMsg) setFetchError(errMsg);
  }

  const submitItem = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem('');
  }

  return (
    <Container maxWidth="sm" className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}><Paper><Header /></Paper></Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper>
            <AddItem
              newItem={newItem}
              setNewItem={setNewItem}
              submitItem={submitItem}
            />
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper>
            <SearchItem
              searchItem={searchItem}
              setSearchItem={setSearchItem}
            />
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper>
            <MainContent
              items={items.filter(item => item.item.toLowerCase().includes(searchItem.toLowerCase()))}
              toggleCheck={toggleCheck}
              deleteItem={deleteItem}
              fetchError={fetchError}
            />
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Footer
              items={items.filter(item => item.item.toLowerCase().includes(searchItem.toLowerCase()))}
              compItems={compItems}
            />
          </Paper>
        </Grid>
      </Grid>

    </Container>
  );
}

export default App;
