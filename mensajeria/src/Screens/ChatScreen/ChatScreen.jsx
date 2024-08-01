import React, { useEffect, useState } from 'react'
import { ChatHeaderInfo, ListaMensaje, MensajeForm } from '../../Components/Chat'
import { useParams } from "react-router-dom";



export const ChatScreen = ({contactos}) => {
    const {contactoID} = useParams()

    const [contacto, setContacto] = useState ({})

    useEffect(() => {
        const item = contactos.find(contacto => contacto.id === parseInt(contactoID) )
        setContacto(item);
    }, []);
    
    return (
        <div>
            Hola {contactoID} {contacto && contacto.id} {contacto && contacto.nombre}
            <ChatHeaderInfo id={contactoID}/>
            {/* Este componente hara el mapeo */}
            {/* <ListaMensaje/> */}
            <MensajeForm />
        </div>
    )
}

/* 'Pantalla de chat' */