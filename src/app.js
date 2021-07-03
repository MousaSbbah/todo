import React from 'react';
import ToDo from './components/todo/todo-connected.js';
import Headers from './components/todo/header.js';
import SettingsContext  from './components/todo/context/setting';
import LoginContext from './components/todo/context/aurth';


const App = () => {
  return (

    
        <>
      <SettingsContext>
      <LoginContext>
      <Headers />
       <ToDo />
      </LoginContext>
      </SettingsContext>
       </>
  )
}

export default App



