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
    if (this.props.currentUser) {
      if (this.props.users[this.props.currentUser.id]) {
        return <button className="group-button" onClick={this.handleLeave}>Leave Group</button>;
        } else {
          return <button className="group-button" onClick={this.handleJoin}>Join Group</button>;
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
              <Link className="member-profile" to={`/profiles/${id}`}>
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
    if (this.props.group) {
      return (
        <div className="group-background">
          <div className="group-banner">
            {this.props.group.title}
          </div>

          <div className="group-nav">
            {this.membershipButton()}
          </div>

          <div className="group-container">
            <div className="group-details">
              <h1>Owner: {this.props.group.owner.first_name}</h1>
              <br/>
              <h1></h1>Description: {this.props.group.description}
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
