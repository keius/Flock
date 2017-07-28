import React from 'react';
import {Link} from 'react-router-dom';
import MainFooter from './footer';

const MainBody = ({currentUser, logout}) => {

  return (
    <div className="mainBanner">
      <div className="mainText">
        <p>What do you love?</p>
        <p>Do more of it with Flock.</p>
        <Link className="banner-button" to='/signup'>
          Sign Up
        </Link>
      </div>


      <div className="categories">
        CATEGORIES
      </div>

      <div className="footer">
        <MainFooter/>
      </div>

    </div>
  );
};

export default MainBody;
