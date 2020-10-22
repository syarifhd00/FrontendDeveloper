import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch, NavLink, HashRouter } from 'react-router-dom';
import Data from './Components/Data';
import Login from './Components/Login';
import ChecklistGetAll from './Components/ChecklistGetAll';

const createRoutes = () => (
    <Router>
      <Route exact path="/">
      	<Data path="/"/>  
      </Route>
      <Route exact path="/login">
      	<Login path="/login"/>  
      </Route>
      <Route exact path="/checklistgetall">
      	<ChecklistGetAll path="/checklistgetall"/>  
      </Route>
    </Router>
);

export default createRoutes;