import React from 'react'
import { Mensaje } from '../Mensaje/Mensaje'

/* mensaje.id */
export const ListaMensaje = ({mensajes}) => {
  return (
    <div>
      {
        mensajes.map(mensaje => <Mensaje/>)
      }
    </div>
  )   
}
  
/* Va a importar el mensaje y tiene que haber un mapeo
'Toda la lista de chat'
va a recibir una prop y por cada mensaje (elemento) va a invocar al componente mensaje
*/