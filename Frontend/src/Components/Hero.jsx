import React from 'react'

const Hero = () => {
  return (
    <div>
   <section
  id="inicio"
  className="bg-blue-100 flex flex-col lg:flex-row items-center justify-between mt-28 mb-4 px-6 lg:px-16 py-16 lg:py-24"
>
  {/* Texto principal */}
  <div className="flex flex-col lg:w-1/2 space-y-6 order-1 lg:order-1">
    <h2 className="text-6xl lg:text-5xl font-bold text-center lg:text-start mt-5 text-[#004173] leading-tight">
      Recupera tu bienestar y conecta con tu cuerpo
    </h2>
    <p className="text-gray-700 text-3xl lg:text-xl">
      Soy <span className="font-semibold">Sara Castillo</span>, kinesióloga y masoterapeuta.
      Te ayudo a aliviar dolores musculares, mejorar tu movilidad y reconectarte con tu cuerpo
      a través del movimiento consciente.
    </p>
  </div>

  {/* Imagen */}
  <div className="flex flex-col items-center lg:w-1/2 mt-10 lg:mt-0  w-[80%] order-2 lg:order-2">
    <img
      src="/masaje.png"
      alt="Masaje terapéutico"
      className="rounded-2xl shadow-lg w-79 lg:w-[28rem] object-cover"
    />

    {/* Botones (siempre aquí, pero cambian de posición con order) */}
    <div className="flex gap-4 mt-6 order-3 lg:order-1">
      <a
        href="https://wa.me/56977961824"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#004173] text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition"
      >
        Agenda tu sesión
      </a>
      <a
        href="https://www.instagram.com/kine.saracastillo/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#004173] border border-emerald-600 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-100 transition"
      >
        Ver en Instagram
      </a>
    </div>
  </div>
</section>

    </div>
  )
}

export default Hero
