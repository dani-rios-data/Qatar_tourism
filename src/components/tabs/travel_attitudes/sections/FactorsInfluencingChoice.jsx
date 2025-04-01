import React, { useState, useRef, useEffect } from "react";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, Cell, CartesianGrid } from "recharts";

const audienceData = [
  { 
    quarter: "Q1 2023", 
    "Accommodation options": 49.1,
    "Activities / sports": 29.4,
    "Beach / pool": 44.7,
    "Culture": 52.4,
    "Ease of getting there": 42.2,
    "Events / excursions": 42.5,
    "Experiencing something new": 64.9,
    "Fine dining": 39.1,
    "Fun / excitement": 52.1,
    "Good weather / climate": 60.9, 
    "Local cuisine / food and drink": 55.3,
    "Relaxation": 66.8, 
    "Reviews / recommendations": 32.1,
    "Security / safety": 64.0, 
    "Sights / attractions to visit": 58.9,
    "Time difference": 12.6,
    "Understanding the language": 24.0
  },
  { 
    quarter: "Q3 2023", 
    "Accommodation options": 62.5,
    "Activities / sports": 26.2,
    "Beach / pool": 52.2,
    "Culture": 49.1,
    "Ease of getting there": 37.6,
    "Events / excursions": 44.6,
    "Experiencing something new": 62.3,
    "Familiarity": 21.2,
    "Family-friendly options": 38.1,
    "Fine dining": 42.6,
    "Fun / excitement": 61.5,
    "Good weather / climate": 66.4, 
    "Local cuisine / food and drink": 62.6,
    "Relaxation": 64.9, 
    "Reviews / recommendations": 47.5,
    "Security / safety": 73.8, 
    "Sights / attractions to visit": 67.5,
    "Time to get there": 37.3
  },
  { 
    quarter: "Q1 2024", 
    "Accommodation options": 65.1,
    "Activities / sports": 26.4,
    "Beach / pool": 43.6,
    "Being pet-friendly": 13.0,
    "Cost / value-for-money": 53.9,
    "Culture": 55.2,
    "Ease of getting there": 44.5,
    "Events / excursions": 39.1,
    "Experiencing something new": 61.8,
    "Fine dining": 38.3,
    "Fun / excitement": 54.4,
    "Good weather / climate": 70.2, 
    "Local cuisine / food and drink": 56.1,
    "Relaxation": 58.7, 
    "Reviews / recommendations": 46.0,
    "Security / safety": 65.2, 
    "Sights / attractions to visit": 71.7,
    "Time to get there": 36.7,
    "Understanding the language": 30.7
  },
  { 
    quarter: "Q3 2024", 
    "Sights / attractions to visit": 65.6,
    "Experiencing something new": 63.2,
    "Local cuisine / food and drink": 62.9,
    "Good weather / climate": 59.8,
    "Relaxation": 56.8,
    "Fun / excitement": 55.3,
    "Security / safety": 53.4,
    "Accommodation options": 45.9,
    "Culture": 45.9,
    "Beach / pool": 43.0,
    "Fine dining": 41.4,
    "Events / excursions": 36.5,
    "Reviews / recommendations": 35.6,
    "Activities / sports": 30.4,
    "Nightlife": 16.9
  }
];

const indexData = [
  { quarter: "Q1 2023", Accommodation: 185.7, Security: 175.2, Weather: 152.9, Relaxation: 191.5, Attractions: 145.0 },
  { quarter: "Q3 2023", Accommodation: 226.3, Security: 187.1, Weather: 158.4, Relaxation: 171.2, Attractions: 160.0 },
  { quarter: "Q1 2024", Accommodation: 223.3, Security: 154.9, Weather: 161.9, Relaxation: 144.7, Attractions: 162.8 },
  { quarter: "Q3 2024", Accommodation: 151.8, Security: 124.5, Weather: 134.5, Relaxation: 136.6, Attractions: 147.0 },
];

// Todos los 15 atributos de Q3 2024 en el orden exacto de la tabla
const attributes = [
  "Sights / attractions to visit",
  "Experiencing something new", 
  "Local cuisine / food and drink", 
  "Good weather / climate", 
  "Relaxation", 
  "Fun / excitement", 
  "Security / safety", 
  "Accommodation options", 
  "Culture", 
  "Beach / pool",
  "Fine dining",
  "Events / excursions",
  "Reviews / recommendations",
  "Activities / sports",
  "Nightlife"
];

// Lista completa de todos los atributos posibles en todos los datos
const allAttributes = [
  "Accommodation options",
  "Activities / sports",
  "Beach / pool",
  "Being pet-friendly",
  "Cost / value-for-money",
  "Culture",
  "Ease of getting there",
  "Events / excursions",
  "Experiencing something new",
  "Familiarity",
  "Family-friendly options",
  "Fine dining",
  "Fun / excitement",
  "Good weather / climate",
  "Local cuisine / food and drink",
  "Nightlife",
  "Relaxation",
  "Reviews / recommendations",
  "Security / safety",
  "Sights / attractions to visit",
  "Time difference",
  "Time to get there",
  "Understanding the language"
];

// Nombres simplificados para las leyendas
const simplifiedNames = {
  "Experiencing something new": "New Experiences",
  "Sights/attractions": "Attractions",
  "Local cuisine": "Cuisine",
  "Weather": "Weather",
  "Security": "Security",
  "Relaxation": "Relaxation",
  "Fun": "Fun & Excitement",
  "Culture": "Culture",
  "Accommodation": "Accommodation",
  "Beach": "Beach & Pool"
};

// Componente de Select personalizado
const CustomSelect = ({ value, options, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={selectRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm text-gray-700"
      >
        <span>{value}</span>
        <svg 
          className={`w-4 h-4 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 20 20" 
          fill="currentColor"
        >
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white shadow-lg rounded-md border border-gray-300">
          <ul className="py-1">
            {options.map((option, index) => (
              <li 
                key={index}
                className={`px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center ${option === value ? 'bg-gray-50' : ''}`}
                onClick={() => handleSelect(option)}
              >
                {option === value && (
                  <svg className="w-4 h-4 mr-2 text-[#8D1B3D]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
                <span className={`${option === value ? 'ml-0' : 'ml-6'}`}>{option}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const FactorsInfluencingChoice = () => {
  // Estado para controlar qué factores mostrar en el gráfico de tendencias
  const [selectedFactors, setSelectedFactors] = useState(attributes.slice(0, 5));
  const [tempSelectedFactors, setTempSelectedFactors] = useState(attributes.slice(0, 5));
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Calcular el rango dinámico para el eje Y basado en los factores seleccionados
  const calculateYAxisDomain = () => {
    if (selectedFactors.length === 0) return [0, 80]; // Valores por defecto si no hay selección
    
    let minValue = Infinity;
    let maxValue = -Infinity;
    
    // Recorrer todos los periodos y factores para encontrar min/max
    audienceData.forEach(periodData => {
      selectedFactors.forEach(factor => {
        if (periodData[factor] !== undefined) {
          minValue = Math.min(minValue, periodData[factor]);
          maxValue = Math.max(maxValue, periodData[factor]);
        }
      });
    });
    
    // Si no hay datos válidos, usar valores por defecto
    if (minValue === Infinity || maxValue === -Infinity) {
      return [0, 80];
    }
    
    // Añadir margen del 5% en ambos extremos
    const margin = (maxValue - minValue) * 0.05;
    
    // Si el rango es muy pequeño, asegurar un mínimo de 20 puntos para el rango
    if (maxValue - minValue < 20) {
      const centerPoint = (maxValue + minValue) / 2;
      minValue = centerPoint - 10;
      maxValue = centerPoint + 10;
    }
    
    // Redondear a números enteros (hacia abajo para min, hacia arriba para max) para un mejor aspecto visual
    const min = Math.max(0, Math.floor(minValue - margin));
    const max = Math.ceil(maxValue + margin);
    
    return [min, max];
  };
  
  // Obtener el dominio calculado para el eje Y
  const yAxisDomain = calculateYAxisDomain();

  const latest = audienceData[audienceData.length - 1];
  const ranking = attributes.map(attr => ({ 
    name: attr, 
    value: latest[attr],
    color: getAttributeColor(attr)
  }));

  // Función para obtener el color de cada atributo
  function getAttributeColor(attribute) {
    const factorsColors = {
      'Sights / attractions to visit': '#8d1c3e', // Burdeos/vino
      'Good weather / climate': '#d4a017', // Dorado/ocre
      'Relaxation': '#1a4d2e', // Verde oscuro
      'Security / safety': '#b8a88f', // Beige/taupe
      'Accommodation options': '#a63950', // Burgundy más claro
      'Local cuisine / food and drink': '#c97d1a', // Naranja/ocre más oscuro
      'Experiencing something new': '#5d1d41', // Berenjena
      'Culture': '#2a714a', // Verde más claro
      'Fun / excitement': '#e3b951', // Dorado claro
      'Beach / pool': '#d15e82', // Rosa/vino claro
      'Activities / sports': '#6b82b3', // Azul grisáceo
      'Events / excursions': '#89a376', // Verde oliva
      'Fine dining': '#ba6c4b', // Terracota
      'Ease of getting there': '#786d5f', // Gris topo
      'Reviews / recommendations': '#9b8578', // Beige grisáceo
      'Understanding the language': '#b3a394', // Beige claro
      'Time to get there': '#938980', // Gris beige
      'Cost / value-for-money': '#b17a4a', // Marrón claro
      'Familiarity': '#9f9f9f', // Gris medio
      'Family-friendly options': '#8a9e6f', // Verde oliva claro
      'Being pet-friendly': '#c39f76', // Beige dorado
      'Nightlife': '#7a5c7e', // Púrpura grisáceo
      'Time difference': '#a29387', // Taupe grisáceo
    };
    return factorsColors[attribute] || '#8d1c3e';
  }

  // Personalización del tooltip para la gráfica de barras
  const BarTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 shadow-sm rounded-lg text-sm backdrop-blur-sm bg-opacity-90">
          <p className="font-semibold">{payload[0].payload.name}</p>
          <p className="text-gray-700" style={{ color: payload[0].payload.color }}>{`Audience: ${payload[0].value.toFixed(1)}%`}</p>
        </div>
      );
    }
    return null;
  };

  // Personalización del tooltip para la gráfica de líneas
  const LineTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 shadow-sm rounded-lg text-sm backdrop-blur-sm bg-opacity-90">
          <p className="font-semibold">{label}</p>
          {payload.map((entry, index) => (
            <p key={`item-${index}`} style={{ color: entry.stroke }}>
              {`${entry.dataKey}: ${entry.value.toFixed(1)}%`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  // Formatear el valor del eje Y para incluir el símbolo %
  const formatYAxis = (value) => `${value}%`;
  
  // Función para manejar la selección y deselección de factores
  const toggleFactor = (factor) => {
    const newSelection = tempSelectedFactors.includes(factor)
      ? tempSelectedFactors.filter(f => f !== factor)
      : [...tempSelectedFactors, factor];
    
    setTempSelectedFactors(newSelection);
    setSelectedFactors(newSelection); // Aplicar cambios automáticamente
  };
  
  // Función para aplicar los cambios de selección - Ya no es necesaria, pero la mantenemos por si acaso
  const applySelection = () => {
    setSelectedFactors(tempSelectedFactors);
    setDropdownOpen(false);
  };
  
  // Función para limpiar la selección
  const clearSelection = () => {
    const emptySelection = [];
    setTempSelectedFactors(emptySelection);
    setSelectedFactors(emptySelection); // Aplicar cambios automáticamente
  };
  
  // Función para seleccionar todos los factores
  const selectAll = () => {
    const allFactors = [...allAttributes];
    setTempSelectedFactors(allFactors);
    setSelectedFactors(allFactors); // Aplicar cambios automáticamente
  };

  return (
    <div className="w-full">
      <div className="mb-8">
        <h4 className="text-base font-semibold text-gray-700 mb-3">Top Destination Selection Factors — Q3 2024</h4>
        <div className="h-[650px] w-full bg-white p-6 rounded-xl border border-gray-100 shadow-sm backdrop-filter backdrop-blur-sm">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={ranking}
              layout="vertical"
              margin={{
                top: 5,
                right: 30,
                left: 200,
                bottom: 5,
              }}
            >
              <XAxis 
                type="number"
                domain={[0, 80]}
                tickFormatter={formatYAxis}
                axisLine={false}
                tickLine={false}
              />
              <YAxis 
                dataKey="name"
                type="category"
                width={190}
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12 }}
                interval={0}
              />
              <Tooltip content={<BarTooltip />} />
              <Bar dataKey="value" fill="#8884d8" barSize={25} radius={[0, 4, 4, 0]}>
                {ranking.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="mb-6">
        <h4 className="text-base font-semibold text-gray-700 mb-3">Selection Factor Trends — 2023-2024</h4>
        
        {/* Dropdown de selección múltiple */}
        <div className="mb-4 relative">
          <div className="flex items-center">
            <div 
              className="bg-white p-2 border border-gray-300 rounded-md shadow-sm text-sm cursor-pointer flex-grow flex justify-between items-center"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <span className="text-gray-700">
                {selectedFactors.length 
                  ? `${selectedFactors.length} factor${selectedFactors.length > 1 ? 's' : ''} selected` 
                  : 'Select factors to display'}
              </span>
              <svg 
                className={`w-4 h-4 transition-transform ${dropdownOpen ? 'transform rotate-180' : ''}`} 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          
          {dropdownOpen && (
            <div className="absolute z-10 w-full mt-1 bg-white shadow-lg rounded-md border border-gray-300 max-h-60 overflow-y-auto">
              <div className="p-2">
                <div className="flex items-center p-2 border-b border-gray-200 mb-2">
                  <button
                    onClick={selectAll}
                    className="text-[#8d1c3e] text-sm font-medium hover:underline mr-4"
                  >
                    Select All
                  </button>
                  <button
                    onClick={clearSelection}
                    className="text-gray-600 text-sm font-medium hover:underline"
                  >
                    Clear All
                  </button>
                </div>
                
                <div className="grid grid-cols-2">
                  {allAttributes.map((attribute) => (
                    <div key={attribute} className="flex items-center p-2">
                      <input
                        type="checkbox"
                        id={`factor-${attribute}`}
                        checked={tempSelectedFactors.includes(attribute)}
                        onChange={() => toggleFactor(attribute)}
                        className="mr-2 h-4 w-4 text-[#8d1c3e] focus:ring-[#8d1c3e] border-gray-300 rounded"
                      />
                      <label 
                        htmlFor={`factor-${attribute}`}
                        style={{ color: getAttributeColor(attribute) }}
                        className="text-sm cursor-pointer select-none"
                      >
                        {attribute}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
        
        <div className="h-[500px] w-full bg-white p-6 rounded-xl border border-gray-100 shadow-sm backdrop-filter backdrop-blur-sm">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={audienceData}
              margin={{
                top: 20,
                right: 60,
                left: 20,
                bottom: 40,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.3} />
              <XAxis 
                dataKey="quarter" 
                tick={{ fontSize: 12 }}
                tickLine={false}
                axisLine={false}
                padding={{ left: 30, right: 30 }}
              />
              <YAxis
                domain={yAxisDomain}
                tickCount={7}
                tick={{ fontSize: 12 }}
                tickLine={false}
                axisLine={false}
                tickFormatter={formatYAxis}
                label={{ value: 'Audience %', angle: -90, position: 'insideLeft', offset: 0, style: { textAnchor: 'middle', fill: '#666' } }}
              />
              <Tooltip 
                content={<LineTooltip />}
                wrapperStyle={{ zIndex: 1000 }}
              />
              
              {selectedFactors.map((attribute) => (
                <Line 
                  key={attribute}
                  type="monotone" 
                  dataKey={attribute} 
                  name={attribute}
                  stroke={getAttributeColor(attribute)} 
                  strokeWidth={2}
                  dot={{ r: 3, fill: getAttributeColor(attribute), strokeWidth: 1, stroke: "#fff" }}
                  activeDot={{ r: 5, fill: getAttributeColor(attribute), strokeWidth: 0 }}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        <div className="mt-4 grid grid-cols-4 gap-3">
          {selectedFactors.map(factor => (
            <div 
              key={factor} 
              className="flex items-center bg-white p-2 rounded-md border border-gray-100"
            >
              <div 
                className="w-3 h-3 rounded-full mr-2"
                style={{ backgroundColor: getAttributeColor(factor) }}
              ></div>
              <span className="text-xs text-gray-700 truncate" title={factor}>
                {factor}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FactorsInfluencingChoice; 