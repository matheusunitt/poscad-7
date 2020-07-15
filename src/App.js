import React from 'react';

import NotFound from './components/NotFound';

import List from './containers/List';
import AddItem from './containers/AddItem';
import EditItem from './containers/EditItem';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import GlobalStyles from './styles/GlobalStyles';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={List} />
        <Route path="/novo" component={AddItem} />
        <Route path="/editar/:id" component={EditItem} />
        <Route path="*" component={NotFound} />
      </Switch >

      <GlobalStyles />
    </Router >
  );
}

export default App;
