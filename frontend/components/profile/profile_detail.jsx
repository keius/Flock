import React from 'react';
import {Link} from 'react-router-dom';

class ProfileDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state= {user: this.props.user};
  }

  componentDidMount() {
    this.props.fetchUser(this.props.currentUser.id);
  }

  renderGroups() {
    return(
      <ul>
        {Object.keys(this.props.currentUser.groups).map(id => (
          <li key={`group-${id}`}>
            <Link className="group-link" to={`/groups/${id}`}>{this.props.groups[id].title}</Link>
          </li>
        ))}
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
