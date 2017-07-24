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
    if (this.props.user) {
      return(
        <ul>
          {this.props.user.groups.map(group => (
            <li className="group" key={`group-${group.id}`}>
              <Link className="group-link" to={`/groups/${group.id}`}>{group.title}</Link>
            </li>
          ))}
        </ul>
      );
    }
  }

  render() {
    return (
      <div className="profile-background">
        <Link className="button" to='/groups/create'>Create Group!</Link>

        <div className="profile-bio">
          <h1>{this.props.currentUser.full_name}</h1>
          <img src={this.props.currentUser.image_url}/>
        </div>

        <div className="profile-group-list">
          Groups:
          {this.renderGroups()}
        </div>
      </div>
    );
  }
}

export default ProfileDetail;
