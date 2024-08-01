import React from 'react'
import './ListaMensaje.css'

export const ListaMensaje = ({mensajes}) => {
  return (
    <div className='lista-mensaje'>
      {mensajes.map(mensaje => (
        <span key={mensaje.id} className={'mensaje ' + (mensaje.autor === 'yo' ? 'mio' : 'otro')}>{mensaje.texto}</span>
      ))}
    </div>
  )   
}
