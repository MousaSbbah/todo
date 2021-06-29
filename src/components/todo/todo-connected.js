import React, { useEffect, useState } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import { Badge, Row, Col, Container, Spinner, Form } from 'react-bootstrap';
import useAjax from './hooks/useAjax';
// import './todo.scss';

const ToDo = () => {
  const [FormID, setShowForm] = useState('');
  const [
    _addItem,
    removeItem,
    updateItem,
    _toggleComplete,
    _getTodoItems,
    loading,
    list,
  ] = useAjax();
  console.log(loading);
  function showForm(id) {
    console.log('hi', id);
    FormID ? setShowForm('') : setShowForm(id);
  }
  const update = (e) => {
    e.preventDefault();
    const data = {};
    if(e.target.text.value) data.text=e.target.text.value;
    if(e.target.difficulty.value) data.difficulty=e.target.difficulty.value;
    if(e.target.assignee.value) data.assignee=e.target.assignee.value;
    if(e.target.due.value) data.due=e.target.due.value;
    updateItem(FormID,data)
    setShowForm('');
    
  };
  useEffect(_getTodoItems,[])
  return (
    <Container>
      <Row>
        <header>
          <h2>
            Items To Complete{' '}
            <Badge variate="secondary">
              {list.filter((item) => !item.complete).length}
            </Badge>
          </h2>
        </header>
      </Row>

      <Row>
        <Col>
          <TodoForm handleSubmit={_addItem} />
        </Col>

        <Col>
          {loading ? (
            <Spinner animation="border" role="status">
              <span className="visually-hidden"></span>
            </Spinner>
          ) : (
            <TodoList
              list={list}
              handleComplete={_toggleComplete}
              deleteHandle={removeItem}
              updateHandle={showForm}
            />
          )}
        </Col>
        <Col style={FormID ? { display: 'block' } : { display: 'none' }}>
          <h1>Update</h1>
          <p>Fill new data</p>
          <Form display="block" onSubmit={update}>
            <Form.Group>
              <Form.Label>
                To Do Item
                <Form.Control
                  name="text"
                  placeholder="Add To Do List Item"
                />
              </Form.Label>
            </Form.Group>
            <Form.Group>
              <Form.Label>
                Difficulty Rating
                <Form.Control
                  type="range"
                  min="1"
                  max="5"
                  name="difficulty"
                />
              </Form.Label>
            </Form.Group>
            <Form.Group>
              <Form.Label>
                Assigned To
                <Form.Control
                  type="text"
                  name="assignee"
                  placeholder="Assigned To"
                />
              </Form.Label>
            </Form.Group>
            <Form.Group>
              <Form.Label>
                <span>Due Date</span>
                <Form.Control type="date" name="due" />
              </Form.Label>
            </Form.Group>

            <input type='submit' value='Update Item' />
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ToDo;
