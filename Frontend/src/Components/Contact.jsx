import { FaWhatsapp, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-50 py-16 px-4 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        Reserva tu sesión o consulta disponibilidad
      </h2>
      <p className="text-gray-600 mb-8 max-w-xl mx-auto">
        Contáctame para coordinar tu hora o resolver tus dudas sobre tratamientos.
      </p>

      {/* Botones de contacto */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
        <a
          href="https://wa.me/56977961824?text=Hola%20quisiera%20agendar%20una%20sesión"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition"
        >
          <FaWhatsapp size={22} />
          WhatsApp
        </a>

        <a
          href="https://www.instagram.com/kine.SaraCastillo/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600 transition"
        >
          <FaInstagram size={22} />
          Instagram
        </a>
      </div>

      {/* Mapa */}
      <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-lg border">
        <iframe
          title="Mapa del centro"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.7031974577403!2d-70.61120602458328!3d-33.45703839784916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf926bc86a21%3A0xa4ebad0980afeca6!2sCENTRO%20VIOLETA%20-%20Yoga%20-%20Fitness%20-%20Masajes%20-%20Terapias!5e0!3m2!1ses-419!2scl!4v1762565587069!5m2!1ses-419!2scl"
          width="100%"
          height="350"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
