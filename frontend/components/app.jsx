import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import MainNavContainer from './main/main_nav_container';
import MainBody from './main/main_body';
import MainFooter from './main/footer';
import ProfileContainer from './profile/profile_container';
import UserDetailContainer from './user/user_detail_container';
import SessionFormContainer from './session/session_form_container';
import GroupDetailContainer from './group/group_detail_container';
import EventDetailContainer from './event/event_detail_container';

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
        <ProtectedRoute exact path='/profile' component={ProfileContainer}/>
      </Switch>

      <Route exact path='/users/:id' component={UserDetailContainer}/>
      <Route exact path='/groups/:id' component={GroupDetailContainer}/>
      <Route exact path='/events/:id' component={EventDetailContainer}/>
    </div>
    <footer>
      <div className="footer">
        <MainFooter/>
      </div>
    </footer>
  </div>
);

export default App;
