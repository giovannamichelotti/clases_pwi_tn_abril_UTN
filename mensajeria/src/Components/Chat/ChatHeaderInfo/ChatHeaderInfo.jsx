import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa";
import './ChatHeaderInfo.css'
import { MdOutlineCall, MdOutlineVideocam } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";

export const ChatHeaderInfo = ({contacto}) => {
  return (
    <div className='chat-header'>
      {
        contacto && (
          <>
            <Link className='flecha' to='/'><FaArrowLeft /></Link>
            <img className='imagen-chat' src={`/` + contacto.imagen}/>
            <Link className='contacto-total' to={`/infocontacto/` + contacto.id}>
              <div className='contacto-nombre'>{contacto.nombre}</div>
              <div className='ultima-conexion'>{contacto.ultima_conexion}</div>
            </Link>
            <div className='iconos-header'>
              <MdOutlineVideocam className='icono-header'/>
              <MdOutlineCall className='icono-header'/>
              <BsThreeDotsVertical className='icono-header'/>
            </div>
          </>
        )
      }
      
    </div>
  )
}
