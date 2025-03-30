import React from 'react';

const Insights = () => {
  return (
    <section className="mb-10">
      <h3 className="text-xl font-semibold text-[#8D1B3D] mb-4">Key Insights & Recommendations</h3>
      <div className="bg-white p-6 rounded-lg shadow">
        <p className="text-gray-700 mb-6">
          Basado en el análisis del panorama competitivo, estas son las conclusiones clave
          y recomendaciones estratégicas para reforzar la posición de Qatar como destino premium.
        </p>
        
        <div className="mb-6">
          <h4 className="text-lg font-medium text-gray-800 mb-3">Insights Competitivos</h4>
          <ul className="space-y-3">
            <li className="bg-blue-50 p-4 rounded-lg">
              <p className="font-medium text-blue-800 mb-1">Posición Única Cultural-Moderna</p>
              <p className="text-gray-700 text-sm">
                Qatar ocupa una posición única entre sus competidores, combinando una fuerte identidad cultural
                árabe con infraestructura ultramoderna, diferenciándose tanto de Dubai (percibido como más
                occidentalizado) como de destinos culturales más tradicionales.
              </p>
            </li>
            <li className="bg-blue-50 p-4 rounded-lg">
              <p className="font-medium text-blue-800 mb-1">Brecha de Reconocimiento de Marca</p>
              <p className="text-gray-700 text-sm">
                El reconocimiento de marca de Qatar (67%) queda por detrás de competidores clave como
                Dubai (92%) y Abu Dhabi (78%), aunque ha mostrado el crecimiento más rápido post-Mundial.
              </p>
            </li>
            <li className="bg-blue-50 p-4 rounded-lg">
              <p className="font-medium text-blue-800 mb-1">Ventaja en Autenticidad Cultural</p>
              <p className="text-gray-700 text-sm">
                Qatar supera a sus competidores regionales en percepción de autenticidad cultural (72% vs. 58%),
                representando una ventaja competitiva significativa para ciertos segmentos de viajeros.
              </p>
            </li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-medium text-gray-800 mb-3">Recomendaciones Estratégicas</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border-l-4 border-[#8D1B3D] pl-4">
              <h5 className="font-medium text-gray-800 mb-1">Diferenciación Consciente</h5>
              <p className="text-gray-700 text-sm">
                Reforzar el posicionamiento único de Qatar como destino que combina lujo moderno con 
                autenticidad cultural, en lugar de intentar competir directamente con Dubai en su mismo terreno.
              </p>
            </div>
            <div className="border-l-4 border-[#8D1B3D] pl-4">
              <h5 className="font-medium text-gray-800 mb-1">Aprovechamiento del Momentum</h5>
              <p className="text-gray-700 text-sm">
                Capitalizar el impulso post-Mundial con campañas específicas que aprovechen el mayor
                reconocimiento global y contrarresten la ventaja de notoriedad de los competidores.
              </p>
            </div>
            <div className="border-l-4 border-[#8D1B3D] pl-4">
              <h5 className="font-medium text-gray-800 mb-1">Asociaciones Estratégicas</h5>
              <p className="text-gray-700 text-sm">
                Desarrollar paquetes complementarios con destinos percibidos como complementarios (no competidores),
                posicionando a Qatar como parte esencial de un itinerario regional más amplio.
              </p>
            </div>
            <div className="border-l-4 border-[#8D1B3D] pl-4">
              <h5 className="font-medium text-gray-800 mb-1">Desarrollo de Nicho</h5>
              <p className="text-gray-700 text-sm">
                Invertir en el desarrollo de segmentos de nicho donde Qatar puede destacar de manera única,
                como turismo cultural premium y experiencias que combinen tradición con lujo contemporáneo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insights; 