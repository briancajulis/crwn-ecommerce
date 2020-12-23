import React, { Component } from 'react';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({ email: '', password: '' });
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email & password</span>

        <form onSubmit={this.handleSubmit}>
          <input
            name='email'
            value={this.state.email}
            required
            type='email'
            onChange={this.handleChange}
          />
          <label>Email</label>
          <input
            name='password'
            value={this.state.password}
            required
            type='password'
            onChange={this.handleChange}
          />
          <label>Password</label>

          <input type='submit' value='Submit' />
        </form>
      </div>
    );
  }
}

export default SignIn;
