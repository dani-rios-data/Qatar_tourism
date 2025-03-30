import React from 'react';

const Introduction = () => {
  return (
    <section className="mb-10">
      <h3 className="text-xl font-semibold text-[#8D1B3D] mb-4">Introduction</h3>
      <div className="bg-white p-6 rounded-lg shadow">
        <p className="text-gray-700 mb-4">
          Esta sección explora los comportamientos y tendencias de viaje entre viajeros premium 
          interesados en Qatar, analizando patrones de reserva, preferencias de estancia y 
          actividades más buscadas.
        </p>
        <p className="text-gray-700">
          El análisis se basa en datos de encuestas realizadas a viajeros de alto poder adquisitivo,
          complementados con información de tendencias de reserva y estadísticas de visitantes,
          para proporcionar una visión integral de cómo estos viajeros planifican y experimentan sus
          visitas a Qatar.
        </p>
      </div>
    </section>
  );
};

export default Introduction; 