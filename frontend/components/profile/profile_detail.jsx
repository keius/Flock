import React from 'react';
import {Link} from 'react-router-dom';
import GroupFormModal from '../modal/group_form_modal';

class ProfileDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUserGroups(this.props.currentUser.id);
  }

  renderGroups() {
    return(
      <ul>
        {this.props.groups.map(group => (
          <li className="group" key={`group-${group.id}`}>
            <Link to={`/groups/${group.id}`}>{group.title}</Link>
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="profile-background">

        <nav className="profile-nav">
          <GroupFormModal/>
        </nav>

        <section className="profile-info">
          <h1>{this.props.currentUser.first_name}</h1>
          <img src={this.props.currentUser.image_url}/>
        </section>

        <p className="profile-groups-header">Groups</p>

        <section className="profile-group-list">
          {this.renderGroups()}
        </section>
      </div>
    );
  }
}

export default ProfileDetail;
