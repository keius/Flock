import React from 'react';
import {Link} from 'react-router-dom';

class ProfileDetail extends React.Component {

  componentDidMount() {
    this.props.fetchUserGroups();
  }



  renderGroups() {

    return(
      <ul>
        {Object.keys(this.props.groups).map(id => (
          <li key={`group-${id}`}>
            {this.props.groups[id].title}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="profile-background">
        Hello, {this.props.currentUser.username}!
        <div className="group-list"></div>
          {this.renderGroups()}
        <Link to='/groups/create'>Create Group!</Link>
      </div>
    );
  }
}

export default ProfileDetail;
