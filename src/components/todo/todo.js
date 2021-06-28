import React ,{useState,useEffect} from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import {v4 as uuid} from 'uuid';
import {Badge} from 'react-bootstrap'
import './todo.scss';

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
    <div>
       <header>
          <h2 >
          Items To Complete <Badge bg="secondary">{lists.filter(item => !item.complete).length}</Badge>
          </h2>
        </header>

        <section className="todo">

          <div>
            <TodoForm handleSubmit={addItem} />
          </div>

          <div>
            <TodoList
              list={lists}
              handleComplete={toggleComplete} 
              deleteHandle={removeItem}
              updateHandle={updateItem}
            />
          </div>
        </section>
    </div>
  )
}

export default ToDo

// class ToDo extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       list: [],
//     };
//   }

//   addItem = (item) => {
//     item._id = Math.random();
//     item.complete = false;
//     this.setState({ list: [...this.state.list, item]});
//   };

//   toggleComplete = id => {

//     let item = this.state.list.filter(i => i._id === id)[0] || {};

//     if (item._id) {
//       item.complete = !item.complete;
//       let list = this.state.list.map(listItem => listItem._id === item._id ? item : listItem);
//       this.setState({list});
//     }

//   };

//   componentDidMount() {
//     let list = [
//       { _id: 1, complete: false, text: 'Clean the Kitchen', difficulty: 3, assignee: 'Person A'},
//       { _id: 2, complete: false, text: 'Do the Laundry', difficulty: 2, assignee: 'Person A'},
//       { _id: 3, complete: false, text: 'Walk the Dog', difficulty: 4, assignee: 'Person B'},
//       { _id: 4, complete: true, text: 'Do Homework', difficulty: 3, assignee: 'Person C'},
//       { _id: 5, complete: false, text: 'Take a Nap', difficulty: 1, assignee: 'Person B'},
//     ];

//     this.setState({list});
//   }

//   render() {
//     return (
//       <>
//         <header>
//           <h2>
//           There are {this.state.list.filter(item => !item.complete).length} Items To Complete
//           </h2>
//         </header>

//         <section className="todo">

//           <div>
//             <TodoForm handleSubmit={this.addItem} />
//           </div>

//           <div>
//             <TodoList
//               list={this.state.list}
//               handleComplete={this.toggleComplete}
//             />
//           </div>
//         </section>
//       </>
//     );
//   }
// }

// export default ToDo;
