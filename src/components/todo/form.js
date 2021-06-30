import React  from 'react';
import {Form} from 'react-bootstrap'
import useFrom from './hooks/useForm'


function TodoForm(props) {
  const [handleSubmit, handleInputChange] = useFrom(cb);

  function cb(data) {
      props.handleSubmit(data);
  }
  
  return (
    <div>
              <h3>Add Item</h3>
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
            <Form.Range defaultValue="1"  type="range" min="1" max="5" name="difficulty" onChange={handleInputChange}  required/>
          </Form.Label>

          </Form.Group>
          <Form.Group>
          <Form.Label>
            Assigned To
            <Form.Control type='text' name="assignee" placeholder="Assigned To" onChange={handleInputChange}  required/>
          </Form.Label>

          </Form.Group>


          


          <button>Add Item</button>
        </Form>     
    </div>
  )
}

export default TodoForm

// class TodoForm extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = { item: {} };
//   }
//   handleInputChange = e => {
//     this.setState({ item: {...this.state.item, [e.target.name]: e.target.value } });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     e.target.reset();
//     this.props.handleSubmit(this.state.item);
//     const item = {};
//     this.setState({item});
//   };

//   render() {
//     return (
//       <>
//         <h3>Add Item</h3>
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             <span>To Do Item</span>
//             <input
//               name="text"
//               placeholder="Add To Do List Item"
//               onChange={this.handleInputChange}
//             />
//           </label>
//           <label>
//             <span>Difficulty Rating</span>
//             <input defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={this.handleInputChange} />
//           </label>
//           <label>
//             <span>Assigned To</span>
//             <input type="text" name="assignee" placeholder="Assigned To" onChange={this.handleInputChange} />
//           </label>
//           <button>Add Item</button>
//         </form>
//       </>
//     );
//   }
// }

// export default TodoForm;
