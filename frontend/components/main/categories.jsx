import React from 'react';
import {Link} from 'react-router-dom';

class MainCategory extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchCategoryGroups(this.props.currentUser.id);
  }

  renderGroups() {
    if (this.props.groups) {
      return(
        <ul className="profile-groups">
          {this.props.groups.map(group => (
            <li className="group-item" key={`group-${group.id}`}>
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

  render() {
    return (
      <div className="profile-background">
        <div className="profile-container">
          <section className="profile-group-list">
            <div className="profile-group-header">
              <i className="fa fa-users" aria-hidden="true"></i>
              &nbsp;&nbsp;
              Groups
            </div>
            <br/>
            {this.renderGroups()}
          </section>

          <section className="profile-event-list">
            <p className="profile-event-header">
              <i className="fa fa-calendar" aria-hidden="true"></i>
              &nbsp;&nbsp;
              Events
            </p>
            {this.renderEvents()}
          </section>
        </div>
      </div>
    );
  }
}

export default MainCategory;
