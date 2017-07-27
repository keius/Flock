import React from 'react';
import {Link} from 'react-router-dom';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchUserGroups(this.props.currentUser.id);
    this.props.fetchUserEvents(this.props.currentUser.id);
  }

  renderGroups() {
    if (this.props.groups) {
      return(
        <ul className="profile-groups">
          {this.props.groups.map(group => (
            <li className="group" key={`group-${group.id}`}>
              <Link className="group-link" to={`/groups/${group.id}`}>
                <img className="group-img" src={`http://res.cloudinary.com/dvylj9hyw/image/upload/v1500965480/group/${group.image_url}`}/>
                <p className="group-text">{group.title}</p>
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
        <ul className="profile-events">
          {this.props.events.map(event => {
            return (
              <li key={`event-${event.id}`}>
                <Link className="event-detail" to={`/events/${event.id}`}>
                  <h1 className="event-name">{event.title}</h1>
                  <h1 className="event-datetime">{event.datetime}</h1>
                </Link>
              </li>
            );
          })
        }
        </ul>
      );
    }
  }

  render() {
    if (!this.props.currentUser) {
      return null;
    }
    return (
      <div className="profile-background">
        <div className="profile-container">
          <section className="profile-group-list">
            <div className="profile-group-header">Groups</div>
            <br/>
            {this.renderGroups()}
          </section>

          <section className="profile-event-list">
            <p className="profile-event-header">Events</p>
            {this.renderEvents()}
          </section>
        </div>
      </div>
    );
  }
}

export default Profile;
