import React from 'react'
import { ListaMensaje, ChatHeaderInfo, MensajeForm} from '../Components/Chat'
import { MOOK_MENSAJES } from './'

export const ChatScreen = () => {
    return (
        <div>
            <ChatHeaderInfo />
            {/* Este componente hara el mapeo */}
            <ListaMensaje Mensajes = {MOOK_MENSAJES}/>
            <MensajeForm />
        </div>
    )
}

let nombre = 'pepe'