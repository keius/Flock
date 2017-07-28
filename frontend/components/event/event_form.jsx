import React from 'react';

class EventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      group_id: `${this.props.id}`,
      title: "",
      datetime: "",
      description: "",
      location: "",
      image_url: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const event = this.state;
    this.props.createEvent(event).then(this.props.closeModal);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    return (
      <div className="event-form-background">
        <form onSubmit={this.handleSubmit} className="event-form-container">
          <p>Create a Group!</p>
          <div className="event-form">
            <br/>
            <label>Title:
              <input
                type="text"
                value={this.state.title}
                onChange={this.update('title')}
                className="event-input"
              />
            </label>
            <br/>
            <label>Date/Time:
              <input
                type="datetime-local"
                value={this.state.datetime}
                onChange={this.update('datetime')}
                className="event-input"
              />
            </label>
            <br/>
            <label>Description:
              <input
                type="textarea"
                value={this.state.description}
                onChange={this.update('description')}
                className="event-input"
              />
            </label>
            <br/>
            <label>Location:
              <input
                type="string"
                value={this.state.location}
                onChange={this.update('location')}
                className="event-input"
              />
            </label>
            <br/>
            <input className="event-button" type="submit" value="Submit"/>
          </div>
        </form>
      </div>
    );
  }
}

export default EventForm;
