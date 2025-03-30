import React from 'react';

const Insights = () => {
  return (
    <section className="mb-10">
      <h3 className="text-xl font-semibold text-[#8D1B3D] mb-4">Key Insights & Recommendations</h3>
      <div className="bg-white p-6 rounded-lg shadow">
        <p className="text-gray-700 mb-6">
          Basado en el análisis de motivaciones y barreras para visitar Qatar, estas son las conclusiones clave
          y recomendaciones estratégicas para mejorar el atractivo del destino.
        </p>
        
        <div className="mb-6">
          <h4 className="text-lg font-medium text-gray-800 mb-3">Insights Principales</h4>
          <ul className="space-y-3">
            <li className="bg-blue-50 p-4 rounded-lg">
              <p className="font-medium text-blue-800 mb-1">Motivadores de Lujo Dominantes</p>
              <p className="text-gray-700 text-sm">
                El alojamiento de lujo (85%), gastronomía premium (76%) y compras exclusivas (72%) 
                son los tres principales motivadores para los viajeros que consideran Qatar.
              </p>
            </li>
            <li className="bg-blue-50 p-4 rounded-lg">
              <p className="font-medium text-blue-800 mb-1">Brecha de Percepción Cultural</p>
              <p className="text-gray-700 text-sm">
                Las percepciones sobre restricciones culturales representan la barrera más significativa,
                especialmente en mercados occidentales (72% Norteamérica, 67% Europa).
              </p>
            </li>
            <li className="bg-blue-50 p-4 rounded-lg">
              <p className="font-medium text-blue-800 mb-1">Variación Regional en Barreras</p>
              <p className="text-gray-700 text-sm">
                Las preocupaciones varían significativamente por región: mientras mercados occidentales
                se preocupan por restricciones culturales, mercados asiáticos priorizan cuestiones de valor y clima.
              </p>
            </li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-medium text-gray-800 mb-3">Recomendaciones Estratégicas</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border-l-4 border-[#8D1B3D] pl-4">
              <h5 className="font-medium text-gray-800 mb-1">Enfoque en Experiencias Combinadas</h5>
              <p className="text-gray-700 text-sm">
                Desarrollar y promocionar paquetes que combinen los principales motivadores (lujo, gastronomía, 
                cultura) para maximizar el atractivo para viajeros de alto poder adquisitivo.
              </p>
            </div>
            <div className="border-l-4 border-[#8D1B3D] pl-4">
              <h5 className="font-medium text-gray-800 mb-1">Campaña Educativa Específica</h5>
              <p className="text-gray-700 text-sm">
                Implementar una estrategia de comunicación dirigida a desmitificar restricciones culturales,
                adaptada específicamente para mercados occidentales donde esta preocupación es más prominente.
              </p>
            </div>
            <div className="border-l-4 border-[#8D1B3D] pl-4">
              <h5 className="font-medium text-gray-800 mb-1">Adaptación Regional de Mensajes</h5>
              <p className="text-gray-700 text-sm">
                Personalizar los mensajes de marketing por región, enfatizando diferentes aspectos según 
                las motivaciones y preocupaciones específicas de cada mercado.
              </p>
            </div>
            <div className="border-l-4 border-[#8D1B3D] pl-4">
              <h5 className="font-medium text-gray-800 mb-1">Testimonios de Viajeros Similares</h5>
              <p className="text-gray-700 text-sm">
                Utilizar testimonios auténticos de viajeros premium que han visitado Qatar para abordar
                directamente las preocupaciones comunes y validar los principales motivadores.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insights; 