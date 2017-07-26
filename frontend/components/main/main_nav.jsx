import React from 'react';
import {Link} from 'react-router-dom';

const authLinks = () => (
  <div className="authNav">
    <Link to="/login" className="button1">Log In</Link>
    <Link to="/signup" className="button2">Sign Up</Link>
  </div>
);

const greetLinks = (currentUser, logout, history) => (
  <div className="authNav">
    <h3 className="button1">Welcome, {currentUser.first_name}!</h3>
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
      <div className="searchNav">Search</div>
      <Link to='/' className="homeNav">
        <img className="logo" src='http://res.cloudinary.com/dvylj9hyw/image/upload/v1500570278/main/logo.png'/>
      </Link>
      {main()}
    </div>
  );
};

export default MainNav;
