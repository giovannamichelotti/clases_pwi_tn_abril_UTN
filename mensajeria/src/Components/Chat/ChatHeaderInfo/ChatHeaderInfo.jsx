import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa";
import './ChatHeaderInfo.css'
import { MdOutlineCall, MdOutlineVideocam } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";

export const ChatHeaderInfo = ({contacto}) => {
  return (
    <div className='chat-header'>
      <Link className='flecha' to='/'><FaArrowLeft /></Link>
      <img className='imagen-chat' src={contacto && `/` + contacto.imagen}/>
        <Link className='contacto-total' to={contacto && `/infocontacto/` + contacto.id}>
          <div className='contacto-nombre'>{contacto && contacto.nombre}</div>
          <div className='ultima-conexion'>{contacto && contacto.ultima_conexion}</div>
        </Link>
        <div className='iconos-header'>
          <MdOutlineVideocam className='icono-header'/>
          <MdOutlineCall className='icono-header'/>
          <BsThreeDotsVertical className='icono-header'/>
        </div>
    </div>
  )
}
