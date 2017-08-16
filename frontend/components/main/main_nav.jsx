import React from 'react';
import {Link} from 'react-router-dom';
import GroupFormModal from '../modal/group_form_modal';

const authLinks = () => (
  <div className="authNav">
    <Link to="/login" className="button1">login</Link>
    <Link to="/signup" className="button2">signup</Link>
  </div>
);

const greetLinks = (currentUser, logout, history) => (
  <div className="authNav">
    <Link to={'/profile'} className="button1">welcome, {currentUser.first_name}!</Link>
    <button className="button2" onClick={() => logout().then(() => history.push('/'))}>logout</button>
  </div>
);

const renderNav = (currentUser) => {
  if (currentUser) {
    return (
      <div className="groupLinks">
        <GroupFormModal/>
        <Link to={'/categories'} className="button1">explore groups</Link>
      </div>
    );
  } else {
    return null;
  }
};

const MainNav = ({currentUser, logout, history}) => {
  const main = () => (
    currentUser ?
    greetLinks(currentUser, logout, history): authLinks()
  );
  return (
    <nav>
      <div className="nav-background"></div>
      <div className="mainNav">
        <div className="groupNav">{renderNav(currentUser)}</div>
        <Link to='/' className="homeNav">
          <img className="logo" src='http://res.cloudinary.com/dvylj9hyw/image/upload/v1500570278/main/logo_1.png'/>
        </Link>
        {main()}
      </div>
    </nav>
  );
};

export default MainNav;
