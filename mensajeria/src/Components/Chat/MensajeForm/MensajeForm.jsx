import React, { useState } from 'react'

export const MensajeForm = ({mensajeEnviado}) => {
  const [mensaje, setMensaje] = useState ('')
  const cambiaMensaje = (e) => {
      setMensaje(e.target.value)
  }

  const enviarMensaje = (e) => {
      e.preventDefault()
      mensajeEnviado(mensaje)
      setMensaje ('')
  }

  return (
    <form onSubmit={enviarMensaje}>
      <input type="text" value={mensaje} onChange={cambiaMensaje}/>
      <button type='submit'>Enviar</button>
    </form>
  )
}

