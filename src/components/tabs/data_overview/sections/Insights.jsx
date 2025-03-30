import React from 'react';

const Insights = () => {
  return (
    <section className="mb-10">
      <h3 className="text-xl font-semibold text-[#8D1B3D] mb-4">Key Insights & Recommendations</h3>
      <div className="bg-white p-6 rounded-lg shadow">
        <p className="text-gray-700 mb-6">
          Basado en el análisis de los datos recopilados de viajeros premium, esta sección destaca 
          hallazgos clave y ofrece recomendaciones sobre la metodología y fuentes de datos.
        </p>
        
        <div className="mb-6">
          <h4 className="text-lg font-medium text-gray-800 mb-3">Insights de Datos</h4>
          <ul className="space-y-3">
            <li className="bg-blue-50 p-4 rounded-lg">
              <p className="font-medium text-blue-800 mb-1">Representatividad de la Muestra</p>
              <p className="text-gray-700 text-sm">
                Los datos recopilados representan adecuadamente a viajeros premium de mercados clave, 
                con muestras significativas de América del Norte, Europa y Asia-Pacífico.
              </p>
            </li>
            <li className="bg-blue-50 p-4 rounded-lg">
              <p className="font-medium text-blue-800 mb-1">Coherencia Temporal</p>
              <p className="text-gray-700 text-sm">
                Las tendencias observadas muestran consistencia a lo largo del periodo de estudio,
                con cambios notables después de eventos importantes como la Copa Mundial.
              </p>
            </li>
            <li className="bg-blue-50 p-4 rounded-lg">
              <p className="font-medium text-blue-800 mb-1">Variaciones Regionales</p>
              <p className="text-gray-700 text-sm">
                Existen diferencias significativas en las percepciones entre regiones geográficas,
                lo que subraya la importancia de estrategias de marketing específicas por mercado.
              </p>
            </li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-medium text-gray-800 mb-3">Recomendaciones Metodológicas</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border-l-4 border-[#8D1B3D] pl-4">
              <h5 className="font-medium text-gray-800 mb-1">Ampliación de Mercados</h5>
              <p className="text-gray-700 text-sm">
                Considerar la inclusión de mercados emergentes adicionales en futuras encuestas
                para obtener una visión más completa de las tendencias globales.
              </p>
            </div>
            <div className="border-l-4 border-[#8D1B3D] pl-4">
              <h5 className="font-medium text-gray-800 mb-1">Seguimiento Longitudinal</h5>
              <p className="text-gray-700 text-sm">
                Establecer un marco de seguimiento longitudinal para medir cambios en la percepción
                a lo largo del tiempo, especialmente tras campañas de marketing específicas.
              </p>
            </div>
            <div className="border-l-4 border-[#8D1B3D] pl-4">
              <h5 className="font-medium text-gray-800 mb-1">Segmentación Demográfica</h5>
              <p className="text-gray-700 text-sm">
                Profundizar en la segmentación por edad e ingresos para identificar oportunidades
                específicas dentro del mercado de viajeros premium.
              </p>
            </div>
            <div className="border-l-4 border-[#8D1B3D] pl-4">
              <h5 className="font-medium text-gray-800 mb-1">Integración de Datos Cualitativos</h5>
              <p className="text-gray-700 text-sm">
                Complementar los datos cuantitativos con investigación cualitativa para obtener
                insights más profundos sobre las motivaciones y barreras de los viajeros.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insights; 