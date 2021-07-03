import React from 'react';
import { LoginContext } from './context/aurth';
import { Form ,Button } from 'react-bootstrap';


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


          <Form onSubmit={this.handleSubmit}>
            <Form.Control
              placeholder="UserName"
              name="username"
              type='text'
              onChange={this.handleChange}
            />
            <Form.Control
              type="email"
              placeholder="example@foo.com"
              name="email"
              onChange={this.handleChange}
            />
            <Form.Control
              type="password"
              placeholder="password"
              name="password"
              onChange={this.handleChange}
            />

            
            <Button type='submit'>Sign Up</Button>
          </Form>
        
      </>
    );
  }
}

export default SignUp;