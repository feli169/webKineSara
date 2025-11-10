// src/components/Card.jsx
const Card = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-center flex flex-col items-center">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-3xl lg:text-2xl font-semibold mb-3 text-[#004173]">{title}</h3>
      <p className="text-gray-600 text-xl"
      >{description}</p>
    </div>
  );
};

export default Card;
