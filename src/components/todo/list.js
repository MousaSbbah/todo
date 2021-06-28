import React  from 'react';
import {ListGroup} from 'react-bootstrap'

function TodoList(props) {

  const deleteItem = id =>{
    props.deleteHandle(id);
  }
  const updateHandle = id =>{
    props.updateHandle(id);
  }

  return (
    
    
    <ListGroup as='ul' >
        {props.list.map((item,idx) => (
          <ListGroup  as='li'
          className={`complete-${item.complete.toString()}`}
          key={item._id}
          >
          <button onClick={()=>{
            updateHandle(item._id)
          }}>delete</button> 
          <button onClick={()=>{
            deleteItem(item._id)
          }}>Delete</button>

            <div onClick={() => props.handleComplete(item._id)}>


              {item.text}
           
 
            {item._id}+{item.date} + {item.assignee} + {item.difficulty || 1}/5

            </div>
  
          </ListGroup>
        ))}
      </ListGroup>

  )
}

export default TodoList

