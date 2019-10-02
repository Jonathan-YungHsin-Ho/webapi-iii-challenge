import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import './App.css';

import UsersList from './components/UsersList';
import UserDetails from './components/UserDetails';

function App() {
  return (
    <Router>
      <div className='App'>
        <h1>
          <NavLink to='/'>Quotes of the Rings</NavLink>
        </h1>
        <Route exact path='/'>
          <UsersList />
        </Route>
        <Route path='/users/:id'>
          <UserDetails />
        </Route>
      </div>
    </Router>
  );
}

export default App;
