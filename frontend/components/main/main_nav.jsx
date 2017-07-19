import React from 'react';
import {Link} from 'react-router-dom';
import Modal from 'react-modal';

const authLinks = () => (
  <div className="col-md-4">
    <Link to="/login">Log In</Link>
    <Link to="/signup">Sign Up</Link>
  </div>
);

const greetLinks = (currentUser, logout) => (
  <div className="col-md-4">
    <h2>Welcome, {currentUser.username}!</h2>
    <button className="logout" onClick={logout}>Log Out</button>
  </div>
);

const MainNav = ({currentUser, logout}) => {
  const main = () => (
    currentUser ?
    greetLinks(currentUser, logout): authLinks()
  );
  return (
    <nav className="row">
      <div className="col-md-4">Search</div>
      <Link to='/' className="col-md-4">
        <img className="logo" src={window.images.logo}/>Flock
      </Link>
      {main()}
    </nav>
  );
};

export default MainNav;
