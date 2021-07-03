import React, { useContext } from 'react';
import { Container, Navbar,Button } from 'react-bootstrap';
import SettingOffCanvas from './settingCanvas';
import SigninOffCanvas from './signinCanvas';
import SignupOffCanvas from './signupCanvas';
import {LoginContext} from './context/aurth';
const If = props => {
  return props.condition ? props.children : null;
};
const Headers = () => {
  const authContext = useContext(LoginContext);

  return (
<Navbar bg='primary' variant='dark' >
  <Container>
  <Navbar.Brand style={{cursor:'pointer'}}><SettingOffCanvas  name='Setting'/></Navbar.Brand>
    <Navbar.Brand href="/">Home</Navbar.Brand>
    <If condition={!authContext.loggedIn}>
    <Navbar.Brand   className="justify-content-end" style={{cursor:'pointer'}}>
       <SigninOffCanvas  placement='end' name='SignIn'/>
    </Navbar.Brand>
    <Navbar.Brand  className="justify-content-end" style={{cursor:'pointer'}}>
       <SignupOffCanvas placement='end' name='SignUp'/>
       </Navbar.Brand>
    </If>
    <If condition={authContext.loggedIn}>
    <Navbar.Brand  className="justify-content-end" >
      <Button variant='danger' onClick={authContext.logout}>Logout</Button>
         </Navbar.Brand>
    </If>
  </Container>
</Navbar>
  );
};

export default Headers;
