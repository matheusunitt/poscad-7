import React from 'react';

import Layout from './components/Layout';
import NotFound from './components/NotFound';

import List from './containers/List';
import AddItem from './containers/AddItem';
import EditItem from './containers/EditItem';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Layout>
              <List />
            </Layout>
          </Route>

          <Route path="/novo">
            <Layout>
              <AddItem />
            </Layout>
          </Route>

          <Route path="/editar/:id">
            <Layout>
              <EditItem />
            </Layout>
          </Route>

          <Route path="*">
            <Layout>
              <NotFound />
            </Layout>
          </Route>
        </Switch>
      </Router>

      <GlobalStyles />
    </>
  );
}

export default App;
