import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import MainNavContainer from './main/main_nav_container';
import MainBody from './main/main_body';
import SessionFormContainer from './session/session_form_container';

const App = () => (
  <div>
    <header>
      <MainNavContainer/>
    </header>
    <div>
      <Switch>
        <AuthRoute exact path='/login' component={SessionFormContainer}/>
        <AuthRoute exact path='/signup' component={SessionFormContainer}/>
        <AuthRoute exact path='/' component={MainBody}/>
      </Switch>
    </div>
  </div>
);

export default App;