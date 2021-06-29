import React from 'react';
import { ListGroup, Badge ,Container,Row,Col } from 'react-bootstrap';
import { If, Else } from '../if/if.js';

function TodoList(props) {
  const deleteItem = (id) => {
    props.deleteHandle(id);
  };
  const showForm = (id) => {
    props.updateHandle(id);
  };

  return (
    <ListGroup>
      {props.list.map((item, idx) => (
        <ListGroup.Item
          // className={`complete-${item.complete.toString()}`}
          key={item._id}
        >
          <Container >
            <Row>
            <Col  onClick={() => props.handleComplete(item._id)}>
            <Else condition={item.complete}>
            <Badge variant="success">Pending</Badge>
          </Else>
          <If condition={item.complete}>
            <Badge variant="danger">Complete</Badge>
          </If>
            </Col>

            <Col>
            {item.assignee}
            </Col>
            <Col>
            <button
            onClick={() => {
              showForm(item._id);
            }}
          >
            Update
          </button>
          <button
            onClick={() => {
              deleteItem(item._id);
            }}
          >
            X
          </button>
            </Col>
            </Row>
              <Row onClick={() => props.handleComplete(item._id)}>
              {item.text}

              </Row>
              <Row  onClick={() => props.handleComplete(item._id)}>
              <Col>
              Difficulty : {item.difficulty || 1}/5
              </Col>
              <Col>
              Due Date : {item.due}
              {console.log(item)}
              
              </Col>

              </Row>

          </Container>





            

        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default TodoList;
