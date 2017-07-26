import React from 'react';
import {Link} from 'react-router-dom';
import GroupFormModal from '../modal/group_form_modal';

class ProfileDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchUser(this.props.match.params.id);
    this.props.fetchUserGroups(this.props.match.params.id);
  }

  renderGroups() {
    return(
      <ul>
        {this.props.groups.map(group => (
          <li className="group" key={`group-${group.id}`}>
            <Link className="group-link" to={`/groups/${group.id}`}>
              <img className="group-img" src={`http://res.cloudinary.com/dvylj9hyw/image/upload/v1500965480/group/${group.image_url}`}/>
              {group.title}
            </Link>
          </li>
        ))}
      </ul>
    );
  }

  renderNav() {
    if (this.props.currentUser) {
      return (<GroupFormModal/>);
    } else {
      return null;
    }
  }

  render() {
    if (!this.props.user) {
      return null;
    }
    return (
      <div className="profile-background">

        <nav className="profile-nav">
          {this.renderNav()}
        </nav>

        <section className="profile-info">
          <div className="profile">
            <img className="profile-img" src={`http://res.cloudinary.com/dvylj9hyw/image/upload/v1500965555/user/${this.props.user.image_url}`}/>
            <br/>
            <h1 className="profile-name">{this.props.user.first_name}&nbsp;{this.props.user.last_name}</h1>
          </div>
          <ul className="profile-bio">
            <li className="profile-location">
              Location:
              <br/>
              {this.props.user.location}
            </li>
            <li className="profile-about">
              About:
              <br/>
              {this.props.user.about}
            </li>
          </ul>
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
