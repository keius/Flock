import React from 'react';
import {Link, withRouter} from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoUser = this.demoUser.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
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
    this.props.processForm({user});
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <Link to='/signup'>Sign Up</Link>;
    } else {
      return <Link to='/login'>Log In</Link>;
    }
  }

  demoUser(e) {
    e.preventDefault();
    this.state = {username: "greg", password: "123456"};
    const user = this.state;
		this.props.login({user});
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
    return (
      <div className="session-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          Welcome to Flock!
          <br/>
          Please {this.props.formType} or {this.navLink()}
          {this.renderErrors()}
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
            <br/>
            <input
              type="submit"
              value="Meet some people!"
              className="session-button"
            />
            <br/>
            <button
              className="demo-login"
              onClick={this.demoUser}>Use Demo Account
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
