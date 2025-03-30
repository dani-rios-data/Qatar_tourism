import React from 'react';

const CompanyOnVacations = () => {
  // Datos para el gráfico de compañía en vacaciones
  const data = [
    { label: 'Pareja/Cónyuge', percentage: 68, color: '#8D1B3D' },
    { label: 'Familia con niños', percentage: 42, color: '#D4A017' },
    { label: 'Amigos', percentage: 36, color: '#38A169' },
    { label: 'Solo', percentage: 24, color: '#3182CE' },
    { label: 'Grupo organizado', percentage: 12, color: '#805AD5' },
  ];

  return (
    <div className="chart-container">
      <div className="bg-white p-4 rounded-lg shadow">
        {/* Gráfico de barras horizontal */}
        <div className="space-y-6">
          {data.map((item, index) => (
            <div key={index} className="w-full">
              <div className="flex items-center">
                <div className="w-1/3 pr-4">
                  <span className="text-sm font-medium text-gray-700">{item.label}</span>
                </div>
                <div className="w-2/3">
                  <div className="flex items-center">
                    <div className="w-full bg-gray-200 rounded-full h-4 mr-2">
                      <div
                        className="h-4 rounded-full"
                        style={{ width: `${item.percentage}%`, backgroundColor: item.color }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-gray-700 w-12 text-right">{item.percentage}%</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Insights */}
        <div className="mt-6 border-t pt-4">
          <p className="text-sm text-gray-600">
            La mayoría de los viajeros premium prefieren viajar en pareja (68%), seguido por familias con niños (42%). 
            Esto sugiere la importancia de desarrollar experiencias románticas y familiares en Qatar.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompanyOnVacations; 