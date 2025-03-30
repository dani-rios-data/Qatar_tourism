import React from 'react';

const Insights = () => {
  return (
    <section className="mb-10">
      <h3 className="text-xl font-semibold text-[#8D1B3D] mb-4">Key Insights & Recommendations</h3>
      <div className="bg-white p-6 rounded-lg shadow">
        <p className="text-gray-700 mb-6">
          Basado en el análisis de comportamientos de viaje de turistas premium, estas son las conclusiones clave
          y recomendaciones estratégicas para mejorar la experiencia del visitante en Qatar.
        </p>
        
        <div className="mb-6">
          <h4 className="text-lg font-medium text-gray-800 mb-3">Insights Principales</h4>
          <ul className="space-y-3">
            <li className="bg-blue-50 p-4 rounded-lg">
              <p className="font-medium text-blue-800 mb-1">Predominio de Reservas Directas</p>
              <p className="text-gray-700 text-sm">
                El 68% de viajeros premium prefiere realizar reservas directamente con hoteles y aerolíneas,
                con un fuerte énfasis en experiencias personalizadas y servicios exclusivos.
              </p>
            </li>
            <li className="bg-blue-50 p-4 rounded-lg">
              <p className="font-medium text-blue-800 mb-1">Estancias Más Cortas que el Promedio Regional</p>
              <p className="text-gray-700 text-sm">
                La duración media de estancia en Qatar (3.4 noches) es inferior a destinos competidores en la región 
                (5.2 noches), sugiriendo una percepción de Qatar como destino de estancia corta.
              </p>
            </li>
            <li className="bg-blue-50 p-4 rounded-lg">
              <p className="font-medium text-blue-800 mb-1">Demanda de Experiencias Exclusivas</p>
              <p className="text-gray-700 text-sm">
                El 82% de viajeros premium busca activamente experiencias exclusivas no accesibles para el turismo masivo,
                particularmente aquellas que combinan elementos culturales con lujo.
              </p>
            </li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-medium text-gray-800 mb-3">Recomendaciones Estratégicas</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border-l-4 border-[#8D1B3D] pl-4">
              <h5 className="font-medium text-gray-800 mb-1">Itinerarios Extendidos</h5>
              <p className="text-gray-700 text-sm">
                Desarrollar y promocionar itinerarios de 5-7 días que muestren experiencias únicas
                a lo largo de una estancia más prolongada, con opciones para diferentes intereses.
              </p>
            </div>
            <div className="border-l-4 border-[#8D1B3D] pl-4">
              <h5 className="font-medium text-gray-800 mb-1">Programa de Experiencias Exclusivas</h5>
              <p className="text-gray-700 text-sm">
                Crear un programa estructurado de experiencias premium disponibles solo para reservas directas,
                incentivando este canal preferido por viajeros de alto valor.
              </p>
            </div>
            <div className="border-l-4 border-[#8D1B3D] pl-4">
              <h5 className="font-medium text-gray-800 mb-1">Paquetes Multi-destino</h5>
              <p className="text-gray-700 text-sm">
                Colaborar con destinos complementarios de la región para crear paquetes que posicionen
                Qatar como parte esencial de un itinerario regional más amplio.
              </p>
            </div>
            <div className="border-l-4 border-[#8D1B3D] pl-4">
              <h5 className="font-medium text-gray-800 mb-1">Calendario Anual de Eventos</h5>
              <p className="text-gray-700 text-sm">
                Desarrollar un calendario estratégico de eventos exclusivos distribuidos a lo largo del año
                para incentivar visitas en temporadas específicas y promover estancias más largas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insights; 