import React from 'react';
import {Link} from 'react-router-dom';

class EventDetail extends React.Component {
  constructor (props) {
    super(props);
    this.handleJoin = this.handleJoin.bind(this);
    this.handleLeave = this.handleLeave.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchEvent(this.props.match.params.id);
    this.props.fetchEventUsers(this.props.match.params.id);
  }

  handleJoin(e) {
    e.preventDefault();
    this.props.joinEvent(this.props.event.id);
  }

  handleLeave(e) {
    e.preventDefault();
    this.props.leaveEvent(this.props.event.id);
  }

  rsvpButton() {
    if (this.props.currentUser) {
      if (this.props.users[this.props.currentUser.id]) {
        return <button className="event-button" onClick={this.handleLeave}>Leave Event</button>;
        } else {
          return <button className="event-button" onClick={this.handleJoin}>Join Event</button>;
      }
    } else {
      return null;
    }
  }

  renderRsvps() {
    if (this.props.users) {
      return(
        <ul className="guest-list">
          {Object.keys(this.props.users).map(id => (
            <li key={`guest-${id}`}>
              <Link className="guest-profile" to={`/users/${id}`}>
                <img className="guest-img" src={`http://res.cloudinary.com/dvylj9hyw/image/upload/w_400,h_400,c_crop,g_face,r_max/w_200/q_25/v1500965555/user/${this.props.users[id].image_url}.png`}/>
                <h1 className="guest-name">{this.props.users[id].first_name}</h1>
              </Link>
            </li>
          ))}
        </ul>
      );
    }
  }

  render() {
    if (this.props.event) {
      return (
        <div className="event">
          <div className="event-background">
            <div className="event-banner">
              {this.props.event.title}
            </div>

            <div className="event-nav">
              {this.rsvpButton()}
            </div>

            <div className="event-container">
              <div className="event-details">
                <br/>
                <h1>Location:
                  <p>{this.props.event.location}</p>
                </h1>
                <h1>Group:
                  <Link to={`/groups/${this.props.event.group.id}`}>
                    <img className="group-img" src={`http://res.cloudinary.com/dvylj9hyw/image/upload/v1500965480/group/${this.props.event.group.image_url}`}/>
                    {this.props.event.group.title}
                  </Link>
                </h1>
                <br/>
                <h1>Host:
                  <Link className="host-profile" to={`/users/${this.props.event.host.id}`}>
                    <img className="guest-img" src={`http://res.cloudinary.com/dvylj9hyw/image/upload/w_400,h_400,c_crop,g_face,r_max/w_200/q_25/v1500965555/user/${this.props.event.host.image_url}.png`}/>
                    <h1 className="guest-name">{this.props.event.host.first_name}</h1>
                  </Link>
                </h1>
              </div>

              <div className="event-description">
                <h1>Description:
                  <p>{this.props.event.description}</p>
                </h1>
              </div>

              <div className="event-guests">
                <h1>Members</h1>
                <br/>
                {this.renderRsvps()}
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (<div></div>);
    }
  }
}

export default EventDetail;
