import React, { useState, useContext } from 'react';
import { Offcanvas, Form } from 'react-bootstrap';

import { Button } from 'react-bootstrap';
import { SettingsContext } from './context/setting';

function SettingOffCanvas({ name, ...props }) {
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
          <Offcanvas.Title>Setting</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form onSubmit={changeSetting}>
            <Form.Group>
              <Form.Label>
                Page Size (Max Item per page)
                <Form.Control
                  name="pageSize"
                  type="Number"
                  defaultValue={settingsContext.maxItems}
                ></Form.Control>
              </Form.Label>
            </Form.Group>
            <Form.Group>
              <Form.Label>
                Sort By
                <Form.Select name="sortBy" defaultValue={settingsContext.sort}>
                  <option value="difficulty">Difficulty</option>
                  <option value="assignee">Assignee</option>
                </Form.Select>
              </Form.Label>
            </Form.Group>
            <Form.Group>
              <Form.Label>
                Show Completed
                <Form.Check
                  name="showCompleted"
                  type="checkbox"
                  onChange={handleCheck}
                  checked={settingsContext.showCompleted}
                ></Form.Check>
              </Form.Label>
            </Form.Group>
            <Button type="submit">save</Button>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
export default SettingOffCanvas;
