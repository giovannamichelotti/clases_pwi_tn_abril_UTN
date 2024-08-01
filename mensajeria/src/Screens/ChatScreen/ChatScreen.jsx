import React, { useEffect, useState } from 'react'
import { ChatHeaderInfo, ListaMensaje, MensajeForm } from '../../Components/Chat'
import { useParams } from "react-router-dom";
import MOOK_MENSAJES from '../../contactos.json'


export const ChatScreen = () => {
    const {contactoID} = useParams()
    const [contactos, setContactos] = useState([])
    const [contacto, setContacto] = useState ({})
    const [mensajes, setMensajes] = useState ([])

    useEffect(() => {
        setContactos(MOOK_MENSAJES)
    }, []);
    
    useEffect(() => {
        const item = contactos.find(contacto => contacto.id === parseInt(contactoID) )
        setContacto(item);
        if (item) {
            setMensajes(item.mensajes)
        }
    }, [contactos]);
    
    return (
        <div>
            <ChatHeaderInfo contacto={contacto}/>
            <ListaMensaje mensajes={mensajes}/>
            <MensajeForm />
        </div>
    )
}

/* 'Pantalla de chat' */