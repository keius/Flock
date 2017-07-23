import React from 'react';
import {Link} from 'react-router-dom';

class ProfileDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.currentUser.id);
  }

  renderGroups() {
    return(
      <ul>
        {this.props.users.groups.forEach(group => (
          <li key={`group-${group.id}`}>
            <Link className="group-link" to={`/groups/${group.id}`}>{group.title}</Link>
          </li>
        ))
      }
      </ul>
    );
  }

  render() {
    return (
      <div className="profile-background">
        Hello, {this.props.currentUser.full_name}!
        <div className="group-list">
          {this.renderGroups()}
        </div>
        <Link to='/groups/create'>Create Group!</Link>
      </div>
    );
  }
}

export default ProfileDetail;
