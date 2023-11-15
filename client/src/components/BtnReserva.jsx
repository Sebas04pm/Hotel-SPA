import React from 'react'
import { Link } from 'react-router-dom'

const BtnReserva = () => {
  return (
    <Link to='/Reserva' className='z-10'>
      <button className='bg-backTurquesa w-56 h-16 rounded-[30px] mt-7'>
        <p className='font-workSans text-center text-letrasHead text-[20px] font-bold'>
          ¡RESERVA YA!
        </p>
      </button>
    </Link>
  )
}

export default BtnReserva
