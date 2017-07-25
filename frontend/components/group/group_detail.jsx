import React from 'react';
import {Link} from 'react-router-dom';

class GroupDetail extends React.Component {
  constructor (props) {
    super(props);
    this.handleJoin = this.handleJoin.bind(this);
    this.handleLeave = this.handleLeave.bind(this);
  }

  componentDidMount() {
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
            <li key={`member-${id}`}>
              {this.props.users[id].first_name}
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
            {this.props.group.image_url}
          </div>

          <div className="group-details">
            {this.props.group.title}
            <br/>
            Owner: {this.props.group.owner.first_name}
            <br/>
            Description: {this.props.group.description}
            <br/>
            Location: {this.props.group.location}
          </div>

          <div className="group-members">
            Members:
            {this.renderMembers()}
          </div>

          <div>
            {this.membershipButton()}
          </div>
        </div>
      );
    } else {
      return (<div></div>);
    }
  }
}

export default GroupDetail;
