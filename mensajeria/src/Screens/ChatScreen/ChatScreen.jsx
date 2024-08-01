import React, { useEffect, useState } from 'react'
import { ChatHeaderInfo, ListaMensaje, MensajeForm } from '../../Components/Chat'
import { useParams } from "react-router-dom";
import MOOK_MENSAJES from '../../contactos.json'


export const ChatScreen = () => {
    const {contactoID} = useParams()
    const [contactos, setContactos] = useState([])
    const [contacto, setContacto] = useState ({})
    const [mensajes, setMensajes] = useState ([])

    //Esto debería estar en mensajeform
    const [mensaje, setMensaje] = useState ('')
    const cambiaMensaje = (e) => {
        setMensaje(e.target.value)
    }

    const enviarMensaje = (e) => {
        e.preventDefault()
        const mensajeNuevo = {
            autor: "yo",
            texto: mensaje,
            estado: "",
            dia: "hoy",
            hora: "23:07",
            id: mensajes.length + 1
        }
        const losMensajesNuevos = [...mensajes, mensajeNuevo]
        localStorage.setItem(contacto.id, JSON.stringify(losMensajesNuevos))
        setMensajes(losMensajesNuevos)
        setMensaje ('')
    }

    useEffect(() => {
        setContactos(MOOK_MENSAJES)
    }, []);
    
    useEffect(() => {
        const item = contactos.find(contacto => contacto.id === parseInt(contactoID) )
        setContacto(item);
        if (item) {
            const losMensajes = JSON.parse(localStorage.getItem(item.id)) || item.mensajes
            setMensajes(losMensajes)
        }
    }, [contactos]);
    
    return (
        <div>
            <ChatHeaderInfo contacto={contacto}/>
            <ListaMensaje mensajes={mensajes}/>
            {/* <MensajeForm /> */}
            <form onSubmit={enviarMensaje}>
                <input type="text" value={mensaje} onChange={cambiaMensaje}/>
                <button type='submit'>Enviar</button>
            </form>
        </div>
    )
}
