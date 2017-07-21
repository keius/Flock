import React from 'react';
import {Link} from 'react-router-dom';

class ProfileDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="profile-background">
        Hello, {this.props.currentUser.username}!
        <Link to='/groups/create'>Create Group!</Link>
      </div>
    );
  }
}

export default ProfileDetail;
