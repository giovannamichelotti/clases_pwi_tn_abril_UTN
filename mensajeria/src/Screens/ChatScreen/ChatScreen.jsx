import React, { useEffect } from 'react'
import { ChatHeaderInfo, ListaMensaje, MensajeForm } from '../../Components/Chat'
import { useParams } from "react-router-dom";



export const ChatScreen = ({contactos}) => {
    const {contactoID} = useParams()

    useEffect(() => {
        console.log('hola')
        const contacto = contactos.find(contacto => {
            console.log(contacto.id , parseInt(contactoID))
            return contacto.id === parseInt(contactoID)
            
        });
        console.log(contacto)
     /*    setMensajesIniciales(contacto.mensajes); */
    }, []);
    
    return (
        <div>
            Hola {contactoID} {contacto && contacto.id}
            <ChatHeaderInfo id={contactoID}/>
            {/* Este componente hara el mapeo */}
            {/* <ListaMensaje/> */}
            <MensajeForm />
        </div>
    )
}

/* 'Pantalla de chat' */