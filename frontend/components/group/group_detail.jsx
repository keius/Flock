import React from 'react';
import {Link} from 'react-router-dom';

class GroupDetail extends React.Component {
  constructor (props) {
    super(props);
    this.handleJoin = this.handleJoin.bind(this);
    this.handleLeave = this.handleLeave.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchGroup(this.props.match.params.id);
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

  membershipButton() {
    if (this.props.users[this.props.currentUser.id]) {
      return <button className="button" onClick={this.handleLeave}>Leave Group</button>;
    } else {
      return <button className="button" onClick={this.handleJoin}>Join Group</button>;
    }
  }

  renderMembers() {
    if (this.props.users) {
      return(
        <ul className="member-list">
          {Object.keys(this.props.users).map(id => (
            <li className="member-profile" key={`member-${id}`}>
              <img className="member-img" src={`http://res.cloudinary.com/dvylj9hyw/image/upload/w_400,h_400,c_crop,g_face,r_max/w_200/q_25/v1500965555/user/${this.props.users[id].image_url}.png`}/>
              <h1 className="member-name">{this.props.users[id].first_name}</h1>
            </li>
          ))}
        </ul>
      );
    }
  }

  render() {
    if (this.props.group) {
      return (
        <div className="group-background">
          <div className="group-banner">
            <img src={`http://res.cloudinary.com/dvylj9hyw/image/upload/v1500965483/group/${this.props.group.image_url}`}/>
          </div>

          <div className="group-nav">
            {this.membershipButton()}
          </div>

          <div className="group-container">
            <div className="group-details">
              {this.props.group.title}
              <br/>
              Owner: {this.props.group.owner.first_name}
              <br/>
              Description: {this.props.group.description}
              <br/>
              Location: {this.props.group.location}
            </div>

            <div className="group-events">
              events
            </div>

            <div className="group-members">
              <h1>Members</h1>
              <br/>
              {this.renderMembers()}
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
