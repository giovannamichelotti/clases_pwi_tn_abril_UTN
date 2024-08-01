import React, { useEffect, useState } from 'react'
import { ChatScreen } from './Screens/ChatScreen/ChatScreen'
import { ContactList } from './Screens/ContactList/ContactList'
import { ProfileContact } from './Components/ProfileContact/ProfileContact'
import { Routes, Route } from 'react-router-dom'
import MOOK_MENSAJES from './contactos.json'
    function App() {
        const [contactos, setContactos] = useState([])

        useEffect(()=>{
            setContactos(MOOK_MENSAJES)
        }, [])
        
    return (
        <Routes>
            <Route path='/' element={<ContactList contactos={contactos}/>}/>
            <Route path='/chat/:contactoID' element={<ChatScreen contactos={contactos}/>}/>
            <Route path='/infocontacto/:contactoID' element={<ProfileContact/>}/>
        </Routes>
    )
    }

    export default App
