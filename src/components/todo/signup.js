import React from 'react';
import { LoginContext } from './context/aurth';

const If = props => {
  return props.condition ? props.children : null;
};

class SignUp extends React.Component {
  static contextType = LoginContext;

  constructor(props) {
    super(props);
    this.state = { username: '', password: '',email:'' };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.context.signup(this.state.username, this.state.password,this.state.email);
  };

  render() {
    return (
      <>


        <If condition={!this.context.loggedIn}>
          <form onSubmit={this.handleSubmit}>
            <input
              placeholder="UserName"
              name="username"
              onChange={this.handleChange}
            />
            <input
              type="email"
              placeholder="example@foo.com"
              name="email"
              onChange={this.handleChange}
            />
            <input
              type="password"
              placeholder="password"
              name="password"
              onChange={this.handleChange}
            />

            
            <button>Sign Up</button>
          </form>
        </If>
      </>
    );
  }
}

export default SignUp;