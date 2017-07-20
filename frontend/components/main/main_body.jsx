import React from 'react';
import {Link} from 'react-router-dom';

const MainBody = ({currentUser, logout}) => {

  return (
    <div className="mainBanner">

      <div className="mainText">
        What do you love?
        <br/>
        Do more of it with Flock.
      </div>

      <Link className="button" to='/signup'>
        Sign Up
      </Link>

    </div>
  );
};

export default MainBody;
