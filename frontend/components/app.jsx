import React from 'react';
import {Route} from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import MainNavContainer from './main/main_nav_container';
import Banner from './main/banner';
import SessionFormContainer from './session/session_form_container';

const App = () => (
  <div>
    <header>
      <MainNavContainer/>
    </header>
    <div>
      <AuthRoute path='/login' component={SessionFormContainer}/>
      <AuthRoute path='/signup' component={SessionFormContainer}/>
    </div>
  </div>
);

export default App;
