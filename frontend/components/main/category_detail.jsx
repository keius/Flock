import React from 'react';
import {Link} from 'react-router-dom';

class CategoryDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    if (this.props.category) {
      this.props.fetchCategoryGroups(this.props.category);
    } else {
      this.props.fetchGroups();
    }
  }

  renderGroups() {
    if (this.props.groups) {
      return(
        <ul className="category-groups">
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
      <div className="category-background">
        <div className="category-container">
          <section className="category-group-list">
            <div className="category-header">
              <i className="fa fa-users" aria-hidden="true"></i>
              &nbsp;&nbsp;
              {this.props.category}
            </div>
            <br/>
            {this.renderGroups()}
          </section>
        </div>
      </div>
    );
  }
}

export default CategoryDetail;
