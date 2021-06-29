
import {useEffect,useState} from 'react'
const todoAPI = 'https://api-js401.herokuapp.com/api/v1/todo';
const useAjax = ( cb) => {
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true);

    const _addItem = (item) => {
        setLoading(true);
        fetch(todoAPI, {
          method: 'post',
          mode: 'cors',
          cache: 'no-cache',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(item)
        })
          .then(response => response.json())
          .then(savedItem => {
            setList([...list, savedItem])
          })
          .catch(console.error);
          setLoading(false);

      };
    const removeItem = (id) => {
        setLoading(true);
        fetch(`${todoAPI}/${id}`, {
          method: 'delete',
          mode: 'cors',
          cache: 'no-cache',
          headers: { 'Content-Type': 'application/json' },
        })
          .then(response => response.json())
          .then(() => {
            setList(list.filter(i => i._id !== id))
          })
          .catch(console.error);
        setLoading(false);


      };
    const updateItem = (id,data) => {
        
        console.log(data)
        console.log(id)
        fetch(`${todoAPI}/${id}`, {
          method: 'put',
          mode: 'cors',
          cache: 'no-cache',
          headers: { 'Content-Type': 'application/json' },
          body:JSON.stringify(data)
        })
          .then(response => response.json())
          .then(savedItem => {
            setList(list.map(listItem => listItem._id === id ? savedItem : listItem));
          })
          .catch(console.error);

      };


    const _toggleComplete = id => {

        let item = list.filter(i => i._id === id)[0] || {};
    
        if (item._id) {
    
          item.complete = !item.complete;
    
          let url = `${todoAPI}/${id}`;
    
          fetch(url, {
            method: 'put',
            mode: 'cors',
            cache: 'no-cache',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(item)
          })
            .then(response => response.json())
            .then(savedItem => {
              setList(list.map(listItem => listItem._id === item._id ? savedItem : listItem));
            })
            .catch(console.error);
        }

      };

      const _getTodoItems = () => {
        fetch(todoAPI, {
          method: 'get',
          mode: 'cors',
        })
          .then(data => data.json())
          .then(data => setList(data.results))
          .then(setLoading(false))
          .catch(console.error);
        
        

      };
    
    useEffect(_getTodoItems, []); // execute once only

    return [_addItem, removeItem, updateItem,_toggleComplete,_getTodoItems,loading,list ];
};


// fetch(todoAPI, {
//     method: 'post',
//     mode: 'cors',
//     cache: 'no-cache',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(item)
//   })
//     .then(response => response.json())
//     .then(savedItem => {
//       setList([...list, savedItem])
//     })
//     .catch(console.error);
// };
// const removeItem = (id) => {
//   fetch(`${todoAPI}/${id}`, {
//     method: 'delete',
//     mode: 'cors',
//     cache: 'no-cache',
//     headers: { 'Content-Type': 'application/json' },
//   })
//     .then(response => response.json())
//     .then(savedItem => {
//       setList(list.filter(i => i._id !== id))
//     })
//     .catch(console.error);
// };
// const updateItem = (id,data) => {
//   fetch(`${todoAPI}/${id}`, {
//     method: 'delete',
//     mode: 'cors',
//     cache: 'no-cache',
//     headers: { 'Content-Type': 'application/json' },
//   })
//     .then(response => response.json())
//     .then(savedItem => {
//       setList(list.filter(i => i._id !== id))
//     })
//     .catch(console.error);
// };

// const _toggleComplete = id => {

//   let item = list.filter(i => i._id === id)[0] || {};

//   if (item._id) {

//     item.complete = !item.complete;

//     let url = `${todoAPI}/${id}`;

//     fetch(url, {
//       method: 'put',
//       mode: 'cors',
//       cache: 'no-cache',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(item)
//     })
//       .then(response => response.json())
//       .then(savedItem => {
//         setList(list.map(listItem => listItem._id === item._id ? savedItem : listItem));
//       })
//       .catch(console.error);
//   }
// };
export default useAjax

