import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from '@material-tailwind/react'
import React from 'react'
import { Link } from 'react-router-dom'
const CardServicios = ({ servicio }) => {
  return (
    
    <Card className='w-[200px] bg-letrasHead'>
      <CardBody>
        <Typography variant='h5' color='blue-gray' className='mb-2 text-center'>
          {servicio.servicio}
        </Typography>
        <div>
          <p className='text-[20px]'>
            <span className='font-bold'>Precio:</span> {servicio.precio}
          </p>
          <p className='text-[18px]'>
            <span className='font-bold'>Duracion:</span> {servicio.duracion}{' '}
          </p>
          <p className='text-[18px]'>
            <span className='font-bold'>Descripción:</span> {servicio.descripcion}{' '}
          </p>
        </div>
      </CardBody>
      <CardFooter className='pt-0 flex justify-center'>
        <Link to='/Reserva' className='z-10'>
          <Button className='bg-backTurquesa rounded-3xl'>Reserva</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

export default CardServicios
