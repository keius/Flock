import React from 'react';
import {Link} from 'react-router-dom';
import * as Util from '../../util/util';

class EventDetail extends React.Component {
  constructor (props) {
    super(props);
    this.handleJoin = this.handleJoin.bind(this);
    this.handleLeave = this.handleLeave.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
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

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteEvent(this.props.event.id)
    .then(() => this.props.history.push('/profile'));
  }

  rsvpButton() {
    if (this.props.currentUser) {
      if (this.props.users[this.props.currentUser.id]) {
        return <button className="event-button" onClick={this.handleLeave}>
          <i className="fa fa-user-times" aria-hidden="true"></i>&nbsp;&nbsp;Leave Event
        </button>;
        } else {
        return <button className="event-button" onClick={this.handleJoin}>
          <i className="fa fa-user-plus" aria-hidden="true"></i>&nbsp;&nbsp;Join Event
        </button>;
      }
    } else {
      return null;
    }
  }

  deleteButton() {
    if (this.props.currentUser){
      if (this.props.event.host.id === this.props.currentUser.id) {
        return (
          <button className="event-button" onClick={this.handleDelete}>
          <i className="fa fa-trash" aria-hidden="true"></i>&nbsp;&nbsp;Delete Event
        </button>
      );} else {
          return null;
        }
    }
  }

  renderRsvps() {
    if (this.props.users) {
      return(
        <ul className="member-list">
          {Object.keys(this.props.users).map(id => (
            <li key={`member-${id}`}>
              <Link className="member-profile" to={`/users/${id}`}>
                <img className="member-img" src={`http://res.cloudinary.com/dvylj9hyw/image/upload/w_400,h_400,c_crop,g_face,r_max/w_200/q_25/v1500965555/user/${this.props.users[id].image_url}.png`}/>
                <h1 className="member-name">{this.props.users[id].first_name}</h1>
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
              {this.deleteButton()}
            </div>

            <div className="event-container">
              <div className="event-details">
                <h1>Date/Time:
                  <p>{Util.processDate(this.props.event.datetime)}</p>
                </h1>
                <br/>
                <h1>Location:
                  <p>{this.props.event.location}</p>
                </h1>
                <br/>
                <h1>Group:
                  <Link to={`/groups/${this.props.event.group.id}`}>
                    <img className="group-img" src={`http://res.cloudinary.com/dvylj9hyw/image/upload/v1500965480/group/${this.props.event.group.image_url}`}/>
                    <p>{this.props.event.group.title}</p>
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
                <h1>RSVPs</h1>
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
