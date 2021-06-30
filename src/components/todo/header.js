
import React from 'react'
import {Nav,Navbar} from 'react-bootstrap'
import SettingOffCanvas from './settingCanvas'


const Header = () => {
    return (
        <Navbar style={{'font-size':'30px' , 'weight':'bold',padding:'20px','margin-bottom':'30px',cursor:'pointer'}} bg='primary' >
        <Nav.Link to='/' style={{'text-decoration':'none','margin-right': '30px','color':'black'}} href="/">
           <div>Todo</div>
            </Nav.Link>

          <Nav.Item >
          <SettingOffCanvas name="Setting"/>
          </Nav.Item>
          </Navbar>
    )
}

export default Header

