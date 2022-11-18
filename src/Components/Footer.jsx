import React from 'react'

export default function Footer() {
  return (
    <footer class="p-4 bg-purple-600  shadow md:px-6 md:py-8">
    <div class="flex justify-center">
        <h1 className='text-white text-6xl font-semibold '>¿Que ofertamos <br /> actualmente?</h1>
    </div>
    <div className='grid grid-cols-4 gap-1 ml-32 mt-20'>
    <div>
        <h1 className='text-4xl font-bold text-white'>900+</h1>
        <p className='text-xl font-bold text-white'>Peliculas y <br /> tv shows</p>
    </div>
    <div>
        <h1 className='text-4xl font-bold text-white'>16K+</h1>
        <p className='text-xl font-bold text-white'>Listado de <br /> episodios</p>
    </div>
    <div>
        <h1 className='text-4xl font-bold text-white'>HD</h1>
        <p className='text-xl font-bold text-white'>Alta calidad de <br /> videos y imagenes</p>
    </div>
    <div>
        <h1 className='text-4xl font-bold text-white'>Facil</h1>
        <p className='text-xl font-bold text-white'>buena <br /> organizacion  </p>
    </div>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-autolg:my-8" />
    <span class="block text-sm text-white sm:text-center ">© 2022 <a href="https://flowbite.com/" class="hover:underline">BiteTV™</a>. Todos los derechos reservados.
    </span>
</footer>
  )
}
