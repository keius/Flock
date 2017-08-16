import React from 'react';
import {Link} from 'react-router-dom';

const MainFooter = () => {

  return (
    <div className="mainFooter">

      <div className="github">
        <a target="_blank" href="https://github.com/keius">
          <i className="fa fa-github" aria-hidden="true"></i>
        </a>
      </div>

      <div className="linkedin">
        <a target="_blank" href="https://www.linkedin.com/in/gregory-park/">
          <i className="fa fa-linkedin" aria-hidden="true"></i>
        </a>
      </div>

    </div>
  );
};

export default MainFooter;
