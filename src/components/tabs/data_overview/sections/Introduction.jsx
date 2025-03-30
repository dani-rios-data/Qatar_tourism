import React from 'react';

const Introduction = () => {
  return (
    <section className="mb-10">
      <h3 className="text-xl font-semibold text-[#8D1B3D] mb-4">Introduction</h3>
      <div className="bg-white p-6 rounded-lg shadow">
        <p className="text-gray-700 mb-4">
          Esta sección ofrece una visión general de los datos utilizados en todo el dashboard de percepción de Qatar.
          Establece el contexto para entender el alcance y la metodología del análisis.
        </p>
        <p className="text-gray-700">
          Los datos presentados provienen de encuestas realizadas entre viajeros premium de diferentes regiones,
          centradas en comprender los niveles de conocimiento, impresiones generales y atractivo de Qatar como destino.
        </p>
      </div>
    </section>
  );
};

export default Introduction; 