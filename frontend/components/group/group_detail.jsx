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
  }

  handleJoin(e) {
    e.preventDefault();
    this.props.joinGroup(this.props.group.id, this.props.currentUser.id);
    this.props.fetchGroup(this.props.match.params.id);
  }

  handleLeave(e) {
    e.preventDefault();
    this.props.leaveGroup(this.props.group.id);
    this.props.fetchGroup(this.props.match.params.id);
  }

  membershipButton() {
    if ((this.props.group.members).map(member => (member.id)).includes(this.props.currentUser.id)) {
      return <button className="button" onClick={this.handleLeave}>Leave Group</button>;
    } else {
      return <button className="button" onClick={this.handleJoin}>Join Group</button>;
    }
  }

  renderMembers() {
    return(
      <ul className="member-list">
        {(this.props.group.members).map(member => (
          <li key={`member-${member.id}`}>
            {member.full_name}
          </li>
        ))}
      </ul>
    );
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
            Owner: {this.props.group.owner_id}
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
