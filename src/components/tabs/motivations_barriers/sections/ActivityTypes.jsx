import React from 'react';

const ActivityTypes = () => {
  return (
    <div className="chart-container">
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="space-y-4">
          {[
            { label: 'Experiencias gastronómicas exclusivas', percentage: 78, color: '#8D1B3D' },
            { label: 'Visitas culturales e históricas', percentage: 72, color: '#D4A017' },
            { label: 'Actividades de bienestar y spa', percentage: 65, color: '#38A169' },
            { label: 'Compras de lujo', percentage: 63, color: '#3182CE' },
            { label: 'Excursiones privadas', percentage: 58, color: '#805AD5' },
            { label: 'Deportes acuáticos y playa', percentage: 45, color: '#DD6B20' },
          ].map((item, index) => (
            <div key={index} className="w-full">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">{item.label}</span>
                <span className="text-sm font-medium text-gray-700">{item.percentage}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="h-2.5 rounded-full"
                  style={{ width: `${item.percentage}%`, backgroundColor: item.color }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-5 border-t pt-4">
          <p className="text-sm text-gray-600">
            Las experiencias gastronómicas y culturales lideran las preferencias de actividades, seguidas por opciones de bienestar y compras de lujo, lo que sugiere un énfasis en experiencias memorables y exclusivas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ActivityTypes; 