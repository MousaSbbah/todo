import React, { useState } from 'react';
import { Offcanvas } from 'react-bootstrap';
import SignUp from './signup';

function SigninOffCanvas({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
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
            <SignUp />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
export default SigninOffCanvas;
