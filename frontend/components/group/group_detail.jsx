import React from 'react';
import {Link} from 'react-router-dom';
import * as Util from '../../util/util';
import EventFormModal from '../modal/event_form_modal';

class GroupDetail extends React.Component {
  constructor (props) {
    super(props);
    this.handleJoin = this.handleJoin.bind(this);
    this.handleLeave = this.handleLeave.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchGroup(this.props.match.params.id);
    this.props.fetchGroupEvents(this.props.match.params.id);
    this.props.fetchGroupUsers(this.props.match.params.id);
  }

  handleJoin(e) {
    e.preventDefault();
    this.props.joinGroup(this.props.group.id);
  }

  handleLeave(e) {
    e.preventDefault();
    this.props.leaveGroup(this.props.group.id);
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteGroup(this.props.match.params.id)
    .then(() => this.props.history.push('/profile'));
  }

  membershipButton() {
    if (this.props.currentUser) {
      if (this.props.users[this.props.currentUser.id]) {
        return <button className="group-button" onClick={this.handleLeave}>
          <i className="fa fa-user-times" aria-hidden="true"></i>&nbsp;&nbsp;Leave Group
        </button>;
        } else {
          return <button className="group-button" onClick={this.handleJoin}>
            <i className="fa fa-user-plus" aria-hidden="true"></i>&nbsp;&nbsp;Join Group
          </button>;
      }
    } else {
      return null;
    }
  }

  createButton() {
    if (this.props.currentUser){
      if (this.props.users[this.props.currentUser.id]) {
        return (
          <EventFormModal/>
        );
      }
    } else {
      return null;
    }
  }

  deleteButton() {
    if (this.props.currentUser){
      if (this.props.group.owner.id === this.props.currentUser.id) {
        return (
          <button className="group-delete-button" onClick={this.handleDelete}>
            <i className="fa fa-trash" aria-hidden="true"></i>&nbsp;&nbsp;Delete Group
          </button>
        );
      }
    } else {
      return null;
    }
  }

  renderMembers() {
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

  renderEvents() {
    if (this.props.events) {
      return(
        <ul className="group-events-list">
          {Object.keys(this.props.events).map(id => (
            <li key={`event-${id}`}>
              <Link className="event-detail" to={`/events/${id}`}>
                <div className="event-name-date">{Util.processShortDate(this.props.events[id].datetime)}</div>
                <div className="event-name-text">{this.props.events[id].title}</div>
              </Link>
            </li>
          ))}
        </ul>
      );
    }
  }

  render() {
    if (this.props.group) {
      return (
        <div className="group">
          <div className="group-background">
            <div className="group-banner">
              {this.props.group.title}
            </div>

            <div className="group-nav">
              {this.membershipButton()}
              <br/>
              {this.createButton()}
              <br/>
              {this.deleteButton()}
            </div>

            <div className="group-container">
              <div className="group-details">
                <h1>Description:
                  <p>{this.props.group.description}</p>
                </h1>
                <br/>
                <h1>Location:
                  <p>{this.props.group.location}</p>
                </h1>
                <br/>
                <h1>Owner:
                  <Link className="owner-profile" to={`/users/${this.props.group.owner.id}`}>
                    <img className="member-img" src={`http://res.cloudinary.com/dvylj9hyw/image/upload/w_400,h_400,c_crop,g_face,r_max/w_200/q_25/v1500965555/user/${this.props.group.owner.image_url}.png`}/>
                    <h1 className="member-name">{this.props.group.owner.first_name}</h1>
                  </Link>
                </h1>
              </div>

              <div className="group-events">
                <h1>Events</h1>
                <br/>
                {this.renderEvents()}
              </div>

              <div className="group-members">
                <h1>Members</h1>
                <br/>
                {this.renderMembers()}
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

export default GroupDetail;
