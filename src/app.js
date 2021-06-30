import React from 'react';
import ToDo from './components/todo/todo-connected.js';
import Header from './components/todo/header.js';
import SettingsContext  from './components/todo/context/setting';


const App = () => {
  return (

    
    <div>
      <SettingsContext>
      <Header />
       <ToDo />
      </SettingsContext>
    </div>
  )
}

export default App



