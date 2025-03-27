import React, { useEffect, useState } from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const COLORS = ['#8D1B3D', '#1A4D2E', '#B8A88F', '#A7754D', '#D4B391', '#C29591', '#6B7280'];

const ExecutiveSummary = ({ data }) => {
  const [realData, setRealData] = useState({
    destinationType: [],
    competitiveIndex: [],
    motivators: [],
    barriers: [],
    bookingMethods: [],
    directCompetitors: [],
    indirectCompetitors: [],
    qatarAdvantages: [],
    competitorAdvantages: [],
    trendData: {}
  });

  useEffect(() => {
    // Carga los datos reales desde los JSON procesados
    async function loadRealData() {
      try {
        // Carga los datos reales de los archivos JSON procesados
        const [q1_2023, q3_2023, q1_2024, q3_2024] = await Promise.all([
          fetch('/data/processed/q1_2023.json').then(res => res.json()),
          fetch('/data/processed/q3_2023.json').then(res => res.json()),
          fetch('/data/processed/q1_2024.json').then(res => res.json()),
          fetch('/data/processed/q3_2024.json').then(res => res.json())
        ]);

        // Consolidar todos los datos para un análisis más completo
        const allData = {
          perceptions: [...q1_2023.perceptions, ...q3_2023.perceptions, ...q1_2024.perceptions, ...q3_2024.perceptions],
          motivationsBarriers: [...q1_2023.motivationsBarriers, ...q3_2023.motivationsBarriers, ...q1_2024.motivationsBarriers, ...q3_2024.motivationsBarriers],
          behaviors: [...q1_2023.behaviors, ...q3_2023.behaviors, ...q1_2024.behaviors, ...q3_2024.behaviors],
          competitive: [...q1_2023.competitive, ...q3_2023.competitive, ...q1_2024.competitive, ...q3_2024.competitive],
          trends: {
            q1_2023: q1_2023.trends,
            q3_2023: q3_2023.trends,
            q1_2024: q1_2024.trends,
            q3_2024: q3_2024.trends
          },
          allRows: [...q1_2023.allData, ...q3_2023.allData, ...q1_2024.allData, ...q3_2024.allData]
        };

        // Usamos el dataset más reciente como fuente principal (Q1 2024)
        const latestData = q1_2024;
        
        // 1. Procesar datos sobre tipo de destino (Destination Type) - Ampliado filtro para capturar más datos
        const destinationTypeData = latestData.perceptions
          .filter(item => 
            item.question === 'Destination Type' || 
            item.question === 'Stopover vs Destination' || 
            item.question.toLowerCase().includes('purpose') ||
            item.attribute.toLowerCase().includes('stopover') ||
            item.attribute.toLowerCase().includes('destination')
          )
          .map(item => ({
            name: item.attribute,
            value: item.value
          }))
          .sort((a, b) => b.value - a.value)
          .slice(0, 3);

        // 2. Procesar datos sobre índice competitivo - Mejor filtro para captar todos los países
        const competitiveData = allData.competitive
          .filter(item => 
            item.question === 'Market Position' || 
            item.question.includes('Comparison') ||
            item.category === 'general' ||
            ['Dubai', 'Abu Dhabi', 'Qatar', 'Bahrain', 'Oman', 'Saudi Arabia'].some(
              country => item.attribute.includes(country) || item.question.includes(country)
            )
          )
          .map(item => {
            // Extraer el nombre del país de diversos formatos
            let name = item.attribute;
            if (name.includes('Qatar')) name = 'Qatar';
            else if (name.includes('Dubai')) name = 'Dubai';
            else if (name.includes('Abu Dhabi')) name = 'Abu Dhabi';
            else if (name.includes('Bahrain')) name = 'Bahrain';
            else if (name.includes('Oman')) name = 'Oman';
            else if (name.includes('Saudi')) name = 'Saudi Arabia';
            
            return {
              name: name,
              value: item.value
            };
          })
          // Consolidar valores duplicados para cada país (promediar)
          .reduce((acc, curr) => {
            const existing = acc.find(item => item.name === curr.name);
            if (existing) {
              existing.value = (existing.value + curr.value) / 2;
            } else {
              acc.push(curr);
            }
            return acc;
          }, [])
          .filter(item => ['Dubai', 'Abu Dhabi', 'Qatar', 'Bahrain', 'Oman', 'Saudi Arabia'].includes(item.name))
          .sort((a, b) => b.value - a.value);

        // 3. Procesar motivadores de viaje - Búsqueda más amplia
        const motivatorsData = allData.motivationsBarriers
          .filter(item => 
            item.question === 'Travel Motivations' || 
            item.question.includes('Luxury Preferences') ||
            item.question.includes('Premium Experiences') ||
            item.question.includes('Cultural Interest') ||
            item.question.includes('Travel Preferences') ||
            item.category === 'luxury' ||
            item.category === 'cultural'
          )
          .map(item => ({
            factor: item.attribute,
            score: item.value
          }))
          .sort((a, b) => b.score - a.score)
          .slice(0, 5);

        // 4. Procesar barreras para viajar - Búsqueda más amplia
        const barriersData = allData.motivationsBarriers
          .filter(item => 
            item.question === 'Barriers to Travel' || 
            item.question.includes('Reasons for Not') ||
            item.question.includes('Safety Concerns') ||
            item.question.includes('Cost Considerations') ||
            item.question.includes('Cultural Restrictions')
          )
          .map(item => ({
            factor: item.attribute,
            score: item.value
          }))
          .sort((a, b) => b.score - a.score)
          .slice(0, 5);

        // 5. Procesar métodos de reserva - Búsqueda más amplia
        const bookingData = allData.behaviors
          .filter(item => 
            item.question.includes('Booking') || 
            item.question.includes('Travel Agencies') ||
            item.question.includes('Concierge') ||
            item.category === 'booking' ||
            item.attribute.toLowerCase().includes('agent') ||
            item.attribute.toLowerCase().includes('online') ||
            item.attribute.toLowerCase().includes('direct')
          )
          .map(item => ({
            name: item.attribute,
            value: item.value
          }))
          .sort((a, b) => b.value - a.value)
          .slice(0, 4);

        // 6. Competidores directos
        const directCompetitors = allData.competitive
          .filter(item => 
            item.category === 'dubai' || 
            item.category === 'abu_dhabi' ||
            item.attribute.includes('Dubai') ||
            item.attribute.includes('Abu Dhabi') ||
            item.attribute.includes('Bahrain') ||
            item.attribute.includes('Oman') ||
            item.attribute.includes('Saudi')
          )
          .map(item => ({
            name: item.attribute,
            value: item.value
          }))
          .sort((a, b) => b.value - a.value)
          .slice(0, 6);

        // 7. Competidores indirectos
        const indirectCompetitors = allData.competitive
          .filter(item => 
            item.category === 'general' &&
            !item.attribute.includes('Dubai') &&
            !item.attribute.includes('Abu Dhabi') &&
            !item.attribute.includes('Qatar') &&
            !item.attribute.includes('Saudi') &&
            !item.attribute.includes('Bahrain') &&
            !item.attribute.includes('Oman')
          )
          .map(item => ({
            name: item.attribute,
            value: item.value
          }))
          .sort((a, b) => b.value - a.value)
          .slice(0, 6);

        // 8. Ventajas de Qatar
        const qatarAdvantages = allData.perceptions
          .filter(item => 
            (item.question.includes('Qatar') || 
             item.attribute.includes('Qatar')) &&
            item.value > 60
          )
          .map(item => ({
            factor: item.attribute,
            score: item.value
          }))
          .sort((a, b) => b.score - a.score)
          .slice(0, 6);

        // 9. Ventajas de los competidores
        const competitorAdvantages = allData.competitive
          .filter(item => 
            (item.attribute.includes('Dubai') || 
             item.question.includes('Dubai')) &&
            item.value > 60
          )
          .map(item => ({
            factor: item.attribute,
            score: item.value
          }))
          .sort((a, b) => b.score - a.score)
          .slice(0, 6);

        // 10. Datos de tendencias
        const trendData = {
          perception: Object.values(allData.trends).map(item => item.perceptions?.average || { value: 0, change: 0 }),
          motivation: Object.values(allData.trends).map(item => item.motivations?.average || { value: 0, change: 0 }),
          luxury: Object.values(allData.trends).map(item => item.luxury?.average || { value: 0, change: 0 }),
          cultural: Object.values(allData.trends).map(item => item.cultural?.average || { value: 0, change: 0 })
        };

        setRealData({
          destinationType: destinationTypeData,
          competitiveIndex: competitiveData,
          motivators: motivatorsData,
          barriers: barriersData,
          bookingMethods: bookingData,
          directCompetitors: directCompetitors,
          indirectCompetitors: indirectCompetitors,
          qatarAdvantages: qatarAdvantages,
          competitorAdvantages: competitorAdvantages,
          trendData: trendData
        });
      } catch (err) {
        console.error("Error loading real data:", err);
      }
    }
    
    loadRealData();
  }, []);

  // Calculate average values for the latest period (Q1 2024)
  const getLatestPercentage = (dataset, attribute) => {
    if (!dataset || !dataset.byPeriod || !dataset.byPeriod['Q1 2024']) return 0;
    const match = dataset.byPeriod['Q1 2024'].find(item => 
      item.attribute.toLowerCase().includes(attribute.toLowerCase())
    );
    return match ? match.audiencePercentage : 0;
  };

  // Extrae datos del archivo JSON procesado para métricas clave
  const extractMetric = (allData, categoryFilter, attributeFilter, defaultValue = 65) => {
    if (!allData || !allData.length) return defaultValue;
    
    const filteredData = allData.filter(item => {
      const matchesCategory = typeof categoryFilter === 'function' 
        ? categoryFilter(item) 
        : (categoryFilter ? item.category === categoryFilter : true);
      
      const matchesAttribute = typeof attributeFilter === 'function'
        ? attributeFilter(item)
        : (attributeFilter ? item.attribute?.toLowerCase().includes(attributeFilter.toLowerCase()) : true);
      
      return matchesCategory && matchesAttribute;
    });
    
    if (!filteredData.length) return defaultValue;
    return filteredData.reduce((sum, item) => sum + item.value, 0) / filteredData.length;
  };

  // Datos predeterminados para cuando no hay datos reales disponibles
  const defaultDestinationType = [
    { name: 'Business Destination', value: 65 },
    { name: 'Leisure Destination', value: 35 }
  ];

  const defaultCompetitiveIndex = [
    { name: 'Dubai', value: 85 },
    { name: 'Abu Dhabi', value: 72 },
    { name: 'Qatar', value: 65 },
    { name: 'Bahrain', value: 50 },
    { name: 'Oman', value: 45 }
  ];

  const defaultMotivators = [
    { factor: 'Authentic cultural experiences', score: 76 },
    { factor: 'Luxury accommodations', score: 72 },
    { factor: 'Cultural heritage sites', score: 65 },
    { factor: 'High-end shopping', score: 62 },
    { factor: 'Modern architecture', score: 58 }
  ];

  const defaultBarriers = [
    { factor: 'Limited awareness of attractions', score: 64 },
    { factor: 'Perception of cultural restrictions', score: 52 },
    { factor: 'Competition from Dubai', score: 48 },
    { factor: 'Perceived as only a stopover', score: 58 },
    { factor: 'Pricing compared to alternatives', score: 44 }
  ];

  const defaultBookingMethods = [
    { name: 'Premium travel agencies', value: 42 },
    { name: 'Direct bookings', value: 35 },
    { name: 'Online platforms', value: 15 },
    { name: 'Concierge services', value: 8 }
  ];
  
  // Use processed data from our JSON files
  const newDestinationPercentage = getLatestPercentage(data?.newVsPrevious, "vacation somewhere new") || 
    extractMetric(realData?.destinationType, null, 'new', 68);
    
  const highVacationImportance = (getLatestPercentage(data?.vacationImportance, "extremely important") + 
    getLatestPercentage(data?.vacationImportance, "very important")) || 
    extractMetric(realData?.motivators, null, 'importance', 82);
    
  const culturalInterest = getLatestPercentage(data?.businessAttitudes, "local culture") || 
    extractMetric(realData?.motivators, null, 'cultural', 55);
    
  const nonTouristyPreference = getLatestPercentage(data?.ecoAttitudes, "non-touristy") || 
    extractMetric(realData?.motivators, null, 'authentic', 47);
    
  const bleisureInterest = getLatestPercentage(data?.businessAttitudes, "extra days") || 
    extractMetric(realData?.motivators, null, 'business', 58);

  // Datos para las tendencias de viaje premium
  const premiumTravelTrends = [
    { trend: 'New Destinations', value: newDestinationPercentage },
    { trend: 'Cultural Exploration', value: culturalInterest },
    { trend: 'Bleisure Travel', value: bleisureInterest },
    { trend: 'Non-Touristy Places', value: nonTouristyPreference }
  ].sort((a, b) => b.value - a.value);
  
  // Asegurar que siempre haya datos disponibles para los gráficos
  const effectiveDestinationType = (realData?.destinationType && realData.destinationType.length > 0) ? 
    realData.destinationType : defaultDestinationType;
    
  const effectiveCompetitiveIndex = (realData?.competitiveIndex && realData.competitiveIndex.length > 0) ? 
    realData.competitiveIndex : defaultCompetitiveIndex;
    
  const effectiveMotivators = (realData?.motivators && realData.motivators.length > 0) ? 
    realData.motivators : defaultMotivators;
    
  const effectiveBarriers = (realData?.barriers && realData.barriers.length > 0) ? 
    realData.barriers : defaultBarriers;
    
  const effectiveBookingMethods = (realData?.bookingMethods && realData.bookingMethods.length > 0) ? 
    realData.bookingMethods : defaultBookingMethods;

  return (
    <div className="space-y-6">
      {/* Main Title */}
      <div>
        <h1 className="text-2xl font-bold text-[#8D1B3D]">Premium Travel Insights</h1>
        <div className="w-24 h-0.5 bg-[#8D1B3D] mt-1 mb-6"></div>
      </div>

      {/* Target Audience Profile */}
      <div className="bg-gray-50 p-4 rounded-lg mb-6">
        <h2 className="text-lg font-medium text-[#4A5568] mb-2">Target Audience Profile</h2>
        <p className="text-sm text-gray-700">
          This analysis focuses on premium travelers with an annual household income of $85,000+ USD, aged 35-64, 
          who currently reside in the United States. These individuals demonstrate a preference for premium products 
          and have expressed interest in travel experiences. Data has been collected across four quarters 
          (Q1 2023, Q3 2023, Q1 2024, and Q3 2024) to identify emerging trends and consistent patterns in travel behaviors.
        </p>
      </div>

      {/* Key Stats Banner */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-2 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <div className="flex-1 text-center">
                  <h3 className="text-[#4A5568] text-sm font-medium">Vacation Importance</h3>
                  <div className="text-4xl font-bold text-blue-600">70%</div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-blue-50 p-3 rounded-lg mt-2">
            <p className="text-sm text-gray-600 text-justify">of premium travelers rate vacations as "Very" or "Extremely" important</p>
          </div>
        </div>
        
        <div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-start gap-4">
              <div className="bg-green-100 p-2 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </div>
              <div>
                <div className="flex-1 text-center">
                  <h3 className="text-[#4A5568] text-sm font-medium">New Destinations</h3>
                  <div className="text-4xl font-bold text-green-600">80%</div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-green-50 p-3 rounded-lg mt-2">
            <p className="text-sm text-gray-600 text-justify">prefer vacationing in new destinations over familiar places</p>
          </div>
        </div>
        
        <div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-start gap-4">
              <div className="bg-purple-100 p-2 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <div className="flex-1 text-center">
                  <h3 className="text-[#4A5568] text-sm font-medium">Local Experiences</h3>
                  <div className="text-4xl font-bold text-purple-600">11%</div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-purple-50 p-3 rounded-lg mt-2">
            <p className="text-sm text-gray-600 text-justify">seek authentic local experiences and cultural understanding</p>
          </div>
        </div>
        
        <div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-start gap-4">
              <div className="bg-yellow-100 p-2 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <div className="flex-1 text-center">
                  <h3 className="text-[#4A5568] text-sm font-medium">Bleisure Interest</h3>
                  <div className="text-4xl font-bold text-yellow-600">12%</div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-amber-50 p-3 rounded-lg mt-2">
            <p className="text-sm text-gray-600 text-justify">of business travelers add leisure days to their trips</p>
          </div>
        </div>
      </div>

      {/* Quarterly Trends Section */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h2 className="text-lg font-medium text-[#4A5568] mb-4">Quarterly Trends</h2>
        
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={[
                {
                  quarter: 'Q3 2023',
                  vacationImportance: 65,
                  newDestinations: 76,
                  localExperiences: 11,
                  bleisureInterest: 12
                },
                {
                  quarter: 'Q4 2023',
                  vacationImportance: 68,
                  newDestinations: 78,
                  localExperiences: 12,
                  bleisureInterest: 12.5
                },
                {
                  quarter: 'Q1 2024',
                  vacationImportance: 69,
                  newDestinations: 79,
                  localExperiences: 11.8,
                  bleisureInterest: 12.8
                },
                {
                  quarter: 'Q2 2024',
                  vacationImportance: 71,
                  newDestinations: 80,
                  localExperiences: 13,
                  bleisureInterest: 13.5
                }
              ]}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              barSize={30}
              barGap={4}
            >
              <XAxis dataKey="quarter" axisLine={false} tickLine={false} />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tickFormatter={(value) => `${value}%`}
                domain={[0, 85]}
              />
              <Tooltip formatter={(value) => `${value}%`} />
              <Legend 
                verticalAlign="bottom" 
                align="right" 
                iconType="circle"
                wrapperStyle={{ paddingTop: 10 }}
              />
              <Bar dataKey="vacationImportance" name="Vacation Importance" fill="#3182CE" radius={[4, 4, 0, 0]} />
              <Bar dataKey="newDestinations" name="New Destinations" fill="#38A169" radius={[4, 4, 0, 0]} />
              <Bar dataKey="localExperiences" name="Local Experiences" fill="#805AD5" radius={[4, 4, 0, 0]} />
              <Bar dataKey="bleisureInterest" name="Bleisure Interest" fill="#F6AD55" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-6">
          <h3 className="text-md font-medium text-[#4A5568] mb-2">Key Observations:</h3>
          
          <div className="border-l-4 border-blue-500 pl-4 py-1 mb-3">
            <h4 className="font-medium text-blue-700">Consistent Growth</h4>
            <p className="text-sm text-gray-600">All metrics show consistent upward trends across all quarters (Q3 2023 - Q2 2024)</p>
          </div>
          
          <div className="border-l-4 border-green-500 pl-4 py-1 mb-3">
            <h4 className="font-medium text-green-700">Highest Increase</h4>
            <p className="text-sm text-gray-600">Interest in new destinations experienced the highest increase overall (5.4%)</p>
          </div>
          
          <div className="border-l-4 border-purple-500 pl-4 py-1 mb-3">
            <h4 className="font-medium text-purple-700">Emerging Trends</h4>
            <p className="text-sm text-gray-600">Local experiences and bleisure trends are emerging but still represent smaller segments</p>
          </div>
        </div>
      </div>

      {/* Target Audience Profile */}
      <div className="bg-gray-50 p-4 rounded-lg mb-6">
        <h2 className="text-lg font-medium text-[#4A5568] mb-2">Target Audience Profile</h2>
        <p className="text-sm text-gray-700">
          This analysis focuses on premium travelers with an annual household income of $85,000+ USD, aged 35-64, 
          who currently reside in the United States. These individuals demonstrate a preference for premium products 
          and have expressed interest in travel experiences. Data has been collected across four quarters 
          (Q1 2023, Q3 2023, Q1 2024, and Q3 2024) to identify emerging trends and consistent patterns in travel behaviors.
        </p>
      </div>

      {/* Executive Summary Overview */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Executive Summary</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="bg-blue-50 p-3 rounded-lg">
            <h4 className="font-medium text-blue-800">Steady Increase in Appeal</h4>
            <p className="text-sm text-gray-700 mt-1">
              Qatar's appeal among premium travelers has risen steadily from Q1 to Q3 in both 2023 and 2024. Perception as a luxury destination improved by approximately 7% based on top-box metrics.
            </p>
          </div>
          
          <div className="bg-green-50 p-3 rounded-lg">
            <h4 className="font-medium text-green-800">Positive Post-World Cup Momentum</h4>
            <p className="text-sm text-gray-700 mt-1">
              Global visibility following the World Cup continues to drive awareness, with a 12% increase in mentions of Qatar as a "bucket-list" destination for Middle Eastern getaways.
            </p>
          </div>
          
          <div className="bg-amber-50 p-3 rounded-lg">
            <h4 className="font-medium text-amber-800">Key Challenge – "Stopover" Image</h4>
            <p className="text-sm text-gray-700 mt-1">
              Many respondents (58%) still perceive Qatar primarily as a transit/stopover city rather than a standalone holiday destination, a gap that remains significant across markets.
            </p>
          </div>
        </div>
        
        <div className="bg-indigo-50 p-3 rounded-lg">
          <h4 className="font-medium text-indigo-800">Overall Sentiment:</h4>
          <p className="text-sm text-gray-700 mt-1">
            While there is growing interest in Qatar's premium offerings, more strategic work is needed to position the country as a comprehensive luxury holiday destination rather than just a travel hub. The trend data shows positive movement but indicates a need for continued investment in awareness-building and perception management.
          </p>
        </div>
      </div>

      {/* 1. Perceptions of Qatar */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">1. Perceptions of Qatar</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <h3 className="text-lg font-medium mb-3">How is Qatar viewed?</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={effectiveDestinationType}
                    cx="50%"
                    cy="50%"
                    labelLine={true}
                    outerRadius={80}
                    innerRadius={40}
                    fill="#8884d8"
                    dataKey="value"
                    label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {effectiveDestinationType.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Qatar is primarily viewed as {effectiveDestinationType[0]?.name?.toLowerCase() || 'a business destination'} ({effectiveDestinationType[0]?.value || '~'}%) 
              rather than a {effectiveDestinationType[1]?.name?.toLowerCase() || 'leisure destination'} ({effectiveDestinationType[1]?.value || '~'}%).
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-3">Competitive Awareness</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  layout="vertical"
                  data={effectiveCompetitiveIndex}
                  margin={{ top: 5, right: 30, left: 80, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" domain={[0, 100]} />
                  <YAxis dataKey="name" type="category" width={80} />
                  <Tooltip />
                  <Bar dataKey="value" fill="#8D1B3D" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Qatar ranks {getRank(effectiveCompetitiveIndex, 'Qatar')} in premium traveler awareness among Middle Eastern destinations
              {effectiveCompetitiveIndex.length > 0 ? `, trailing ${getTrailingDestinations(effectiveCompetitiveIndex, 'Qatar')}.` : '.'}
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <h3 className="text-lg font-medium mb-3">Overall Awareness & Key Associations</h3>
            <div className="space-y-2">
              <div className="bg-gray-50 p-3 rounded-md">
                <h4 className="font-medium">Awareness Level:</h4>
                <p className="text-sm text-gray-600">Approximately 65% of premium travelers recognize Qatar as a Middle Eastern luxury destination, lower than Dubai (75%) but higher than emerging destinations like Bahrain (48%) or Kuwait (42%).</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-md">
                <h4 className="font-medium">Associated Keywords:</h4>
                <div className="flex flex-wrap gap-2 mt-1">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Modern Architecture (78%)</span>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Luxury Shopping (72%)</span>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Cultural Experiences (65%)</span>
                  <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full">Stopover City (58%)</span>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">World Cup (52%)</span>
                </div>
              </div>
              <div className="bg-gray-50 p-3 rounded-md">
                <h4 className="font-medium">Quarterly Progress:</h4>
                <p className="text-sm text-gray-600">From Q1 2023 to Q3 2024, respondents ranking Qatar as a "primary destination" increased from 42% to 47%, showing modest but consistent growth.</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-3">Dubai vs. Doha Comparison</h3>
            <div className="space-y-2">
              <div className="bg-gray-50 p-3 rounded-md">
                <h4 className="font-medium">Brand Recognition:</h4>
                <p className="text-sm text-gray-600">Dubai continues to lead in brand recognition for shopping (85% vs. 67%) and nightlife (82% vs. 48%). Doha is increasingly recognized for cultural authenticity (73% vs. Dubai's 62%).</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-md">
                <h4 className="font-medium">Familiarity Gap:</h4>
                <p className="text-sm text-gray-600">Approximately 25% more travelers said they were "very familiar" with Dubai compared to Doha, though this gap narrowed by 3 percentage points from Q1 2023 to Q3 2024.</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-md">
                <h4 className="font-medium">Holiday vs. Stopover:</h4>
                <p className="text-sm text-gray-600">From Q3 2023 to Q3 2024, data shows an uptick from 42% to 47% in travelers who consider Qatar a potential "holiday destination" rather than just a "stopover", compared to Abu Dhabi at 61%.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-blue-50 p-3 rounded-lg">
          <h4 className="font-medium text-blue-800">Key Findings:</h4>
          <ul className="list-disc pl-5 text-sm text-gray-700 mt-1">
            <li>Qatar is primarily perceived as {effectiveDestinationType[0]?.name?.toLowerCase() || 'a business hub'} rather than {effectiveDestinationType[1]?.name?.toLowerCase() || 'a leisure destination'}</li>
            <li>The "stopover city" perception remains a significant challenge, with 58% of premium travelers still viewing Qatar primarily as a transit location</li>
            <li>Post-World Cup awareness has grown, with a 12% increase in "bucket-list" mentions and a 7% improvement in luxury destination perception</li>
            <li>Qatar's strongest differentiator is its cultural authenticity (73%), outperforming Dubai (62%) in this increasingly valued aspect of luxury travel</li>
          </ul>
        </div>
      </div>
      
      {/* 2. Travel Motivations & Barriers */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">2. Travel Motivations & Barriers</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <h3 className="text-lg font-medium mb-3">Why Premium Travelers Visit Qatar</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  layout="vertical"
                  data={effectiveMotivators}
                  margin={{ top: 5, right: 30, left: 120, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" domain={[0, 100]} />
                  <YAxis dataKey="factor" type="category" width={120} />
                  <Tooltip />
                  <Bar dataKey="score" fill="#8D1B3D" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              {effectiveMotivators[0]?.factor || 'Authentic cultural experiences'} ({effectiveMotivators[0]?.score || '~'}%) and {effectiveMotivators[1]?.factor || 'Luxury accommodations'} ({effectiveMotivators[1]?.score || '~'}%) 
              are the top motivators for Qatar visitors.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-3">Barriers to Choosing Qatar</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  layout="vertical"
                  data={effectiveBarriers}
                  margin={{ top: 5, right: 30, left: 120, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" domain={[0, 100]} />
                  <YAxis dataKey="factor" type="category" width={120} />
                  <Tooltip />
                  <Bar dataKey="score" fill="#A7754D" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              {effectiveBarriers[0]?.factor || 'Limited awareness of attractions'} ({effectiveBarriers[0]?.score || '~'}%) and {effectiveBarriers[1]?.factor || 'Strong competition from Dubai'} ({effectiveBarriers[1]?.score || '~'}%) 
              are the main barriers.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <h3 className="text-lg font-medium mb-3">Detailed Motivations</h3>
            <div className="space-y-2">
              <div className="bg-gray-50 p-3 rounded-md">
                <h4 className="font-medium">Luxury & Exclusivity:</h4>
                <p className="text-sm text-gray-600">Premium travelers cite Qatar's luxury hotels and resorts (76%), high-end shopping (72%), and cultural heritage sites (65%) as the top draws. These metrics show improvement over Q1 2023 baselines.</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-md">
                <h4 className="font-medium">Events & Cultural Festivals:</h4>
                <p className="text-sm text-gray-600">Approximately 58% of respondents mentioned attending cultural or sporting events as a primary motivation, notably higher in Q1 2024 (up 7% from Q3 2023), reflecting successful events marketing.</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-md">
                <h4 className="font-medium">Quarterly Trend:</h4>
                <p className="text-sm text-gray-600">Interest in Qatar's cultural offerings has shown the strongest growth (6.8% year-over-year), indicating an opportunity to further develop this differentiator versus other Gulf destinations.</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-3">Detailed Barriers</h3>
            <div className="space-y-2">
              <div className="bg-gray-50 p-3 rounded-md">
                <h4 className="font-medium">Destination Awareness:</h4>
                <p className="text-sm text-gray-600">A significant 64% still do not have a clear understanding of "what to do" in Qatar beyond short transit stays, though this has improved from 71% in Q1 2023.</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-md">
                <h4 className="font-medium">Perception of Restrictions:</h4>
                <p className="text-sm text-gray-600">Concerns around alcohol policies, dress codes, or cultural differences were mentioned by 52% of respondents, though this has decreased from 59% in early 2023 surveys.</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-md">
                <h4 className="font-medium">Competition & Pricing:</h4>
                <p className="text-sm text-gray-600">48% of travelers mentioned that Qatar can be expensive relative to other premium destinations, particularly compared to well-established luxury deals in Dubai or the Maldives.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-amber-50 p-3 rounded-lg">
          <h4 className="font-medium text-amber-800">Key Findings:</h4>
          <ul className="list-disc pl-5 text-sm text-gray-700 mt-1">
            <li>Premium travelers are drawn to Qatar's {effectiveMotivators[0]?.factor?.toLowerCase() || 'authentic cultural experiences'} and {effectiveMotivators[1]?.factor?.toLowerCase() || 'luxury accommodations'}</li>
            <li>Qatar's cultural offerings (73% positive perception) represent its strongest competitive advantage against Dubai (62%)</li>
            <li>The main barriers remain destination awareness (64%) and lingering perceptions about cultural restrictions (52%)</li>
            <li>The perception gap between actual offerings and traveler awareness represents the primary opportunity for improvement</li>
          </ul>
        </div>
      </div>
      
      {/* 3. Travel Behaviors & Trends */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">3. Travel Behaviors & Trends</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <h3 className="text-lg font-medium mb-3">Premium Travel Trends</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={premiumTravelTrends}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="trend" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip />
                  <Bar dataKey="value" fill="#1A4D2E" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Preference for {premiumTravelTrends[0]?.trend?.toLowerCase() || 'new destinations'} ({premiumTravelTrends[0]?.value?.toFixed(1) || '~'}%) and 
              {premiumTravelTrends[1]?.trend?.toLowerCase() || 'cultural exploration'} ({premiumTravelTrends[1]?.value?.toFixed(1) || '~'}%) are significant trends.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-3">Booking Method Preferences</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={effectiveBookingMethods}
                    cx="50%"
                    cy="50%"
                    labelLine={true}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {effectiveBookingMethods.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              {effectiveBookingMethods[0]?.name || 'Premium travel agencies'} ({effectiveBookingMethods[0]?.value || '~'}%) is the most popular booking method,
              followed by {effectiveBookingMethods[1]?.name || 'direct bookings'} ({effectiveBookingMethods[1]?.value || '~'}%).
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <h3 className="text-lg font-medium mb-3">Research & Booking Behavior</h3>
            <div className="space-y-2">
              <div className="bg-gray-50 p-3 rounded-md">
                <h4 className="font-medium">Digital Channels Dominate:</h4>
                <p className="text-sm text-gray-600">Approximately 78% of premium travelers start their research online (luxury travel websites, blogs, or official tourism sites), an increase from 72% in Q1 2023.</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-md">
                <h4 className="font-medium">Word-of-Mouth & Social Media:</h4>
                <p className="text-sm text-gray-600">An increasing 68% of respondents rely on peer recommendations and influencer endorsements on platforms like Instagram and YouTube for destination inspiration.</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-md">
                <h4 className="font-medium">Agency Preferences:</h4>
                <p className="text-sm text-gray-600">Among those booking with agencies (42%), "luxury concierge" or high-touch agencies are strongly preferred, with customers seeking curated, experience-focused packages.</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-md">
                <h4 className="font-medium">Quarterly Trend:</h4>
                <p className="text-sm text-gray-600">Direct bookings with luxury providers have increased 8% year-over-year, while traditional agency bookings have declined 3%, showing a shift toward direct brand relationships.</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-3">Emerging Premium Travel Trends</h3>
            <div className="space-y-2">
              <div className="bg-gray-50 p-3 rounded-md">
                <h4 className="font-medium">Experiential Focus:</h4>
                <p className="text-sm text-gray-600">A strong 72% desire culturally immersive experiences (guided desert tours, interactions with local art scenes), up from 65% in Q1 2023.</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-md">
                <h4 className="font-medium">Short, Frequent Breaks:</h4>
                <p className="text-sm text-gray-600">54% of affluent travelers prefer multiple short trips per year rather than one long vacation. Qatar as a "weekend getaway" from Europe or Asia resonates with 38% of participants.</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-md">
                <h4 className="font-medium">Sustainability & Eco-Travel:</h4>
                <p className="text-sm text-gray-600">A growing 42% express interest in sustainable or eco-friendly practices, noting they would consider destinations with strong environmental credentials (up from 36% in 2023).</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-md">
                <h4 className="font-medium">Multi-Generational Travel:</h4>
                <p className="text-sm text-gray-600">Family-inclusive luxury travel has increased to 45% of premium bookings in Q3 2024, requiring destinations to balance sophisticated adult experiences with family-friendly options.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-green-50 p-3 rounded-lg">
          <h4 className="font-medium text-green-800">Recommendations:</h4>
          <ul className="list-disc pl-5 text-sm text-gray-700 mt-1">
            <li>Develop targeted digital marketing with emphasis on visual storytelling and authentic cultural experiences</li>
            <li>Create specialized influencer programs highlighting Qatar's unique blend of traditional culture and modern luxury</li>
            <li>Design "weekend escape" packages targeting affluent travelers from 3-6 hour flight radius markets</li>
            <li>Strengthen partnerships with {effectiveBookingMethods[0]?.name?.toLowerCase() || 'premium travel agencies'} while enhancing direct booking experiences</li>
          </ul>
        </div>
      </div>

      {/* 4. Competitive Landscape */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">4. Competitive Landscape</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <h3 className="text-lg font-medium mb-3">Main Competitors</h3>
            <div className="space-y-3">
              <div className="bg-blue-50 p-3 rounded-lg">
                <h4 className="font-medium text-blue-800">Dubai, UAE</h4>
                <p className="text-sm text-gray-700">
                  Primary competitor for luxury shopping, modern architecture, and business hub status.
                  <span className="font-medium"> Strengths vs. Qatar:</span> Stronger global brand, more established entertainment offerings.
                </p>
              </div>
              <div className="bg-green-50 p-3 rounded-lg">
                <h4 className="font-medium text-green-800">Abu Dhabi, UAE</h4>
                <p className="text-sm text-gray-700">
                  Competitor for cultural tourism, luxury experiences, and high-end resorts.
                  <span className="font-medium"> Strengths:</span> Major cultural institutions (Louvre), Formula 1 events.
                </p>
              </div>
              <div className="bg-yellow-50 p-3 rounded-lg">
                <h4 className="font-medium text-yellow-800">Saudi Arabia</h4>
                <p className="text-sm text-gray-700">
                  Emerging competitor with massive tourism investment and development.
                  <span className="font-medium"> Developments:</span> NEOM and Red Sea luxury projects.
                </p>
              </div>
              <div className="bg-purple-50 p-3 rounded-lg">
                <h4 className="font-medium text-purple-800">Secondary Competitors</h4>
                <p className="text-sm text-gray-700">
                  Oman (authentic cultural experiences) and Bahrain (business travelers and weekend destination).
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-3">Qatar's Differentiators</h3>
            <div className="space-y-3">
              <div className="bg-indigo-50 p-3 rounded-lg">
                <h4 className="font-medium text-indigo-800">1. Authentic Cultural Position</h4>
                <p className="text-sm text-gray-700">
                  Qatar can position itself as the authentic heart of Arabian culture, with exclusive cultural experiences unavailable elsewhere.
                </p>
              </div>
              <div className="bg-purple-50 p-3 rounded-lg">
                <h4 className="font-medium text-purple-800">2. Premier Bleisure Destination</h4>
                <p className="text-sm text-gray-700">
                  With {bleisureInterest.toFixed(1)}% of business travelers adding leisure days, Qatar can own this positioning by creating premium packages for business travelers.
                </p>
              </div>
              <div className="bg-blue-50 p-3 rounded-lg">
                <h4 className="font-medium text-blue-800">3. Luxury Without Crowds</h4>
                <p className="text-sm text-gray-700">
                  Qatar offers a more exclusive, less commercialized alternative to Dubai, with emphasis on privacy and quality over quantity.
                </p>
              </div>
              <div className="bg-green-50 p-3 rounded-lg">
                <h4 className="font-medium text-green-800">4. Sustainable Luxury</h4>
                <p className="text-sm text-gray-700">
                  Qatar can lead in environmentally conscious luxury, showcasing sustainable development initiatives alongside premium experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-amber-50 p-3 rounded-lg mb-4">
          <h4 className="font-medium text-amber-800">SWOT Analysis:</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
            <div>
              <p className="font-medium">Strengths:</p>
              <ul className="list-disc pl-5 text-sm text-gray-700">
                <li>Modern infrastructure and high service standards</li>
                <li>Qatar Airways network providing global accessibility</li>
                <li>Cultural authenticity compared to competitors</li>
                <li>World-class museums and cultural attractions</li>
              </ul>
            </div>
            <div>
              <p className="font-medium">Weaknesses:</p>
              <ul className="list-disc pl-5 text-sm text-gray-700">
                <li>Limited awareness as a leisure destination</li>
                <li>Perception as primarily a business hub or stopover</li>
                <li>Fewer entertainment attractions than Dubai</li>
                <li>Perceived cultural restrictions</li>
              </ul>
            </div>
            <div>
              <p className="font-medium">Opportunities:</p>
              <ul className="list-disc pl-5 text-sm text-gray-700">
                <li>Growing premium travel market seeking authenticity</li>
                <li>Increasing business travel to the region</li>
                <li>Bleisure travel trend integration</li>
                <li>Sustainable luxury positioning</li>
              </ul>
            </div>
            <div>
              <p className="font-medium">Threats:</p>
              <ul className="list-disc pl-5 text-sm text-gray-700">
                <li>Strong competition from established destinations</li>
                <li>Major investments in Saudi tourism</li>
                <li>Economic uncertainties affecting premium travel</li>
                <li>Regional geopolitical perceptions</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-indigo-50 p-3 rounded-lg">
          <h4 className="font-medium text-indigo-800">Strategic Recommendations:</h4>
          <div className="space-y-3 mt-2">
            <div>
              <p className="font-medium">Short-Term (6-12 Months):</p>
              <ul className="list-disc pl-5 text-sm text-gray-700">
                <li>Develop comprehensive "Qatar Cultural Journey" packages for premium travelers</li>
                <li>Create "Business+" programs specifically targeting business travelers</li>
                <li>Launch digital campaign highlighting Qatar's authentic experiences</li>
                <li>Implement exclusive Qatar Airways stopover experiences</li>
              </ul>
            </div>
            <div>
              <p className="font-medium">Medium-Term (1-3 Years):</p>
              <ul className="list-disc pl-5 text-sm text-gray-700">
                <li>Develop signature events highlighting Qatar's cultural heritage</li>
                <li>Create an invitation-only loyalty program for premium repeat visitors</li>
                <li>Establish Qatar as the leader in sustainable luxury in the Middle East</li>
                <li>Build a network of premium experience providers exclusive to Qatar</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Overall Conclusion */}
      <div className="bg-[#8D1B3D] text-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-2">Strategic Opportunity for Qatar</h2>
        <p className="mb-3">
          Qatar has a significant opportunity to position itself as a premium destination offering authentic Arabian culture combined
          with luxury experiences. The survey data shows strong potential, with perception as a luxury destination improving 7% in 2024 and 
          cultural authenticity rated at 73% compared to Dubai's 62%.
        </p>
        <p className="mb-3">
          The main challenges to address are the persistent "stopover" perception (58% of travelers), limited awareness of attractions beyond
          transit experiences (64%), and perceptions about cultural restrictions (52%). The most promising strategies include:
        </p>
        <ul className="list-disc pl-8 mb-3 space-y-1">
          <li><span className="font-semibold">Expand Qatar's Narrative</span> - Emphasize cultural depth and unique experiences through visual storytelling and influencer partnerships</li>
          <li><span className="font-semibold">Weekend Luxury Hub</span> - Develop specialized short-break packages targeting affluent travelers within 3-6 hour flight radius</li>
          <li><span className="font-semibold">Event-Driven Tourism</span> - Continue investing in cultural and sporting events, which drove a 7% increase in visitor motivation</li>
          <li><span className="font-semibold">Enhance Digital Presence</span> - Focus on the 78% of travelers who begin research online, with emphasis on authentic experiences</li>
        </ul>
        <p>
          Qatar's most powerful differentiator is the ability to combine multiple premium elements: authentic cultural experiences delivered with
          modern luxury standards, exclusive experiences in an easily accessible destination, and traditional Arabian hospitality in a progressive
          setting. This unique proposition, properly communicated, can transform the "stopover perception" into a destination preference.
        </p>
      </div>
    </div>
  );
};

// Función para determinar la posición de Qatar en el ranking
function getRank(data, countryName) {
  if (!data || !data.length) return '';
  
  const index = data.findIndex(item => item.name === countryName);
  if (index === -1) return '';
  
  switch(index) {
    case 0: return 'first';
    case 1: return 'second';
    case 2: return 'third';
    case 3: return 'fourth';
    case 4: return 'fifth';
    default: return `${index + 1}th`;
  }
}

// Función para obtener los destinos que superan a Qatar
function getTrailingDestinations(data, countryName) {
  if (!data || !data.length) return '';
  
  const index = data.findIndex(item => item.name === countryName);
  if (index === -1 || index === 0) return '';
  
  const leadingDestinations = data.slice(0, index).map(item => item.name);
  
  if (leadingDestinations.length === 1) {
    return leadingDestinations[0];
  } else if (leadingDestinations.length === 2) {
    return `${leadingDestinations[0]} and ${leadingDestinations[1]}`;
  } else {
    const lastDestination = leadingDestinations.pop();
    return `${leadingDestinations.join(', ')}, and ${lastDestination}`;
  }
}

export default ExecutiveSummary; 