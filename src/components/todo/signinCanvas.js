import React, { useState, useContext } from 'react';
import { Offcanvas, Form } from 'react-bootstrap';

import { Button } from 'react-bootstrap';
import { SettingsContext } from './context/setting';
import Login from './login';

function SigninOffCanvas({ name, ...props }) {
  const settingsContext = useContext(SettingsContext);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCheck = (e) => {
    console.log(e.target.checked);
    settingsContext.toggleCompleted(e.target.checked);
  };
  const changeSetting = (e) => {
    e.preventDefault();
    settingsContext.toggleCompleted(e.target.showCompleted.checked);
    settingsContext.changeMaxItems(e.target.pageSize.value);
    settingsContext.changeSort(e.target.sortBy.value);
    localStorage.setItem(
        'setting',
        JSON.stringify({
          showCompleted: e.target.showCompleted.checked,
          pageSize: e.target.pageSize.value,
          sortBy: e.target.sortBy.value,
        })
    )
    handleClose();
  
 
  }
  return (
    <>
      <div variant="dark" onClick={handleShow}>
        {name}
      </div>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Sign In</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <Login />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
export default SigninOffCanvas;
