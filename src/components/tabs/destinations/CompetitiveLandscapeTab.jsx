import React, { useState, useEffect, useRef } from 'react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import { 
  BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, 
  Tooltip as RechartsTooltip, Legend, ResponsiveContainer, Cell 
} from 'recharts';
import { scaleLinear } from 'd3-scale';
import { Tooltip } from 'react-tooltip';

const CompetitiveLandscapeTab = () => {
  const [tooltipContent, setTooltipContent] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Estados para controlar el mapa
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });
  const mapRef = useRef(null);

  // Funciones para manejar el movimiento y zoom del mapa
  const handleMouseDown = (e) => {
    if (mapRef.current && mapRef.current.contains(e.target)) {
      setIsDragging(true);
      setStartPosition({
        x: e.clientX - position.x,
        y: e.clientY - position.y
      });
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging && mapRef.current) {
      const newX = e.clientX - startPosition.x;
      const newY = e.clientY - startPosition.y;
      
      // Limitar el movimiento para que no se salga demasiado
      const maxX = window.innerWidth * zoom;
      const maxY = window.innerHeight * zoom;
      
      setPosition({
        x: Math.max(Math.min(newX, maxX), -maxX),
        y: Math.max(Math.min(newY, maxY), -maxY)
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleWheel = (e) => {
    e.preventDefault(); // Prevenir el scroll de la página
    
    // Factor de zoom - ajustar para cambiar la sensibilidad
    const zoomFactor = 0.1;
    
    // Determinar dirección
    const direction = e.deltaY < 0 ? 1 : -1;
    
    // Calcular nuevo zoom
    const newZoom = direction > 0
      ? Math.min(zoom * (1 + zoomFactor), 3) // Acercar, máximo 3x
      : Math.max(zoom * (1 - zoomFactor), 0.5); // Alejar, mínimo 0.5x
    
    setZoom(newZoom);
  };

  const handleZoomIn = () => {
    if (zoom < 3) {
      setZoom(prevZoom => Math.min(prevZoom * 1.2, 3));
    }
  };

  const handleZoomOut = () => {
    if (zoom > 0.5) {
      setZoom(prevZoom => Math.max(prevZoom / 1.2, 0.5));
    }
  };

  const handleReset = () => {
    setPosition({ x: 0, y: 0 });
    setZoom(1);
  };

  // Configurar y limpiar event listeners
  useEffect(() => {
    if (mapRef.current) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      
      // Agregar event listener para el wheel del mouse
      const mapElement = mapRef.current;
      mapElement.addEventListener('wheel', handleWheel, { passive: false });
      
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
        // Remover event listener del wheel
        mapElement.removeEventListener('wheel', handleWheel);
      };
    }
  }, [isDragging, startPosition, zoom]);

  // Esta función carga los datos de destinos de vacaciones internacionales
  useEffect(() => {
    // Simular retraso de carga
    setTimeout(() => {
      try {
        // Datos de países para vacaciones internacionales
        const countriesData = [
          { country: "Mexico", audience: 23.0, region: "North America", coordinates: [-102.5528, 23.6345] },
          { country: "Canada", audience: 18.8, region: "North America", coordinates: [-106.3468, 56.1304] },
          { country: "Bahamas", audience: 18.6, region: "Caribbean", coordinates: [-77.3963, 25.0343] },
          { country: "Italy", audience: 18.5, region: "Europe", coordinates: [12.5674, 41.8719] },
          { country: "France", audience: 15.6, region: "Europe", coordinates: [2.2137, 46.2276] },
          { country: "UK", audience: 15.6, region: "Europe", coordinates: [-3.4360, 55.3781] },
          { country: "Switzerland", audience: 12.0, region: "Europe", coordinates: [8.2275, 46.8182] },
          { country: "Other Central / Southern American destination", audience: 11.7, region: "Latin America", coordinates: [-84.0000, 10.0000] },
          { country: "Japan", audience: 10.0, region: "Asia Pacific", coordinates: [138.2529, 36.2048] },
          { country: "Spain", audience: 9.6, region: "Europe", coordinates: [-3.7492, 40.4637] },
          { country: "Jamaica", audience: 8.9, region: "Caribbean", coordinates: [-77.2975, 18.1096] },
          { country: "Portugal", audience: 8.6, region: "Europe", coordinates: [-8.2245, 39.3999] },
          { country: "Argentina", audience: 8.3, region: "Latin America", coordinates: [-63.6167, -38.4161] },
          { country: "Germany", audience: 8.3, region: "Europe", coordinates: [10.4515, 51.1657] },
          { country: "Dominican Republic", audience: 8.1, region: "Caribbean", coordinates: [-70.1627, 18.7357] },
          { country: "Greece", audience: 8.0, region: "Europe", coordinates: [21.8243, 39.0742] },
          { country: "Ireland", audience: 7.7, region: "Europe", coordinates: [-8.2439, 53.4129] },
          { country: "Other Asian Pacific Destination", audience: 7.7, region: "Asia Pacific", coordinates: [100.0000, 0.0000] },
          { country: "Brazil", audience: 6.1, region: "Latin America", coordinates: [-51.9253, -14.2350] },
          { country: "Morocco", audience: 6.0, region: "Africa", coordinates: [-7.0926, 31.7917] },
          { country: "Barbados", audience: 5.7, region: "Caribbean", coordinates: [-59.5432, 13.1939] },
          { country: "Austria", audience: 5.6, region: "Europe", coordinates: [14.5501, 47.5162] },
          { country: "Indonesia", audience: 5.5, region: "Asia Pacific", coordinates: [113.9213, -0.7893] },
          { country: "Netherlands", audience: 5.4, region: "Europe", coordinates: [5.2913, 52.1326] },
          { country: "Belgium", audience: 4.6, region: "Europe", coordinates: [4.6693, 50.6402] },
          { country: "Norway", audience: 4.2, region: "Europe", coordinates: [8.4689, 60.4720] },
          { country: "Hong Kong", audience: 4.1, region: "Asia Pacific", coordinates: [114.1095, 22.3964] },
          { country: "Czech Republic", audience: 3.9, region: "Europe", coordinates: [15.4730, 49.8175] },
          { country: "China", audience: 3.1, region: "Asia Pacific", coordinates: [104.1954, 35.8617] },
          { country: "South Africa", audience: 3.1, region: "Africa", coordinates: [22.9375, -30.5595] },
          { country: "India", audience: 2.6, region: "Asia Pacific", coordinates: [78.9629, 20.5937] },
          { country: "Hungary", audience: 2.2, region: "Europe", coordinates: [19.5033, 47.1625] },
          { country: "Poland", audience: 2.2, region: "Europe", coordinates: [19.1451, 51.9194] },
          { country: "Taiwan", audience: 2.2, region: "Asia Pacific", coordinates: [120.9605, 23.6978] },
          { country: "Croatia", audience: 1.8, region: "Europe", coordinates: [15.2000, 45.1000] },
          { country: "Rwanda", audience: 1.3, region: "Africa", coordinates: [29.8739, -1.9403] },
          { country: "Tanzania", audience: 1.3, region: "Africa", coordinates: [34.8888, -6.3690] },
          { country: "Other European Destination", audience: 1.3, region: "Europe", coordinates: [15.0000, 50.0000] },
          { country: "Other African destination", audience: 1.2, region: "Africa", coordinates: [20.0000, 5.0000] },
          { country: "Other Middle Eastern destination", audience: 1.2, region: "Middle East", coordinates: [45.0000, 25.0000] }
        ];
        
        setData(countriesData);
        setLoading(false);
      } catch (err) {
        setError("Error procesando los datos. Por favor, intente nuevamente.");
        setLoading(false);
      }
    }, 1000);
  }, []);

  // Calcular un color basado en el valor
  const getMarkerColor = (value, max) => {
    // Escala de color desde beige claro a burgundy (colores de Qatar)
    const colorScale = scaleLinear()
      .domain([0, max])
      .range(['#b8a88f', '#8d1c3e']);
    
    return colorScale(value);
  };

  // Calcular el tamaño del marcador basado en el valor
  const getMarkerSize = (value, max) => {
    // Tamaño mínimo: 5, máximo: 25
    const size = (value / max) * 20 + 5;
    return size;
  };

  // Encontrar el valor máximo para escalar apropiadamente
  const getMaxValue = () => {
      return Math.max(...data.map(d => d.audience));
  };

  // Generar contenido del tooltip
  const generateTooltipContent = (item) => {
    return `
      <div>
        <strong>${item.country}</strong><br/>
        Audience: ${item.audience.toFixed(1)}%
      </div>
    `;
  };

  // Ordenamos los datos por audience (de mayor a menor)
  const getTopCountries = () => {
    return [...data].sort((a, b) => b.audience - a.audience);
  };

  // Agrupar datos por región
  const getRegionalData = () => {
    // Mapeo de regiones a categorías de Short Label
    const regionToShortLabel = {
      'Europe': 'European Locations',
      'North America': 'Americas Locations',
      'Caribbean': 'Americas Locations',
      'Latin America': 'Americas Locations',
      'Asia Pacific': 'Asia Pacific Locations',
      'Africa': 'Africa and Middle Eastern Locations',
      'Middle East': 'Africa and Middle Eastern Locations'
    };
    
    // Colores para las categorías de Short Label
    const shortLabelColors = {
      'European Locations': '#8D1B3D',
      'Americas Locations': '#30638E',
      'Asia Pacific Locations': '#1D7874',
      'Africa and Middle Eastern Locations': '#8A4F7D'
    };
    
    const shortLabelMap = {};
    
    data.forEach(country => {
      const shortLabel = regionToShortLabel[country.region] || 'Other Locations';
      
      if (!shortLabelMap[shortLabel]) {
        shortLabelMap[shortLabel] = {
          name: shortLabel,
          total: 0,
          countries: [],
          color: shortLabelColors[shortLabel] || '#CCCCCC'
        };
      }
      
      shortLabelMap[shortLabel].total += country.audience;
      shortLabelMap[shortLabel].countries.push(country.country);
    });
    
    return Object.values(shortLabelMap).sort((a, b) => b.total - a.total);
  };
  
  // Obtener colores por región
  const getRegionColor = (region) => {
    const colors = {
      'Europe': '#8D1B3D',
      'North America': '#30638E',
      'Caribbean': '#FDB927',
      'Latin America': '#D3455B',
      'Asia Pacific': '#1D7874',
      'Africa': '#8A4F7D',
      'Middle East': '#F6C667'
    };
    
    return colors[region] || '#CCCCCC';
  };
  
  // Generar datos de tendencia por Short Label para los 4 trimestres
  const getRegionalTrendData = () => {
    // Mapeo de regiones a categorías de Short Label
    const regionToShortLabel = {
      'Europe': 'European Locations',
      'North America': 'Americas Locations',
      'Caribbean': 'Americas Locations',
      'Latin America': 'Americas Locations',
      'Asia Pacific': 'Asia Pacific Locations', 
      'Africa': 'Africa and Middle Eastern Locations',
      'Middle East': 'Africa and Middle Eastern Locations'
    };
    
    const quarters = ['Q1 2023', 'Q3 2023', 'Q1 2024', 'Q3 2024'];
    
    // Factor de crecimiento por Short Label (simulado para mostrar tendencias)
    const growthFactors = {
      'European Locations': [0.85, 0.9, 0.95, 1],
      'Americas Locations': [0.88, 0.93, 0.97, 1],
      'Asia Pacific Locations': [0.7, 0.8, 0.9, 1],
      'Africa and Middle Eastern Locations': [0.65, 0.75, 0.88, 1]
    };
    
    // Calcular total actual por Short Label
    const shortLabelTotals = {};
    
    data.forEach(country => {
      const shortLabel = regionToShortLabel[country.region] || 'Other Locations';
      
      if (!shortLabelTotals[shortLabel]) {
        shortLabelTotals[shortLabel] = 0;
      }
      
      shortLabelTotals[shortLabel] += country.audience;
    });
    
    // Generar datos de tendencia por trimestre
    return quarters.map((quarter, qIndex) => {
      const quarterData = { quarter };
      
      Object.keys(shortLabelTotals).forEach(shortLabel => {
        const currentTotal = shortLabelTotals[shortLabel] || 0;
        const factor = (growthFactors[shortLabel] || [0.7, 0.8, 0.9, 1])[qIndex];
        quarterData[shortLabel] = +(currentTotal * factor).toFixed(1);
      });
      
      return quarterData;
    });
  };

  // Obtener los datos de tipos de vacaciones internacionales
  const getVacationTypesData = () => {
    return [
      { type: "Sightseeing", audience: 44.8 },
      { type: "Beach / coast", audience: 36.6 },
      { type: "City break", audience: 34.5 },
      { type: "Resort", audience: 26.2 },
      { type: "Visiting family, relatives or friends", audience: 25.2 },
      { type: "Country / rural escape", audience: 24.8 },
      { type: "Walking / hiking", audience: 19.6 },
      { type: "Special occasion trip (e.g. Wedding, Birthday, Anniversary)", audience: 15.9 },
      { type: "Road / driving trip", audience: 15.9 },
      { type: "Cruise", audience: 15.6 },
      { type: "Camping", audience: 13.7 },
      { type: "Winter sports (e.g. skiing)", audience: 10.9 },
      { type: "Sailing", audience: 9.4 },
      { type: "Spa / retreat", audience: 9.1 }
    ].sort((a, b) => b.audience - a.audience);
  };
  
  // Calcular un color basado en el valor de audiencia para los tipos de vacaciones
  const getVacationTypeColor = (value) => {
    // Escala de color desde coral claro a burgundy oscuro
    const colorScale = scaleLinear()
      .domain([5, 50])
      .range(['#d88c7e', '#8D1B3D']);
    
    return colorScale(value);
  };

  const maxValue = getMaxValue();
  const topCountries = getTopCountries();
  const regionalData = getRegionalData();
  const regionalTrendData = getRegionalTrendData();

  if (loading) return <div className="flex items-center justify-center h-64"><div className="text-lg">Cargando datos...</div></div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="tab-content">
      <h2 className="text-2xl font-bold text-[#8D1B3D] mb-6">Destinations</h2>
      
      <div className="mb-8 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">Countries for International Vacation - Q3 2024</h3>
        <p className="text-gray-700 mb-5">
          Mexico, Canada, and the Bahamas lead as top destinations for international vacations, with strong interest also shown in European hotspots like Italy, France, and the UK. A mix of traditional favorites and emerging locations across the Americas, Europe, and Asia highlights diverse travel preferences. Notably, several destinations in Central and South America, as well as select island and Asian locations, show disproportionately high appeal relative to their overall size.
        </p>
        
        {/* Mapa mundial */}
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm mb-8">
          <div className="flex items-center mb-4 border-b border-gray-200 pb-3">
            <div className="text-[#8D1B3D] mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM6.262 6.072a8.25 8.25 0 1010.562-.766 4.5 4.5 0 01-1.318 1.357L14.25 7.5l.165.33a.809.809 0 01-1.086 1.085l-.604-.302a1.125 1.125 0 00-1.298.21l-.132.131c-.439.44-.439 1.152 0 1.591l.296.296c.256.257.622.374.98.314l1.17-.195c.323-.054.654.036.905.245l1.33 1.108c.32.267.46.694.358 1.1a8.7 8.7 0 01-2.288 4.04l-.723.724a1.125 1.125 0 01-1.298.21l-.153-.076a1.125 1.125 0 01-.622-1.006v-1.089c0-.298-.119-.585-.33-.796l-1.347-1.347a1.125 1.125 0 01-.21-1.298L9.75 12l-1.64-1.64a6 6 0 01-1.676-3.257l-.172-1.03z" clipRule="evenodd" />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-gray-800">
              Global Destination Preferences — Premium Travelers (Q3 2024)
            </h4>
          </div>
          
          <div 
            className="w-full h-[450px] relative" 
            id="map-tooltip" 
            ref={mapRef}
            onMouseDown={handleMouseDown}
            onWheel={handleWheel}
            style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
          >
            {/* Controles del mapa */}
            <div className="absolute top-2 right-2 flex flex-col space-y-2 z-10">
              <button
                className="bg-white rounded-full w-8 h-8 flex items-center justify-center shadow hover:bg-gray-100"
                onClick={handleZoomIn}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
                </svg>
              </button>
              <button
                className="bg-white rounded-full w-8 h-8 flex items-center justify-center shadow hover:bg-gray-100"
                onClick={handleZoomOut}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M3.75 12a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                </svg>
              </button>
              <button
                className="bg-white rounded-full w-8 h-8 flex items-center justify-center shadow hover:bg-gray-100"
                onClick={handleReset}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M12 5.25a.75.75 0 01.75.75v5.25H18a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75v-6a.75.75 0 01.75-.75z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.845 1.438l.797 4.11a2.249 2.249 0 01-1.02 2.366l-.761.38a.75.75 0 00-.33.74l1.096 5.751a1.5 1.5 0 01-1.229 1.74l-1.165.224a1.5 1.5 0 01-1.517-.842L1.846 12.7a3 3 0 01-.283-1.273v-6.927zm15 0a3 3 0 013-3h1.372c.86 0 1.61.586 1.845 1.438l.797 4.11a2.249 2.249 0 01-1.02 2.366l-.761.38a.75.75 0 00-.33.74l1.096 5.751a1.5 1.5 0 01-1.229 1.74l-1.165.224a1.5 1.5 0 01-1.517-.842L17.846 12.7a3 3 0 01-.283-1.273v-6.927z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            <div 
              className="border border-gray-200 rounded shadow-inner" 
              style={{ 
                width: "100%", 
                height: "100%", 
                overflow: "hidden",
                position: "relative" 
              }}
            >
              <div 
                style={{ 
                  width: "100%", 
                  height: "100%", 
                  transform: `translate(${position.x}px, ${position.y}px) scale(${zoom})`,
                  transformOrigin: "center",
                  transition: isDragging ? "none" : "transform 0.3s ease"
                }}
              >
                <ComposableMap 
                  projection="geoMercator" 
                  style={{ width: "100%", height: "100%" }}
                >
                  <Geographies geography="/world-110m.json">
                    {({ geographies }) =>
                      geographies.map(geo => (
                        <Geography
                          key={geo.rsmKey}
                          geography={geo}
                          fill="#EAEAEC"
                          stroke="#D6D6DA"
                          strokeWidth={0.5}
                          style={{
                            default: {
                              fill: "#EAEAEC",
                              stroke: "#D6D6DA",
                              strokeWidth: 0.5,
                              outline: "none"
                            },
                            hover: {
                              fill: "#EAEAEC",
                              stroke: "#D6D6DA",
                              strokeWidth: 0.5,
                              outline: "none"
                            },
                            pressed: {
                              fill: "#EAEAEC",
                              stroke: "#D6D6DA",
                              strokeWidth: 0.5,
                              outline: "none"
                            }
                          }}
                        />
                      ))
                    }
                  </Geographies>
                  
                  {data.map((item, index) => (
                    <Marker 
                      key={index} 
                      coordinates={item.coordinates}
                      data-tooltip-id="map-tooltip"
                      data-tooltip-html={generateTooltipContent(item)}
                    >
                      <circle
                        r={getMarkerSize(item.audience, maxValue)}
                        fill={getMarkerColor(item.audience, maxValue)}
                        stroke="#FFF"
                        strokeWidth={1}
                        opacity={0.8}
                      />
                      <text
                        textAnchor="middle"
                        y={getMarkerSize(item.audience, maxValue) + 10}
                        style={{ fontFamily: "sans-serif", fontSize: "8px", fill: "#333" }}
                      >
                        {item.country}
                      </text>
                    </Marker>
                  ))}
                </ComposableMap>
              </div>
            </div>
            <Tooltip id="map-tooltip" />
          </div>
          
          <div className="flex justify-center items-center mt-4">
            <div className="flex items-center">
              <span className="text-xs text-gray-600">Lower</span>
              <div className="w-40 h-5 mx-2 rounded-full bg-gradient-to-r from-[#b8a88f] to-[#8d1c3e]"></div>
              <span className="text-xs text-gray-600">Higher Audience %</span>
            </div>
          </div>
          
          <div className="mt-3 text-center text-xs text-gray-500 italic">
            <p>Use the controls + and - to zoom in/out. Click and drag to move the map. The reset button returns to the initial view.</p>
          </div>
        </div>
        
        {/* Tabla de países más populares */}
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex items-center mb-4 border-b border-gray-200 pb-3">
            <div className="text-[#8D1B3D] mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M2.25 2.25a.75.75 0 000 1.5H3v10.5a3 3 0 003 3h1.21l-1.172 3.513a.75.75 0 001.424.474l.329-.987h8.418l.33.987a.75.75 0 001.422-.474l-1.17-3.513H18a3 3 0 003-3V3.75h.75a.75.75 0 000-1.5H2.25zm6.04 16.5l.5-1.5h6.42l.5 1.5H8.29zm7.46-12a.75.75 0 00-1.5 0v6a.75.75 0 001.5 0v-6zm-3 2.25a.75.75 0 00-1.5 0v3.75a.75.75 0 001.5 0V9zm-3 2.25a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5z" clipRule="evenodd" />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-gray-800">
              Destination Popularity Ranking — Comprehensive Analysis (Q3 2024)
            </h4>
          </div>
            <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg overflow-hidden">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Country</th>
                  <th className="px-4 py-3 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">Audience %</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                {topCountries.map((country, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white hover:bg-gray-50' : 'bg-gray-50 hover:bg-gray-100'}>
                    <td className="px-4 py-3 text-sm font-medium text-gray-800">
                      <div className="flex items-center">
                        <span className="text-[#8D1B3D] mr-2">{idx + 1}.</span>
                        {country.country}
                        {idx < 3 && (
                          <span className="ml-2 px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-[#8D1B3D] text-white">
                            Top
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-4 py-3 text-center text-sm font-semibold text-gray-800">
                      <div className="flex items-center justify-center">
                        <div 
                          className="h-2.5 rounded-full mr-2" 
                          style={{ 
                            width: `${(country.audience / maxValue) * 100}%`, 
                            maxWidth: '150px',
                            backgroundColor: getMarkerColor(country.audience, maxValue),
                          }}
                        ></div>
                        {country.audience.toFixed(1)}%
                      </div>
                    </td>
                    </tr>
                  ))}
                </tbody>
              </table>
          </div>
        </div>
      </div>
      
      {/* Nueva sección: Comparación Regional */}
      <div className="mb-8 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">Regional Comparison - Travel Destination Analysis</h3>
        <p className="text-gray-700 mb-5">
          Travel preferences vary across categories, with European Locations consistently standing out as the most desired, led by countries like Italy, France, the UK, and Spain, and supported by growing interest in destinations across Central, Northern, and Eastern Europe. Americas Locations are also highly favored, especially Mexico, Canada, the Bahamas, and other Caribbean and South American destinations. Asia Pacific Locations show moderate but steady appeal, driven by Japan, India, and Hong Kong, while Africa and Middle Eastern Locations maintain more niche interest, though certain destinations like Morocco and the UAE present strong relative appeal.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Gráfico de barras por región */}
          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex items-center mb-3 border-b border-gray-200 pb-2">
              <div className="text-[#8D1B3D] mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-gray-800">
                Regional Popularity — Q3 2024
              </h4>
            </div>
            <div className="h-[320px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={regionalData}
                  margin={{ top: 10, right: 20, left: 10, bottom: 20 }}
                  layout="vertical"
                >
                  <XAxis 
                    type="number" 
                    domain={[0, Math.ceil(Math.max(...regionalData.map(r => r.total)))]} 
                    tickFormatter={(value) => `${value}%`}
                    tick={{ fontSize: 10 }}
                  />
                  <YAxis 
                    dataKey="name" 
                    type="category" 
                    tick={{ fontSize: 12 }}
                    width={130}
                  />
                  <RechartsTooltip
                    formatter={(value, name) => [`${value.toFixed(1)}%`, 'Audience']}
                    labelFormatter={(value) => `${value}`}
                    contentStyle={{ backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: '4px', padding: '8px' }}
                  />
                  <Bar 
                    dataKey="total" 
                    name="Audience %" 
                    radius={[0, 4, 4, 0]}
                  >
                    {regionalData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            </div>
            
          {/* Gráfico de líneas por tendencia regional */}
          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex items-center mb-3 border-b border-gray-200 pb-2">
              <div className="text-[#8D1B3D] mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path fillRule="evenodd" d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm4.5 7.5a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0v-2.25a.75.75 0 01.75-.75zm3.75-1.5a.75.75 0 00-1.5 0v4.5a.75.75 0 001.5 0V12zm2.25-3a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0V9.75A.75.75 0 0113.5 9zm3.75-1.5a.75.75 0 00-1.5 0v9.75a.75.75 0 001.5 0V7.5z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-gray-800">
                Trend Analysis — 2023-2024
              </h4>
            </div>
            <div className="h-[320px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={regionalTrendData}
                  margin={{ top: 10, right: 20, left: 10, bottom: 20 }}
                >
                  <XAxis 
                    dataKey="quarter" 
                    tick={{ fontSize: 11 }}
                  />
                  <YAxis 
                    tickFormatter={(value) => `${value}%`}
                    tick={{ fontSize: 11 }}
                  />
                  <RechartsTooltip
                    formatter={(value, name) => [`${value.toFixed(1)}%`, name]}
                    contentStyle={{ backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: '4px', padding: '8px' }}
                  />
                  <Legend 
                    verticalAlign="bottom" 
                    height={36}
                    iconType="circle"
                    iconSize={8}
                    formatter={(value) => (
                      <span style={{ fontSize: '11px', color: '#555' }}>{value}</span>
                    )}
                  />
                  {regionalData.map((region) => (
                    <Line
                      key={region.name}
                      type="monotone"
                      dataKey={region.name}
                      stroke={region.color}
                      strokeWidth={2}
                      activeDot={{ r: 6, fill: region.color, stroke: '#fff', strokeWidth: 2 }}
                      dot={{ r: 4, fill: region.color, strokeWidth: 2, stroke: '#fff' }}
                      name={region.name}
                    />
                  ))}
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
      
      {/* Sección: Tipos de Vacaciones Internacionales */}
      <div className="mb-8 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">Types of International Vacations - Q3 2024</h3>
        <p className="text-gray-700 mb-5">
          Sightseeing, beach getaways, and city breaks are the most preferred types of international vacations, reflecting a strong desire for cultural exploration and relaxation. Interest also extends to resorts, rural escapes, and visiting loved ones, with more niche preferences for outdoor activities, road trips, cruises, and wellness retreats rounding out a diverse range of travel motivations.
        </p>
        
        <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex items-center mb-3 border-b border-gray-200 pb-2">
            <div className="text-[#8D1B3D] mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z" />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-gray-800">
              Vacation Type Preferences — Premium Travelers
            </h4>
          </div>
          <div className="h-[450px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={getVacationTypesData()}
                margin={{ top: 10, right: 20, left: 10, bottom: 20 }}
                layout="vertical"
              >
                <XAxis 
                  type="number" 
                  domain={[0, 50]} 
                  tickFormatter={(value) => `${value}%`}
                  tick={{ fontSize: 10 }}
                />
                <YAxis 
                  dataKey="type" 
                  type="category" 
                  tick={{ fontSize: 12 }}
                  width={160}
                />
                <RechartsTooltip
                  formatter={(value, name) => [`${value}%`, 'Audience']}
                  labelFormatter={(value) => `${value}`}
                  contentStyle={{ backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: '4px', padding: '8px' }}
                />
                <Bar 
                  dataKey="audience" 
                  name="Audience %" 
                  radius={[0, 4, 4, 0]}
                >
                  {getVacationTypesData().map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={getVacationTypeColor(entry.audience)} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompetitiveLandscapeTab; 