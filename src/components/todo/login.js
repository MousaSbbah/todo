import React,{useState,useContext} from 'react';
import { LoginContext } from './context/aurth';
import { Form ,Button } from 'react-bootstrap';

const If = props => {
  return props.condition ? props.children : null;
};


export const Login = (props) => {
    const authContext = useContext(LoginContext); 
    const [username,setName]=useState('')
    const [password,setPassword]=useState('')

  const handleChange = e => {
    if(e.target.name === 'username') setName( e.target.value);
    if(e.target.name === 'password') setPassword( e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    authContext.login(username, password);
  };

  return (
    <div>
       <If condition={authContext.loggedIn}>
          <button onClick={authContext.logout}>Log Out</button>
        </If>

        <If condition={!authContext.loggedIn}>
          <Form onSubmit={handleSubmit}>
            <Form.Control
              placeholder="UserName"
              name="username"
              type='text'
              onChange={handleChange}
            />
            <Form.Control
              placeholder="password"
              type='password'
              name="password"
              onChange={handleChange}
            />
            <Button type='submit'>Login</Button>
          </Form>
        </If>
    </div>
  )
}

export default Login;