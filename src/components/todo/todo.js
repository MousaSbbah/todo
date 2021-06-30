import React ,{useState,useEffect} from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import {v4 as uuid} from 'uuid';
import {Badge,Row,Col,Container} from 'react-bootstrap'
// import './todo.scss';

const ToDo = () => {
  const [lists,setList] = useState([]);
  const addItem = (item) => {
    item._id = uuid();
    item.complete = false;
    setList([...lists, item]);
  };

  const toggleComplete = id => {

    let item = lists.filter(i => i._id === id)[0] || {};

    if (item._id) {
      item.complete = !item.complete;
      let list = lists.map(listItem => listItem._id === item._id ? item : listItem);
      setList(list);
    }

  };
  const removeItem = id =>{
    let newList = lists.filter(i => i._id !== id);

    setList(newList);
  }
  const updateItem = (id,data) =>{
    let newList = lists.filter(i => i._id !== id);

    setList(newList);
  }

  useEffect(()=>{
    let list = [
      { _id: 1, complete: false, text: 'Clean the Kitchen', difficulty: 3, assignee: 'Person A'},
      { _id: 2, complete: false, text: 'Do the Laundry', difficulty: 2, assignee: 'Person A'},
      { _id: 3, complete: false, text: 'Walk the Dog', difficulty: 4, assignee: 'Person B'},
      { _id: 4, complete: true, text: 'Do Homework', difficulty: 3, assignee: 'Person C'},
      { _id: 5, complete: false, text: 'Take a Nap', difficulty: 1, assignee: 'Person B'},
    ];

    setList(list); 
  },[])

  return (

    <Container>
      <Row>
        
      </Row>
      <Row >
       <header>
          <h2 >
          Items To Complete <Badge variate="secondary">{lists.filter(item => !item.complete).length}</Badge>
          </h2>
        </header>

      </Row>

        <Row >

          <Col>
            <TodoForm handleSubmit={addItem} />
          </Col>

          <Col>
            <TodoList
              list={lists}
              handleComplete={toggleComplete} 
              deleteHandle={removeItem}
              updateHandle={showForm}
            />
          </Col>
          <Col>        
        <Form display='block'  onSubmit={handleSubmit}>
          <Form.Group>
          <Form.Label>
            To Do Item
            <Form.Control
              name="text"
              placeholder="Add To Do List Item"
              onChange={handleInputChange}
              required/>
            </Form.Label>
          </Form.Group>
          <Form.Group>
          <Form.Label>
            Difficulty Rating
            <Form.Control defaultValue="1"  type="range" min="1" max="5" name="difficulty" onChange={handleInputChange}  required/>
          </Form.Label>

          </Form.Group>
          <Form.Group>
          <Form.Label>
            Assigned To
            <Form.Control type='text' name="assignee" placeholder="Assigned To" onChange={handleInputChange}  required/>
          </Form.Label>

          </Form.Group>
          <Form.Group>
          <Form.Label>
            <span>Due Date</span>
            <Form.Control type="date" name="due"  onChange={handleInputChange} required/>
          </Form.Label>

          </Form.Group>

          


          <button>Update Item</button>
        </Form>   
          </Col>
        </Row>
    </Container>
  )
}

export default ToDo
