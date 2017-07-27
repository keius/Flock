import React from 'react';
import {Link} from 'react-router-dom';
import GroupFormModal from '../modal/group_form_modal';

const authLinks = () => (
  <div className="authNav">
    <Link to="/login" className="button1">Log In</Link>
    <Link to="/signup" className="button2">SIGN UP</Link>
  </div>
);

const greetLinks = (currentUser, logout, history) => (
  <div className="authNav">
    <Link to={'/profile'} className="button1">Welcome, {currentUser.first_name}!</Link>
    <button className="button2" onClick={() => logout().then(() => history.push('/'))}>Log Out</button>
  </div>
);

const MainNav = ({currentUser, logout, history}) => {
  const main = () => (
    currentUser ?
    greetLinks(currentUser, logout, history): authLinks()
  );
  return (
    <div className="mainNav">
      <div className="groupNav">{<GroupFormModal/>}</div>
      <Link to='/' className="homeNav">
        <img className="logo" src='http://res.cloudinary.com/dvylj9hyw/image/upload/v1500570278/main/logo.png'/>
      </Link>
      {main()}
    </div>
  );
};

export default MainNav;
