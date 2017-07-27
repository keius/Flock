import React from 'react';
import {Link} from 'react-router-dom';

class UserDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchUserGroups(this.props.match.params.id);
    this.props.fetchUserEvents(this.props.match.params.id);
  }

  renderGroups() {
    if (this.props.groups) {
      return(
        <ul className="profile-groups">
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
  }

  renderEvents() {
    if (this.props.events) {
      return(
        <ul className="profile-evenys">
          {this.props.events.map(event => (
            <li key={`event-${event.id}`}>
              <Link className="event-detail" to={`/events/${event.id}`}>
                <h1 className="event-name">{event.title}</h1>
              </Link>
            </li>
          ))}
        </ul>
      );
    }
  }

  render() {
    if (!this.props.user) {
      return null;
    }
    return (
      <div className="user-background">

        <section className="user-info">
          <div className="user">
            <img className="user-img" src={`http://res.cloudinary.com/dvylj9hyw/image/upload/v1500965555/user/${this.props.user.image_url}`}/>
            <br/>
            <h1 className="user-name">{this.props.user.first_name}&nbsp;{this.props.user.last_name}</h1>
          </div>
          <ul className="user-bio">
            <li className="user-location">
              <h1>Location:</h1>
              <p>{this.props.user.location}</p>
            </li>
            <li className="user-about">
              <h1>About:</h1>
              <p>{this.props.user.about}</p>
            </li>
          </ul>
        </section>

        <p className="user-groups-header">Groups</p>

        <section className="user-group-list">
          {this.renderGroups()}
        </section>
      </div>
    );
  }
}

export default UserDetail;
