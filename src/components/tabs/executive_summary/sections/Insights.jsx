import React from 'react';

const Insights = () => {
  return (
    <section className="mb-10">
      <h3 className="text-xl font-semibold text-[#8D1B3D] mb-4">Key Insights & Recommendations</h3>
      <div className="bg-white p-6 rounded-lg shadow">
        <p className="text-gray-700 mb-6">
          Basado en el análisis integral de los datos, estas son las conclusiones principales
          y recomendaciones estratégicas para el desarrollo turístico de Qatar.
        </p>
        
        <div className="mb-6">
          <h4 className="text-lg font-medium text-gray-800 mb-3">Hallazgos Principales</h4>
          <ul className="space-y-3">
            <li className="bg-blue-50 p-4 rounded-lg">
              <p className="font-medium text-blue-800 mb-1">Percepción de Lujo Consolidada</p>
              <p className="text-gray-700 text-sm">
                Qatar es reconocido consistentemente por su oferta de lujo, con un 85% de viajeros premium 
                identificando el alojamiento de alta gama como motivador clave para visitar el país.
              </p>
            </li>
            <li className="bg-blue-50 p-4 rounded-lg">
              <p className="font-medium text-blue-800 mb-1">Brecha de Conocimiento Cultural</p>
              <p className="text-gray-700 text-sm">
                Existe una disparidad significativa entre la riqueza cultural de Qatar y la percepción
                externa, especialmente en mercados occidentales donde persisten concepciones erróneas.
              </p>
            </li>
            <li className="bg-blue-50 p-4 rounded-lg">
              <p className="font-medium text-blue-800 mb-1">Oportunidad Post-Mundial</p>
              <p className="text-gray-700 text-sm">
                El reconocimiento global de Qatar ha aumentado un 43% tras la Copa Mundial, creando
                una ventana de oportunidad para redefinir la marca país en mercados internacionales.
              </p>
            </li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-medium text-gray-800 mb-3">Recomendaciones Estratégicas</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border-l-4 border-[#8D1B3D] pl-4">
              <h5 className="font-medium text-gray-800 mb-1">Narrativa Cultural Auténtica</h5>
              <p className="text-gray-700 text-sm">
                Desarrollar campañas que resalten experiencias culturales auténticas, utilizando
                testimonios de viajeros para combatir estereotipos y concepciones erróneas.
              </p>
            </div>
            <div className="border-l-4 border-[#8D1B3D] pl-4">
              <h5 className="font-medium text-gray-800 mb-1">Diferenciación Regional</h5>
              <p className="text-gray-700 text-sm">
                Articular claramente la propuesta de valor única de Qatar en comparación con destinos
                vecinos, enfatizando experiencias exclusivas que no se encuentran en otros lugares.
              </p>
            </div>
            <div className="border-l-4 border-[#8D1B3D] pl-4">
              <h5 className="font-medium text-gray-800 mb-1">Educación de Mercado</h5>
              <p className="text-gray-700 text-sm">
                Implementar una estrategia educativa dirigida a mercados occidentales para abordar
                las preocupaciones sobre restricciones culturales percibidas.
              </p>
            </div>
            <div className="border-l-4 border-[#8D1B3D] pl-4">
              <h5 className="font-medium text-gray-800 mb-1">Estrategia de Destino Principal</h5>
              <p className="text-gray-700 text-sm">
                Reposicionar Qatar como destino principal en lugar de escala, desarrollando
                itinerarios detallados que muestren experiencias para estancias de 5-7 días.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insights; 