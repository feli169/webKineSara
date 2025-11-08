import { useEffect, useState } from "react";
import axios from "axios";

const Service = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        // Al ser un archivo local, lo importamos del public
        const response = await axios.get("/Data/servicesData.json");
        setServices(response.data);
      } catch (error) {
        console.error("Error al cargar los servicios:", error);
      }
    };

    fetchServices();
  }, []);

  return (
    <section id="servicios" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-10 text-[#004173]">
          Nuestros Servicios
        </h2>

        {services.length > 0 ? (
          <div className="flex flex-wrap justify-center gap-10 max-w-6xl mx-auto ">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 w-full sm:w-80 text-center"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">Cargando servicios...</p>
        )}
      </div>
    </section>)
}

export default Service
