import React from 'react';
import Introduction from './sections/Introduction';
import Insights from './sections/Insights';

const MotivationsBarriersTab = () => {
  return (
    <div className="tab-content">
      <h2 className="text-2xl font-bold text-[#8D1B3D] mb-6">Travel Motivations & Barriers</h2>
      
      {/* Render sections in order */}
      <Introduction />
      
      {/* Aquí irían las secciones específicas para Motivations & Barriers */}
      <div className="mb-10">
        <h3 className="text-xl font-semibold text-[#8D1B3D] mb-4">Principales Motivadores</h3>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-medium text-gray-800 mb-3">Top 5 Motivadores</h4>
              <div className="space-y-3">
                {[
                  { label: 'Alojamiento de lujo', percentage: '85%', color: '#38A169' },
                  { label: 'Gastronomía premium', percentage: '76%', color: '#3182CE' },
                  { label: 'Compras exclusivas', percentage: '72%', color: '#805AD5' },
                  { label: 'Arquitectura moderna', percentage: '68%', color: '#D69E2E' },
                  { label: 'Experiencias culturales', percentage: '62%', color: '#DD6B20' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div 
                      className="h-4 mr-3 rounded" 
                      style={{ 
                        width: item.percentage.replace('%', '') + 'px',
                        backgroundColor: item.color
                      }}
                    ></div>
                    <div className="flex justify-between w-full">
                      <span className="text-gray-700">{item.label}</span>
                      <span className="font-medium">{item.percentage}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-medium text-gray-800 mb-3">Análisis de Motivadores</h4>
              <p className="text-gray-700 mb-4">
                El análisis de motivadores muestra una clara preferencia por experiencias de lujo,
                con el alojamiento premium, gastronomía exclusiva y compras de alta gama dominando
                las principales razones para considerar Qatar como destino.
              </p>
              <p className="text-gray-700">
                Notablemente, la arquitectura moderna y las experiencias culturales completan el
                top 5, sugiriendo un interés en una experiencia de viaje equilibrada que combine
                lujo con elementos culturales y estéticos únicos de Qatar.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mb-10">
        <h3 className="text-xl font-semibold text-[#8D1B3D] mb-4">Barreras Percibidas</h3>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-medium text-gray-800 mb-3">Principales Barreras</h4>
              <div className="space-y-3">
                {[
                  { label: 'Restricciones culturales percibidas', percentage: '63%', color: '#E53E3E' },
                  { label: 'Clima (calor extremo)', percentage: '57%', color: '#DD6B20' },
                  { label: 'Conocimiento limitado del destino', percentage: '52%', color: '#D69E2E' },
                  { label: 'Percepción de valor vs. costo', percentage: '48%', color: '#38A169' },
                  { label: 'Preocupaciones sobre actividades limitadas', percentage: '43%', color: '#3182CE' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div 
                      className="h-4 mr-3 rounded" 
                      style={{ 
                        width: item.percentage.replace('%', '') + 'px',
                        backgroundColor: item.color
                      }}
                    ></div>
                    <div className="flex justify-between w-full">
                      <span className="text-gray-700">{item.label}</span>
                      <span className="font-medium">{item.percentage}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-medium text-gray-800 mb-3">Variación por Mercado</h4>
              <p className="text-gray-700 mb-4">
                Las preocupaciones sobre restricciones culturales son más prominentes en mercados 
                occidentales (Norteamérica 72%, Europa 67%), mientras que viajeros asiáticos 
                muestran menos preocupación por este aspecto (42%).
              </p>
              <p className="text-gray-700">
                El clima es una preocupación uniforme en todos los mercados, mientras que el conocimiento 
                limitado del destino es particularmente alto en mercados emergentes, sugiriendo 
                oportunidades para campañas educativas específicas.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Insights />
    </div>
  );
};

export default MotivationsBarriersTab; 