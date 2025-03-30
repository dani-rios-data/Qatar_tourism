import React, { useState, useRef, useEffect } from "react";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, Cell } from "recharts";

const audienceData = [
  { quarter: "Q1 2023", Accommodation: 49.1, Security: 64.0, Weather: 60.9, Relaxation: 66.8, Attractions: 58.9 },
  { quarter: "Q3 2023", Accommodation: 62.5, Security: 73.8, Weather: 66.4, Relaxation: 64.9, Attractions: 67.5 },
  { quarter: "Q1 2024", Accommodation: 65.1, Security: 65.2, Weather: 70.2, Relaxation: 58.7, Attractions: 71.7 },
  { quarter: "Q3 2024", Accommodation: 45.9, Security: 53.4, Weather: 59.8, Relaxation: 56.8, Attractions: 65.6 },
];

const indexData = [
  { quarter: "Q1 2023", Accommodation: 185.7, Security: 175.2, Weather: 152.9, Relaxation: 191.5, Attractions: 145.0 },
  { quarter: "Q3 2023", Accommodation: 226.3, Security: 187.1, Weather: 158.4, Relaxation: 171.2, Attractions: 160.0 },
  { quarter: "Q1 2024", Accommodation: 223.3, Security: 154.9, Weather: 161.9, Relaxation: 144.7, Attractions: 162.8 },
  { quarter: "Q3 2024", Accommodation: 151.8, Security: 124.5, Weather: 134.5, Relaxation: 136.6, Attractions: 147.0 },
];

const attributes = ["Accommodation", "Security", "Weather", "Relaxation", "Attractions"];

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
  const [selectedAttribute, setSelectedAttribute] = useState("Accommodation");
  const [metric, setMetric] = useState("Audience %");

  const chartData = metric === "Audience %" ? audienceData : indexData;

  const latest = chartData[chartData.length - 1];
  const ranking = attributes.map(attr => ({ 
    name: attr, 
    value: latest[attr],
    color: getAttributeColor(attr)
  })).sort((a, b) => b.value - a.value);

  // Función para obtener el color de cada atributo
  function getAttributeColor(attribute) {
    const factorsColors = {
      'Attractions': '#8d1c3e', // Burdeos/vino
      'Weather': '#d4a017', // Dorado/ocre
      'Relaxation': '#1a4d2e', // Verde oscuro
      'Security': '#b8a88f', // Beige/taupe
      'Accommodation': '#8d1c3e', // Burdeos/vino
    };
    return factorsColors[attribute] || '#8d1c3e';
  }

  // Personalización del tooltip para la gráfica de barras
  const BarTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 shadow-sm rounded-lg text-sm backdrop-blur-sm bg-opacity-90">
          <p className="font-semibold">{payload[0].payload.name}</p>
          <p className="text-gray-700" style={{ color: payload[0].payload.color }}>{`${metric}: ${payload[0].value.toFixed(1)}`}</p>
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
          <p style={{ color: getAttributeColor(selectedAttribute) }}>{`${selectedAttribute}: ${payload[0].value.toFixed(1)}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full">
      {/* Ranking de factores */}
      <div className="mb-6">
        <h4 className="text-base font-semibold text-gray-700 mb-2">Ranking – Q3 2024 ({metric})</h4>
        <div className="h-[300px] w-full bg-white p-6 rounded-xl border border-gray-100 shadow-sm backdrop-filter backdrop-blur-sm">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              layout="vertical"
              data={ranking}
              margin={{
                top: 20,
                right: 30,
                left: 100,
                bottom: 20,
              }}
              barCategoryGap={40}
            >
              <XAxis 
                type="number" 
                domain={[0, metric === "Audience %" ? 80 : 250]} 
                tick={{ fontSize: 12 }}
                tickLine={false}
                axisLine={false}
              />
              <YAxis 
                dataKey="name" 
                type="category" 
                scale="band" 
                tick={{ fontSize: 12 }}
                width={100}
                tickLine={false}
                axisLine={false}
              />
              <Tooltip content={<BarTooltip />} />
              <Bar dataKey="value" barSize={40} radius={[0, 20, 20, 0]}>
                {ranking.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      {/* Tendencia a lo largo del tiempo */}
      <div className="mb-6">
        <h4 className="text-base font-semibold text-gray-700 mb-2">Trend Over Time ({metric})</h4>
        
        {/* Selectores personalizados */}
        <div className="flex gap-4 max-w-xl mb-4">
          <div className="w-1/2">
            <CustomSelect 
              value={selectedAttribute}
              options={attributes}
              onChange={setSelectedAttribute}
            />
          </div>

          <div className="w-1/2">
            <CustomSelect 
              value={metric}
              options={["Audience %", "Index"]}
              onChange={setMetric}
            />
          </div>
        </div>
        
        <div className="h-[300px] w-full bg-white p-6 rounded-xl border border-gray-100 shadow-sm backdrop-filter backdrop-blur-sm">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={chartData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 20,
              }}
            >
              <defs>
                <linearGradient id="colorSelected" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={getAttributeColor(selectedAttribute)} stopOpacity={0.2}/>
                  <stop offset="95%" stopColor={getAttributeColor(selectedAttribute)} stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis 
                dataKey="quarter" 
                tick={{ fontSize: 12 }}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                domain={[0, metric === "Audience %" ? 100 : 250]}
                tickCount={6}
                tick={{ fontSize: 12 }}
                tickLine={false}
                axisLine={false}
              />
              <Tooltip content={<LineTooltip />} />
              <Line 
                type="monotone" 
                dataKey={selectedAttribute} 
                name={selectedAttribute}
                stroke={getAttributeColor(selectedAttribute)} 
                strokeWidth={3}
                dot={{ r: 5, fill: getAttributeColor(selectedAttribute), strokeWidth: 2, stroke: "#fff" }}
                activeDot={{ r: 7, fill: getAttributeColor(selectedAttribute), strokeWidth: 0 }}
                fillOpacity={1}
                fill="url(#colorSelected)"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      <div className="bg-amber-50 p-5 rounded-lg border border-amber-100 mt-6">
        <h5 className="text-lg font-semibold text-amber-800 mb-2">Key Insight</h5>
        <p className="text-gray-700 mb-3">
          Attractions, weather, and relaxation opportunities are the top factors 
          influencing destination choices for premium travelers. Qatar's marketing should highlight 
          these aspects to appeal to target audiences.
        </p>
      </div>
    </div>
  );
};

export default FactorsInfluencingChoice; 