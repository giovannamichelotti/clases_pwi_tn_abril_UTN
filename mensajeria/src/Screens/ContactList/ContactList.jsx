import React from 'react'
import { Link } from 'react-router-dom'

export const ContactList = ({contactos}) => {
  return (
    <>
    <ul>
        {contactos.map(contacto=> (
          <li key={contacto.id}><Link to={`chat/` + contacto.id}>{contacto.nombre}</Link></li>
        ))}
      </ul>
    </>
  )
}

