import React from 'react';
import {Link} from 'react-router-dom';
import Modal from 'react-modal';

const authLinks = () => (
  <div className="authNav">
    <Link to="/login" className="button">Log In</Link>
    <Link to="/signup" className="button">Sign Up</Link>
  </div>
);

const greetLinks = (currentUser, logout) => (
  <div className="authNav">
    <h2 className="button">Welcome, {currentUser.username}!</h2>
    <button className="button" onClick={logout}>Log Out</button>
  </div>
);

const MainNav = ({currentUser, logout}) => {
  const main = () => (
    currentUser ?
    greetLinks(currentUser, logout): authLinks()
  );
  return (
    <div className="mainNav">
      <div className="searchNav">Search</div>
      <Link to='/' className="homeNav">
        <img className="logo" src={window.images.logo}/>
      </Link>
      {main()}
    </div>
  );
};

export default MainNav;
