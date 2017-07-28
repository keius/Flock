import React from 'react';
import {Link} from 'react-router-dom';

const MainFooter = () => {

  return (
    <div className="mainFooter">

      <div className="github">
        <a href="https://github.com/keius"/>
        <i className="fa fa-github" aria-hidden="true"></i>
      </div>

      <div className="linkedin">
        <a href="https://www.linkedin.com/in/gregory-park-b169ab83/"/>
        <i className="fa fa-linkedin" aria-hidden="true"></i>
      </div>

    </div>
  );
};

export default MainFooter;
