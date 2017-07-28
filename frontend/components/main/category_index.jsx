import React from 'react';
import {Link} from 'react-router-dom';

const MainCategory = () => {

  return (
    <div className="mainCategory">
      <ul>
        <Link to={'/categories/tech'}>Tech</Link>
        <Link to={'/categories/adventure'}>Adventure</Link>
        <Link to={'/categories/music'}>Music</Link>
        <Link to={'/categories/family'}>Family</Link>
        <Link to={'/categories/art'}>Art</Link>
        <Link to={'/categories/business'}>Business</Link>
        <Link to={'/categories/sports'}>Sports</Link>
        <Link to={'/categories/beliefs'}>Beliefs</Link>
        <Link to={'/categories/food'}>Food</Link>
      </ul>
    </div>
  );
};

export default MainCategory;
