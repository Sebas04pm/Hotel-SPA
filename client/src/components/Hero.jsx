import { useContext } from 'react'
import Header from './Header'
import BtnReserva from './BtnReserva'
import wave from '../assets/img/wave.svg'
import flor from '../assets/img/florLanding.png'
import IMG from '../assets/img/mar.jpg'
import servi from '../assets/img/servi.png'
import Footer from './Footer'
import { ServiciosContext } from '../context/ServiciosContext'
import { Link } from 'react-router-dom'
import React from 'react'
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa'
const Hero = () => {
  const { servicios } = useContext(ServiciosContext)
  return (
    <>
      <section className='bg-hero-Img h-[90vh] bg-no-repeat bg-cover bg-center lg:h-screen'>
        <div className='bg-backTurquesa hidden md:flex w-full  items-center justify-between p-3 text-sm text-letrasHead'>
          <div className='flex gap-7'>
            <p className='flex items-center gap-2'>
              <FaMapMarkerAlt /> Playa El Tirano, carretera Costanera, Isla de Margarita, Venezuela.
            </p>
            <p className='flex items-center gap-2'>
              <FaCalendarAlt />
              Lun-Dom: Las 24 horas
            </p>
            <p className='flex items-center gap-2'>
              <FaPhoneAlt />
              0424-1234567
            </p>
          </div>
          <div className='flex items-center gap-3'>
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
          </div>
        </div>
        <Header />
        <div className='flex flex-col justify-center h-[80vh] w-full items-center'>
          <div className='flex flex-col items-center'> 
            <h1 className='text-6xl font-workSans p-7 text-white font-bold leading-10 tracking-[3px] break-words'>
              STORE HOTEL
            </h1>
            <p className='text-4xl font-workSans text-white text-center'>¡Disfrute de su estadía cómodamente!</p>
            <BtnReserva />
          </div>
        </div>
      </section>

      <section className='flex flex-col gap-16 relative min-h-screen'>
        <img
          className='absolute -top-20 left-0 right-0 w-full h-auto z-0 sm:-top-28 md:-top-40 lg:-top-44 xl:-top-56'
          src={wave}
          alt=''
        />
        <div className='relative z-20 text-center pt-7 md:w-full'>
          <div id='text-seccion' className='flex flex-col gap-7 items-center'>
            <h2 className='font-satisfy text-[65px] text-backTurquesa md:w-3/4'>
              Para nuestros clientes
            </h2>
            <p className='text-[25px] md:w-3/4 m-2'>
              Servicios de Hotelería de Alta Calidad
            </p>
            <p className='text-[16px] w-80 md:text-2xl md:w-3/4'>
              Nuestro Hotel se adapta a todas sus necesidades de relajación. Bajo una arquitectura tropical usted podrá disfrutar de una relajante piscina con área de jacuzzi y su emblemática cascada.
              Cuenta con un servicio de bar y sus noches amenizadas al compás de una suave música se convierten en una zona lounge cálidamente decorada.
              Cuenta con Club de Niños, un Parque Infantil y un amplio salón de juegos para niños y adultos.Tendrás tus vacaciones perfectas aquí, en Stage Hotel. Visite una
              categoría a continuación para ver todas las excelentes opciones que tenemos para ofrecer
            </p>
          </div>
        </div>

        <div className='flex flex-wrap items-center justify-center gap-0'>
          {servicios ? (
            servicios.slice(0, 4).map((servicio) => (
              <Link to='/Reserva' key={servicio._id}>
                <article
                  key={servicio._id}
                  className='flex flex-col w-[300px] mb-10'
                >
                  <figure className='w-full flex flex-col justify-center items-center gap-6'>
                    <div className='w-8/12 h-33 flex justify-center'>
                      <img src={servi} alt='imagen predeterminada' />
                    </div>
                    <figcaption>
                      <p>{servicio.servicio}</p>
                    </figcaption>
                    <div className='bg-backTurquesa h-[2px] w-3/5'></div>
                  </figure>
                </article>
              </Link>
            ))
          ) : (
            <h2 className='font-satisfy text-center text-[60px]'>
              No estamos ofreciendo servicios
            </h2>
          )}
        </div>
        <div className='flex justify-center pb-16'>
          <BtnReserva />
        </div>
      </section>


      <section className="my-8">
        <div className="container mx-auto px-6">
            <div className="h-64 rounded-md overflow-hidden bg-cover bg-center bg-mar-img">
                <div class="bg-gray-900 bg-opacity-50 flex items-center h-full">
                    <div class="px-10 max-w-xl">
                        <h2 class="text-2xl text-white font-semibold">La Isla de Margarita</h2>
                        <p class="mt-2 text-white">Margarita es una isla de Venezuela situada en el mar Caribe al Noreste de Caracas, la capital del país, a sólo 35 minutos en vuelo, o a un par de horas en ferry desde Puerto La Cruz o Cumaná. Es uno de los destinos turísticos preferidos de Venezuela</p>
                    </div>
                </div>
            </div>
            
            <div class="md:flex mt-8 md:-mx-4">
                <div class="w-full h-64 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:w-1/2 bg-mar-img1">
                    <div class="bg-gray-900 bg-opacity-50 flex items-center h-full">
                        <div class="px-10 max-w-xl">
                            <h2 class="text-2xl text-white font-semibold">Su Belleza</h2>
                            <p class="mt-2 text-white">Margarita es lo suficientemente grande y variada como para que cada uno encuentre lo que le gusta, desde manglares hasta actividades de kite-surf, pasando por bosques nublados de montaña, pequeños pueblecitos de pescadores y hasta zonas desérticas</p>
                        </div>
                    </div>
                </div>
                <div class="w-full h-64 mt-8 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:mt-0 md:w-1/2 bg-mar-img2">
                    <div class="bg-gray-900 bg-opacity-50 flex items-center h-full">
                        <div class="px-10 max-w-xl">
                            <h2 class="text-2xl text-white font-semibold">Deportes</h2>
                            <p class="mt-2 text-white">En Margarita se pueden practicar un sinfín de deportes acuáticos. Es uno de los mejores lugares del mundo para la práctica del windsurf, kitesurf y buceo. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-16">
                <h3 class="font-satisfy text-[65px] text-backTurquesa text-center py-4 text-2xl font-medium">Lugares Turisticos</h3>
                <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
                    <div class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                        <div class="flex items-end justify-end h-56 w-full bg-cover bg-mirador-img"></div>
                        <div class="px-5 py-3">
                            <h3 class="text-gray-700 uppercase font-bold">Mirador de Santa Ana</h3>
                        </div>
                    </div>
                    <div class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                        <div class="flex items-end justify-end h-56 w-full bg-cover bg-playa-img"></div>
                        <div class="px-5 py-3">
                            <h3 class="text-gray-700 uppercase font-bold">Playa el Agua</h3>
                        </div>
                    </div>
                    <div class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                        <div class="flex items-end justify-end h-56 w-full bg-cover bg-virgen-img"></div>
                        <div class="px-5 py-3">
                            <h3 class="text-gray-700 uppercase font-bold">La Basílica de la Virgen del Valle</h3>
                        </div>
                    </div>
                    <div class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                        <div class="flex items-end justify-end h-56 w-full bg-cover bg-porla-img"></div>
                        <div class="px-5 py-3">
                            <h3 class="text-gray-700 uppercase font-bold">Porlamar</h3>
                        </div>
                    </div>
                </div>
            </div>
      </section>
            

      <Footer />
    </>
  )
}

export default Hero
