import React from 'react';
import {Link} from 'react-router-dom';

class GroupDetail extends React.Component {
  constructor (props) {
    super(props);
    this.joinGroup = this.joinGroup.bind(this);
    this.leaveGroup = this.leaveGroup.bind(this);
  }

  componentDidMount() {
    this.props.fetchGroup(this.props.match.params.id);
    this.props.fetchGroupMembers(this.props.match.params.id);
  }

  joinGroup(e) {
    e.preventDefault();
    let membership = {user_id: this.props.currentUser.id, group_id: this.props.group.id};
    this.props.createMembership({membership});
    this.props.fetchGroup(this.props.match.params.id);
  }

  leaveGroup(e) {
    e.preventDefault();
    let membership = {user_id: this.props.currentUser.id, group_id: this.props.group.id};
    this.props.deleteMembership({membership});
    this.props.fetchGroup(this.props.match.params.id);
  }

  membershipButton() {
    this.props.fetchGroupMembers(this.props.match.params.id);
  }

  renderMembers() {
    return(
      <ul className="member-list">
        {Object.keys(this.props.members).map(id => (
          <li key={`user-${id}`}>
            {this.props.members[id].username}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    console.log(this.props.members);
    return (
      <div className="group-background">
        <div className="group-banner">
          {this.props.group.image_url}
        </div>

        <div className="group-details">
          {this.props.group.title}
          <br/>
          Owner: {this.props.group.owner_id}
          <br/>
          Description: {this.props.group.description}
          <br/>
          Location: {this.props.group.location}
        </div>

        <div className="group-members">
        </div>

        <button className="button" onClick={this.joinGroup}>Join Group</button>
        <br/>
        <button className="button" onClick={this.leaveGroup}>Leave Group</button>

      </div>
    );
  }
}

export default GroupDetail;
