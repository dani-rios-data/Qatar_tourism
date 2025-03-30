import React from 'react';
import LuxuryHotelBrandsTrends from './sections/LuxuryHotelBrandsTrends';
import AirTicketTypesTrends from './sections/AirTicketTypesTrends';
import FlightInfluencesTrends from './sections/FlightInfluencesTrends';
import AccommodationInfluencesTrends from './sections/AccommodationInfluencesTrends';

const TravelBehaviorsTab = () => {
  return (
    <div className="tab-content">
      <h2 className="text-2xl font-bold text-[#8D1B3D] mb-6">Travel Behaviors & Trends</h2>
      
      {/* Main Question Section 1 */}
      <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
        <h3 className="text-xl font-semibold text-[#8D1B3D] mb-3">
          What premium travel trends are shaping where affluent individuals from your market choose to go?
        </h3>
        
        <p className="text-gray-700 mb-4">
          This analysis identifies distinctive behaviors of premium travelers in terms of luxury accommodation preferences, 
          transport choices, airline selection, and ticket types. Understanding these trends provides valuable insights 
          into what drives destination selection among high-value travelers interested in Qatar.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="bg-[#f9f7f2] p-4 rounded-lg border border-[#b8a88f]">
            <h4 className="font-medium mb-2" style={{color: '#8d1c3e'}}>Accommodation Preferences</h4>
            <p className="text-sm text-gray-600">
              Analysis of luxury hotel brand preferences and positioning among premium travelers, 
              revealing which brands have the strongest appeal and loyalty.
            </p>
          </div>
          
          <div className="bg-[#f9f7f2] p-4 rounded-lg border border-[#b8a88f]">
            <h4 className="font-medium mb-2" style={{color: '#8d1c3e'}}>Transport Choices</h4>
            <p className="text-sm text-gray-600">
              Examination of premium air travel preferences, focusing on Business Class, First Class, 
              and Premium Economy ticket selection patterns over time.
            </p>
          </div>
        </div>
      </div>
      
      {/* Sub-section 1: Luxury Hotel Brands */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-[#1A4D2E] mb-4 border-b border-[#b8a88f] pb-2">
          1. Luxury Accommodation Preferences
        </h3>
        <LuxuryHotelBrandsTrends />
      </div>
      
      {/* Sub-section 2: Air Ticket Types */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-[#1A4D2E] mb-4 border-b border-[#b8a88f] pb-2">
          2. Premium Air Travel Behaviors
        </h3>
        <AirTicketTypesTrends />
      </div>
      
      {/* Summary Section for Question 1 */}
      <div className="bg-[#f9f7f2] p-6 rounded-lg border border-[#b8a88f] mb-16">
        <h3 className="text-lg font-semibold mb-3" style={{color: '#8d1c3e'}}>Key Takeaways</h3>
        <p className="text-gray-700 mb-4">
          Premium travelers demonstrate clear preferences for luxury experiences across both accommodation and transportation. 
          The strong positioning of ultra-luxury hotel brands and the consistent preference for premium air travel classes 
          indicate high expectations for comfort, exclusivity, and personalized service.
        </p>
        <p className="text-gray-700">
          These insights suggest that Qatar should emphasize its luxury offerings, partnerships with preferred hotel brands, 
          and premium travel connectivity in marketing communications to effectively attract this high-value audience segment.
        </p>
      </div>
      
      {/* Main Question Section 2 */}
      <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
        <h3 className="text-xl font-semibold text-[#8D1B3D] mb-3">
          How do premium travelers in your region typically research and book trips?
        </h3>
        
        <p className="text-gray-700 mb-4">
          This section explores the channels and decision-making factors that influence how premium travelers research and book their travel. 
          Understanding these patterns provides insights into the most effective touchpoints and messaging strategies for 
          reaching this high-value segment during their decision journey.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="bg-[#f9f7f2] p-4 rounded-lg border border-[#b8a88f]">
            <h4 className="font-medium mb-2" style={{color: '#8d1c3e'}}>Flight Influences</h4>
            <p className="text-sm text-gray-600">
              Analysis of factors that influence flight decisions, including practical considerations, 
              value assessments, and experience preferences.
            </p>
          </div>
          
          <div className="bg-[#f9f7f2] p-4 rounded-lg border border-[#b8a88f]">
            <h4 className="font-medium mb-2" style={{color: '#8d1c3e'}}>Accommodation Influences</h4>
            <p className="text-sm text-gray-600">
              Examination of channels and factors affecting accommodation choices, complementing 
              the analysis of search and booking behaviors.
            </p>
          </div>
        </div>
      </div>
      
      {/* Sub-section 1: Flight Influences */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-[#1A4D2E] mb-4 border-b border-[#b8a88f] pb-2">
          1. Flight Decision Influences
        </h3>
        <FlightInfluencesTrends />
      </div>
      
      {/* Accommodation Influences */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-[#1A4D2E] mb-4 border-b border-[#b8a88f] pb-2">
          2. Accommodation Search & Booking Patterns
        </h3>
        <AccommodationInfluencesTrends />
      </div>
      
      {/* Summary Section for Question 2 */}
      <div className="bg-[#f9f7f2] p-6 rounded-lg border border-[#b8a88f] mb-8">
        <h3 className="text-lg font-semibold mb-3" style={{color: '#8d1c3e'}}>Key Booking Insights</h3>
        <p className="text-gray-700 mb-4">
          Premium travelers demonstrate sophisticated research and booking behaviors, with a strong emphasis on fundamentals like 
          direct routes and reliable schedules for flights, and location, comfort, and cleanliness for accommodations.
        </p>
        <p className="text-gray-700">
          While price remains influential, premium travelers prioritize quality indicators and experience elements. The decline in 
          brand influence across both flights and accommodations suggests a shift toward specific feature-driven decisions rather 
          than brand loyalty, presenting both challenges and opportunities for Qatar's positioning.
        </p>
      </div>
    </div>
  );
};

export default TravelBehaviorsTab; 