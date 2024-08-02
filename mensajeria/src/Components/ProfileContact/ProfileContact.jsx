import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import MOOK_MENSAJES from '../../contactos.json'
import './ProfileContact.css'
import { MdOutlineCall, MdOutlineVideocam, MdOutlineMessage, MdOutlineImage } from "react-icons/md";
import { LuBell } from "react-icons/lu";
import { IoMdLock } from "react-icons/io";
import { BsClockHistory } from "react-icons/bs";
import { PiLockLaminatedLight } from "react-icons/pi";
import { FaArrowLeft } from "react-icons/fa";

export const ProfileContact = ({}) => {

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
    <div className='general'>
        <Link className='volver' to={contacto && `/chat/` + contacto.id}><FaArrowLeft /></Link>
        <div className='cabecera-profile'>
          <img src={contacto && ('/' + contacto.imagen)} className='imagen' />
          <div>
            <div className='profile-nombre'>
              {contacto && contacto.nombre}
            </div>
            <div className='profile-nro'>
              {contacto && contacto.nro}
            </div>
          </div>
          <div className='ult-vez'>
            Ult. vez {contacto && contacto.ultima_conexion}
          </div>
          </div>
          <div className='iconos-grandes-general'>
            <div className='icono-titulo'><MdOutlineMessage className='iconos-grandes' /> Mensaje</div>
            <div className='icono-titulo'><MdOutlineCall className='iconos-grandes'/> Llamar</div>
            <div className='icono-titulo'><MdOutlineVideocam className='iconos-grandes'/> Video</div>
          </div>
          <div className='opciones'>
            <div className='opcion'>
              <div className='icono-titulo'><LuBell className='iconos'/> Notificaciones</div>
            </div>
            <div className='opcion'>
              <div className='icono-titulo'><MdOutlineImage className='iconos' /> Visibilidad de archivos multimedia</div>
            </div>
            <div className='opcion'>
              <div className='icono-titulo'><IoMdLock className='iconos' /> Cifrado</div>
              <span>Los cifrados y llamadas están cifrados de extremo a extremo. Toca para verificarlo.</span>
            </div>
            <div className='opcion'>
              <div className='icono-titulo'><BsClockHistory className='iconos' /> Mensajes temporales</div>
              <span>Desactivados</span>
            </div>
            <div className='opcion'>
              <div className='icono-titulo'><PiLockLaminatedLight className='iconos' /> Restringir chat</div>
              <span>Restringe y oculta este chat en este dispositivo</span>
            </div>
          </div>
    </div>
  )
}
