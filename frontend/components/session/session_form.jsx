import React from 'react';
import {Link} from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      image_url: "guest",
      first_name: "New User"
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoUser = this.demoUser.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push(`/profile`);
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm(user);
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <Link to='/signup' className="otherSession">Sign Up</Link>;
    } else {
      return <Link to='/login' className="otherSession">Log In</Link>;
    }
  }

  demoUser(e) {
    e.preventDefault();
    this.state = {username: "guest", password: "123456"};
    const user = this.state;
    this.props.demoLogin(user);
	}

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    window.scrollTo(0, 0);
    return (
      <div className="session-background">
        <form onSubmit={this.handleSubmit} className="session-form-container">
          Welcome to Flock!
          <br/>
          <p>Please {this.props.formType} or {this.navLink()}</p>
          <div className="session-form">
            <br/>
            <label>Username:
              <input
                type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="session-input"
              />
            </label>
            <br/>
            <label>Password:
              <input
                type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="session-input"
              />
            </label>
          </div>
          <div className="session-errors">{this.renderErrors()}</div>
          <input type="submit" className="session-button" value="Submit"/>
          <button className="demo-button" onClick={this.demoUser}>
            Use Demo Account
          </button>
        </form>
      </div>
    );
  }
}

export default (SessionForm);
