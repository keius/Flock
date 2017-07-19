import React from 'react';
import MainNavContainer from './main/main_nav_container';
import {Route} from 'react-router-dom';
import SessionFormContainer from './session/session_form_container';
import {AuthRoute, ProtectedRoute} from '../util/route_util';

const App = () => (
  <div>
    <header>
      <MainNavContainer/>
    </header>
    <AuthRoute path='/login' component={SessionFormContainer}/>
    <AuthRoute path='/signup' component={SessionFormContainer}/>
  </div>
);

export default App;
