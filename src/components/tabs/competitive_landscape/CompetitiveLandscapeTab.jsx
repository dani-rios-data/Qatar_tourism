import React, { useState, useEffect, useRef } from 'react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import { scaleLinear } from 'd3-scale';
import { Tooltip } from 'react-tooltip';
import HotelChainsAnalysis from './sections/HotelChainsAnalysis';

const CompetitiveLandscapeTab = () => {
  const [tooltipContent, setTooltipContent] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [viewMode, setViewMode] = useState('audience'); // 'audience' or 'index'
  
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

  // Esta función simula la carga y procesamiento de datos reales
  // En una implementación real, procesaría los datos del Excel
  useEffect(() => {
    // Simular retraso de carga
    setTimeout(() => {
      try {
        // Datos de ejemplo: En la implementación real, estos serían cargados del archivo Excel
        // Formato: { airline: nombre de la aerolínea, 
        //            audience: porcentaje de audiencia, 
        //            index: valor de índice, 
        //            hub: ciudad hub principal,
        //            region: región del mundo,
        //            country: país base,
        //            coordinates: [longitud, latitud] de la ubicación hub
        //          }
        const sampleData = [
          { 
            airline: "Qatar Airways", 
            audience: 32.5, 
            index: 285.7, 
            hub: "Doha", 
            region: "Middle East", 
            country: "Qatar",
            coordinates: [51.5310, 25.2866]
          },
          { 
            airline: "Emirates", 
            audience: 29.3, 
            index: 263.1, 
            hub: "Dubai", 
            region: "Middle East", 
            country: "UAE",
            coordinates: [55.3047, 25.2697]
          },
          { 
            airline: "Lufthansa", 
            audience: 25.8, 
            index: 187.2, 
            hub: "Frankfurt", 
            region: "Europe", 
            country: "Germany",
            coordinates: [8.5622, 50.0379]
          },
          { 
            airline: "British Airways", 
            audience: 23.4, 
            index: 172.4, 
            hub: "London", 
            region: "Europe", 
            country: "United Kingdom",
            coordinates: [-0.4543, 51.4700]
          },
          { 
            airline: "Singapore Airlines", 
            audience: 21.7, 
            index: 195.6, 
            hub: "Singapore", 
            region: "Asia", 
            country: "Singapore",
            coordinates: [103.9915, 1.3644]
          },
          { 
            airline: "KLM Royal Dutch Airlines", 
            audience: 18.9, 
            index: 155.8, 
            hub: "Amsterdam", 
            region: "Europe", 
            country: "Netherlands",
            coordinates: [4.7634, 52.3105]
          },
          { 
            airline: "Air France", 
            audience: 17.2, 
            index: 149.3, 
            hub: "Paris", 
            region: "Europe", 
            country: "France",
            coordinates: [2.5533, 49.0097]
          },
          { 
            airline: "Etihad Airways", 
            audience: 16.8, 
            index: 184.7, 
            hub: "Abu Dhabi", 
            region: "Middle East", 
            country: "UAE",
            coordinates: [54.6410, 24.4281]
          },
          { 
            airline: "Turkish Airlines", 
            audience: 15.3, 
            index: 142.1, 
            hub: "Istanbul", 
            region: "Europe/Middle East", 
            country: "Turkey",
            coordinates: [28.8110, 40.9766]
          },
          { 
            airline: "Cathay Pacific", 
            audience: 14.7, 
            index: 168.5, 
            hub: "Hong Kong", 
            region: "Asia", 
            country: "China (SAR)",
            coordinates: [113.9448, 22.3080]
          },
          { 
            airline: "Delta Air Lines", 
            audience: 13.2, 
            index: 95.4, 
            hub: "Atlanta", 
            region: "North America", 
            country: "USA",
            coordinates: [-84.4277, 33.6407]
          },
          { 
            airline: "American Airlines", 
            audience: 12.8, 
            index: 89.3, 
            hub: "Dallas", 
            region: "North America", 
            country: "USA",
            coordinates: [-97.0403, 32.8998]
          },
          { 
            airline: "Japan Airlines", 
            audience: 10.5, 
            index: 132.6, 
            hub: "Tokyo", 
            region: "Asia", 
            country: "Japan",
            coordinates: [139.7797, 35.5493]
          },
          { 
            airline: "LATAM", 
            audience: 9.3, 
            index: 87.5, 
            hub: "Sao Paulo", 
            region: "South America", 
            country: "Brazil",
            coordinates: [-46.6527, -23.4264]
          },
          { 
            airline: "Air Canada", 
            audience: 8.7, 
            index: 76.2, 
            hub: "Toronto", 
            region: "North America", 
            country: "Canada",
            coordinates: [-79.6218, 43.6777]
          }
        ];
        
        setData(sampleData);
        setLoading(false);
      } catch (err) {
        setError("Error procesando los datos. Por favor, intente nuevamente.");
        setLoading(false);
      }
    }, 1000);
  }, []);

  // Crear mapas de regiones para análisis regional
  const getRegionalData = () => {
    const regions = {};
    
    // Agrupar datos por región
    data.forEach(item => {
      if (!regions[item.region]) {
        regions[item.region] = {
          audienceTotal: 0,
          indexAvg: 0,
          airlines: [],
          coordinates: item.coordinates, // Usamos las coordenadas del primer ítem como representativas
          countries: new Set()
        };
      }
      
      regions[item.region].audienceTotal += item.audience;
      regions[item.region].indexAvg += item.index;
      regions[item.region].airlines.push(item.airline);
      regions[item.region].countries.add(item.country);
    });
    
    // Calcular promedios para el índice
    Object.keys(regions).forEach(region => {
      regions[region].indexAvg = regions[region].indexAvg / regions[region].airlines.length;
      regions[region].countries = Array.from(regions[region].countries);
    });
    
    return regions;
  };

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
    if (viewMode === 'audience') {
      return Math.max(...data.map(d => d.audience));
    } else {
      return Math.max(...data.map(d => d.index));
    }
  };

  // Generar contenido del tooltip
  const generateTooltipContent = (item) => {
    return `
      <div>
        <strong>${item.airline}</strong><br/>
        Hub: ${item.hub}, ${item.country}<br/>
        Audience: ${item.audience.toFixed(1)}%<br/>
        Index: ${item.index.toFixed(1)}
      </div>
    `;
  };

  // Generar contenido del tooltip para regiones
  const generateRegionTooltipContent = (region, data) => {
    return `
      <div>
        <strong>${region}</strong><br/>
        Total Audience: ${data.audienceTotal.toFixed(1)}%<br/>
        Avg. Index: ${data.indexAvg.toFixed(1)}<br/>
        Countries: ${data.countries.join(', ')}<br/>
        Airlines: ${data.airlines.join(', ')}
      </div>
    `;
  };

  // Agrupar por región para el análisis
  const regionalAnalysis = getRegionalData();

  // Encontrar regiones competidoras basadas en audiencia e índice
  const getTopCompetitors = () => {
    // Ordenar por audiencia total
    const regionsByAudience = Object.entries(regionalAnalysis)
      .filter(([region]) => region !== "Middle East") // Excluir Middle East (Qatar)
      .sort((a, b) => b[1].audienceTotal - a[1].audienceTotal);
    
    // Ordenar por índice promedio
    const regionsByIndex = Object.entries(regionalAnalysis)
      .filter(([region]) => region !== "Middle East") // Excluir Middle East (Qatar)
      .sort((a, b) => b[1].indexAvg - a[1].indexAvg);
    
    return {
      byAudience: regionsByAudience.slice(0, 3), // Top 3 por audiencia
      byIndex: regionsByIndex.slice(0, 3) // Top 3 por índice
    };
  };
  
  // Obtener compañías aéreas de Qatar para análisis comparativo
  const getQatarCompetition = () => {
    return data.filter(item => item.country === "Qatar");
  };

  const maxValue = getMaxValue();
  const topCompetitors = getTopCompetitors();
  const qatarAirlines = getQatarCompetition();

  if (loading) return <div className="flex items-center justify-center h-64"><div className="text-lg">Cargando datos...</div></div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="tab-content">
      <h2 className="text-2xl font-bold text-[#8D1B3D] mb-6">Competitive Landscape</h2>
      
      <div className="p-6 bg-white rounded-lg shadow-sm">
        <h1 className="text-xl font-bold text-gray-800 mb-4">Airlines Considered by Premium Travelers</h1>
        
        <div className="mb-6">
          <p className="text-gray-600">
            This analysis maps the airlines considered by premium travelers to identify which destinations 
            Qatar is competing with. Each airline's primary hub indicates a key competing destination.
          </p>
        </div>
        
        {/* Control de visualización */}
        <div className="flex items-center mb-6">
          <span className="mr-2 text-gray-700 font-medium">View Mode:</span>
          <div className="inline-flex rounded-md shadow-sm">
            <button
              className={`px-4 py-2 text-sm font-medium rounded-l-lg border ${
                viewMode === 'audience' 
                  ? 'bg-[#8d1c3e] text-white border-[#8d1c3e]' 
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
              }`}
              onClick={() => setViewMode('audience')}
            >
              Audience %
            </button>
            <button
              className={`px-4 py-2 text-sm font-medium rounded-r-lg border ${
                viewMode === 'index' 
                  ? 'bg-[#8d1c3e] text-white border-[#8d1c3e]' 
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
              }`}
              onClick={() => setViewMode('index')}
            >
              Index
            </button>
          </div>
        </div>
        
        {/* Mapa mundial */}
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4 text-center">
            Airlines Considered by Premium Travelers - {viewMode === 'audience' ? 'Audience %' : 'Index'} Heat Map
          </h2>
          
          <div 
            className="w-full h-96 relative" 
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
              className="border border-gray-200 rounded" 
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
                        r={getMarkerSize(viewMode === 'audience' ? item.audience : item.index, maxValue)}
                        fill={getMarkerColor(viewMode === 'audience' ? item.audience : item.index, maxValue)}
                        stroke="#FFF"
                        strokeWidth={1}
                        opacity={0.8}
                      />
                      <text
                        textAnchor="middle"
                        y={getMarkerSize(viewMode === 'audience' ? item.audience : item.index, maxValue) + 10}
                        style={{ fontFamily: "sans-serif", fontSize: "8px", fill: "#333" }}
                      >
                        {item.hub}
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
              <div className="w-32 h-4 mx-2 bg-gradient-to-r from-[#b8a88f] to-[#8d1c3e]"></div>
              <span className="text-xs text-gray-600">Higher {viewMode === 'audience' ? 'Audience %' : 'Index'}</span>
            </div>
          </div>
          
          <div className="mt-2 text-center text-xs text-gray-500">
            <p>Use los controles + y - para acercar/alejar. Haga clic y arrastre para mover el mapa. El botón de restablecer vuelve a la vista inicial.</p>
          </div>
        </div>
        
        {/* Tabla de regiones competidoras */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-700 mb-3">Top Regional Competitors by Audience</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-3 py-2 text-left text-xs font-medium text-gray-700">Region</th>
                    <th className="px-2 py-2 text-center text-xs font-medium text-gray-700">Total Audience</th>
                    <th className="px-2 py-2 text-center text-xs font-medium text-gray-700">Key Countries</th>
                    <th className="px-2 py-2 text-center text-xs font-medium text-gray-700">Key Airlines</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {topCompetitors.byAudience.map(([region, data], idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-3 py-2 text-xs font-medium text-gray-800">{region}</td>
                      <td className="px-2 py-2 text-center text-xs text-gray-800">{data.audienceTotal.toFixed(1)}%</td>
                      <td className="px-2 py-2 text-xs text-gray-800">{data.countries.join(', ')}</td>
                      <td className="px-2 py-2 text-xs text-gray-800">{data.airlines.slice(0, 3).join(', ')}</td>
                  </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-700 mb-3">Top Regional Competitors by Index</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-3 py-2 text-left text-xs font-medium text-gray-700">Region</th>
                    <th className="px-2 py-2 text-center text-xs font-medium text-gray-700">Average Index</th>
                    <th className="px-2 py-2 text-center text-xs font-medium text-gray-700">Key Countries</th>
                    <th className="px-2 py-2 text-center text-xs font-medium text-gray-700">Key Airlines</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {topCompetitors.byIndex.map(([region, data], idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-3 py-2 text-xs font-medium text-gray-800">{region}</td>
                      <td className="px-2 py-2 text-center text-xs text-gray-800">{data.indexAvg.toFixed(1)}</td>
                      <td className="px-2 py-2 text-xs text-gray-800">{data.countries.join(', ')}</td>
                      <td className="px-2 py-2 text-xs text-gray-800">{data.airlines.slice(0, 3).join(', ')}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
          </div>
        </div>
      </div>
      
        {/* Insights */}
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-3">Key Competitive Insights</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-[#8d1c3e] mr-2 text-lg">•</span>
              <span><strong>Primary Competition:</strong> Europe emerges as Qatar's main competitor for premium travelers, 
              with major hubs in Frankfurt, London, and Amsterdam attracting significant attention.</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#1a4d2e] mr-2 text-lg">•</span>
              <span><strong>Regional Rivals:</strong> Within the Middle East, UAE-based carriers (Emirates, Etihad) 
              represent the strongest direct competition, with Dubai serving as the primary competing destination hub.</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#b8a88f] mr-2 text-lg">•</span>
              <span><strong>Asian Opportunity:</strong> Singapore and Hong Kong show strong index values relative to 
              their audience share, indicating distinctive appeal to premium travelers that Qatar could learn from.</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#d4a017] mr-2 text-lg">•</span>
              <span><strong>Relative Strength:</strong> Qatar Airways shows a higher index value than many competitors, 
              indicating strong preference among premium travelers who consider it.</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#8d1c3e] mr-2 text-lg">•</span>
              <span><strong>Less Competitive Regions:</strong> North and South American carriers (and by extension, destinations) 
              show lower index values, suggesting these regions are not as strongly positioned for premium travelers from this market.</span>
            </li>
          </ul>
            </div>
            
        {/* Recommendations */}
        <div className="bg-[#f9f7f3] p-4 rounded-lg border border-[#b8a88f]">
          <h2 className="text-lg font-semibold text-[#8d1c3e] mb-3">Strategic Recommendations for Qatar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-medium text-[#1a4d2e] mb-2">Competitive Positioning</h3>
              <ul className="list-disc ml-6 text-gray-700 space-y-1">
                <li>
                  <span className="font-semibold">European Connection Strategy:</span> Develop stronger positioning against 
                  European carriers by emphasizing Qatar's geographic advantage as a hub between Europe and Asia/Australia.
                </li>
                <li>
                  <span className="font-semibold">UAE Differentiation:</span> Create clearer differentiation from UAE-based 
                  carriers through distinct service elements and destination experiences unique to Qatar.
                </li>
                <li>
                  <span className="font-semibold">Asian Service Elements:</span> Incorporate successful premium service 
                  elements from Asian carriers like Singapore Airlines (high index) to enhance perception.
                </li>
                <li>
                  <span className="font-semibold">Secondary Markets:</span> Develop routes to underserved destinations 
                  that premium travelers value but aren't well-served by current competitors.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-[#1a4d2e] mb-2">Destination Enhancement</h3>
              <ul className="list-disc ml-6 text-gray-700 space-y-1">
                <li>
                  <span className="font-semibold">Destination Development:</span> Enhance Doha's appeal as more than a 
                  transit hub by developing unique premium experiences that rival Dubai and Singapore.
                </li>
                <li>
                  <span className="font-semibold">Stopover Programs:</span> Create premium-focused stopover programs 
                  highlighting Qatar's cultural and luxury offerings to compete with UAE stopover experiences.
                </li>
                <li>
                  <span className="font-semibold">Exclusive Access:</span> Offer premium travelers exclusive access to 
                  cultural sites, events and experiences that can't be replicated in competing destinations.
                </li>
                <li>
                  <span className="font-semibold">Beyond the Airport:</span> Extend Qatar's renowned airport experience 
                  to the entire journey, creating seamless luxury from origin to final destination.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Hotel Chains Analysis Section */}
      <div className="mt-10">
        <HotelChainsAnalysis />
      </div>
    </div>
  );
};

export default CompetitiveLandscapeTab; 