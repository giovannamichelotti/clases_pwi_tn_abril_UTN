import React from 'react'
import { ChatScreen } from './Screens'
import { Routes, Route } from 'react-router-dom'




function App() {
  return (
    <Routes>
      <Route path '/' element={ChatScreen}/>
      <Route path '/contactos' element={<ContactList/>}/>
    </Routes>
  )
}

export default App
 /* No me llama la Route, la importé yo */