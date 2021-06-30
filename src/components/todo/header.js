import React, { useContext } from 'react';
import { Container, Navbar } from 'react-bootstrap';
import SettingOffCanvas from './settingCanvas';
import SigninOffCanvas from './signinCanvas';
import LoginContext from './context/aurth';
import Login from './login';
import SignUp from './signup.js';

const Headers = () => {
  const authContext = useContext(LoginContext);

  return (
<Navbar bg='primary' variant='dark' >
  <Container>
  <Navbar.Brand><SettingOffCanvas  name='Setting'/></Navbar.Brand>
    <Navbar.Brand href="/">Home</Navbar.Brand>
    <Navbar.Brand  className="justify-content-end">
       <SigninOffCanvas placement='end' name='SignIn'/>
    </Navbar.Brand>
    <Navbar.Brand  className="justify-content-end">
       <SettingOffCanvas placement='end' name='SignUp'/>
       </Navbar.Brand>
  </Container>
</Navbar>
  );
};

export default Headers;
