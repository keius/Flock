import React from 'react';

class GroupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      location: "",
      category: "",
      image_url: "corgi"
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const group = this.state;
    this.props.createGroup(group).then(this.props.closeModal);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    return (
      <div className="group-form-background">
        <form onSubmit={this.handleSubmit} className="group-form-container">
          <p>Create a Group!</p>
          <div className="group-form">
            <br/>
            <label>Title:
              <input
                type="text"
                value={this.state.title}
                onChange={this.update('title')}
                className="group-input"
              />
            </label>
            <br/>
            <label>Description:
              <input
                type="textarea"
                value={this.state.description}
                onChange={this.update('description')}
                className="group-input"
              />
            </label>
            <br/>
            <label>Location:
              <input
                type="string"
                value={this.state.location}
                onChange={this.update('location')}
                className="group-input"
              />
            </label>
            <br/>
            <label>Category:
              <select className="group-input" value={this.state.value} onChange={this.update('category')}>
                <option disabled selected value> -- select category -- </option>
                <option value="tech">Tech</option>
                <option value="adventure">Adventure</option>
                <option value="music">Music</option>
                <option value="family">Family</option>
                <option value="art">Art</option>
                <option value="business">Business</option>
                <option value="sports">Sports</option>
                <option value="beliefs">Beliefs</option>
                <option value="food">Food</option>
              </select>
            </label>
            <br/>
            <input className="group-form-button" type="submit" value="Submit"/>
          </div>
        </form>
      </div>
    );
  }
}

export default GroupForm;
