'use strict';

import React from 'react'
import {Badge,Row,Col,Container,Nav,Navbar} from 'react-bootstrap'


const Header = () => {
    return (
        <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="/">Todo</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          </Nav>
          </Navbar>
    )
}

export default Header

