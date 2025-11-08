import React from 'react'

const Hero = () => {
  return (
    <div>
    <section
      id="inicio"
      className="bg-emerald-50 flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-16 md:py-24"
    >
      {/* Texto principal */}
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold text-emerald-800 leading-tight">
          Recupera tu bienestar con masajes terapéuticos personalizados
        </h2>
        <p className="text-gray-700 text-lg">
          Soy <span className="font-semibold">Sara Castillo</span>, kinesióloga y masoterapeuta.
          Te ayudo a aliviar dolores musculares, mejorar tu movilidad y
          reconectarte con tu cuerpo a través del movimiento consciente.
        </p>
        <div className="flex gap-4">
          <a
            href="https://wa.me/56977961824"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition"
          >
            Agenda tu sesión
          </a>
          <a
            href="https://www.instagram.com/kine.saracastillo/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-700 border border-emerald-600 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-100 transition"
          >
            Ver en Instagram
          </a>
        </div>
      </div>

      {/* Imagen */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <img
          src="/masaje.png"
          alt="Masaje terapéutico"
          className="rounded-2xl shadow-lg w-80 md:w-[28rem] object-cover"
        />
      </div>
    </section>
    </div>
  )
}

export default Hero
