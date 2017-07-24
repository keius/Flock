import React from 'react';
import {Link} from 'react-router-dom';
import Modal from 'react-modal';

const ProfileNav = () => {
  return (
    <div className="row">
      <Link className="button" to='/groups/create'>Create Group!</Link>
    </div>
  );
};

export default ProfileNav;
