import React from 'react';
import {Link} from 'react-router-dom';
import MainCategory from './category_index';

const MainBody = ({}) => {
  window.scrollTo(0, 0);
  
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
        <MainCategory/>
      </div>

    </div>
  );
};

export default MainBody;
