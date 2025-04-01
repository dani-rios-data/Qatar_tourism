import React from 'react';

const CompanyOnVacations = () => {
  // Datos para el gráfico de compañía en vacaciones para Q3 2024
  const data = [
    { label: 'My partner', percentage: 77.1, color: '#8D1B3D' },
    { label: 'My child(ren) / other family member(s)', percentage: 36.0, color: '#D4A017' },
    { label: 'By myself', percentage: 23.1, color: '#3182CE' }, // Usando el último valor disponible (Q1 2023)
    { label: 'My pet(s)', percentage: 5.5, color: '#805AD5' },
  ];

  // Ordenar los datos de mayor a menor porcentaje
  const sortedData = [...data].sort((a, b) => b.percentage - a.percentage);

  return (
    <div className="chart-container">
      <div className="bg-white p-4 rounded-lg shadow">
        <h4 className="text-sm font-medium text-gray-500 mb-3 text-center">Travel Companion Preferences - Q3 2024</h4>
        {/* Gráfico de barras horizontal */}
        <div className="space-y-6">
          {sortedData.map((item, index) => (
            <div key={index} className="w-full">
              <div className="flex items-center">
                <div className="w-2/5 pr-4">
                  <span className="text-sm font-medium text-gray-700">{item.label}</span>
                </div>
                <div className="w-3/5">
                  <div className="flex items-center">
                    <div className="w-full bg-gray-200 rounded-full h-4 mr-2">
                      <div
                        className="h-4 rounded-full"
                        style={{ width: `${item.percentage}%`, backgroundColor: item.color }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-gray-700 w-12 text-right">{item.percentage.toFixed(1)}%</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyOnVacations; 