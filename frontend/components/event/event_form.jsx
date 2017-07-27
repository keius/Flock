import React from 'react';

class EventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      location: "",
      image_url: ""
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
            <label>Group Banner:
              <input
                type="string"
                value={this.state.image_url}
                onChange={this.update('image_url')}
                className="group-input"
              />
            </label>
            <br/>
            <input className="group-form- button" type="submit" value="Submit"/>
          </div>
        </form>
      </div>
    );
  }
}

export default EventForm;
