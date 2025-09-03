import React from 'react';
import { Map, MapPin, Layers, Info } from 'lucide-react';

const InteractiveMap = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <Map className="h-8 w-8 text-blue-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">Interactive Map</h1>
          </div>
          <p className="text-lg text-gray-600 max-w-4xl">
            Explore Pakistan's biodiversity through our interactive map showing species distributions, 
            climate zones, protected areas, and wildlife observation points across the country.
          </p>
        </div>

        {/* Map Container */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="p-6 border-b border-gray-200">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <h2 className="text-xl font-semibold text-gray-900">Pakistan Biodiversity Map</h2>
              <div className="flex items-center space-x-4">
                <button className="flex items-center px-3 py-2 bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200 transition-colors">
                  <Layers className="h-4 w-4 mr-2" />
                  Layers
                </button>
                <button className="flex items-center px-3 py-2 bg-green-100 text-green-700 rounded-md hover:bg-green-200 transition-colors">
                  <MapPin className="h-4 w-4 mr-2" />
                  Add Observation
                </button>
              </div>
            </div>
          </div>
          
          {/* Map Placeholder */}
          <div className="h-96 bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
            <div className="text-center">
              <Map className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">Interactive Map Coming Soon</h3>
              <p className="text-gray-500">
                This will feature a dynamic map with species locations, climate zones, and observation points.
              </p>
            </div>
          </div>
        </div>

        {/* Map Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <MapPin className="h-6 w-6 text-green-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-900">Species Observations</h3>
            </div>
            <p className="text-gray-600">
              View real-time wildlife observations from citizen scientists across Pakistan.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <Layers className="h-6 w-6 text-blue-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-900">Climate Zones</h3>
            </div>
            <p className="text-gray-600">
              Explore Pakistan's five major climate zones and their unique ecosystems.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <Info className="h-6 w-6 text-purple-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-900">Protected Areas</h3>
            </div>
            <p className="text-gray-600">
              Discover national parks, wildlife sanctuaries, and conservation areas.
            </p>
          </div>
        </div>

        {/* Legend */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Map Legend</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
              <span className="text-sm text-gray-700">Forest Areas</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-blue-500 rounded-full mr-2"></div>
              <span className="text-sm text-gray-700">Water Bodies</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-yellow-500 rounded-full mr-2"></div>
              <span className="text-sm text-gray-700">Desert Regions</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-gray-500 rounded-full mr-2"></div>
              <span className="text-sm text-gray-700">Mountain Ranges</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-red-500 rounded-full mr-2"></div>
              <span className="text-sm text-gray-700">Endangered Species</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-purple-500 rounded-full mr-2"></div>
              <span className="text-sm text-gray-700">Protected Areas</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-orange-500 rounded-full mr-2"></div>
              <span className="text-sm text-gray-700">Recent Observations</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-teal-500 rounded-full mr-2"></div>
              <span className="text-sm text-gray-700">Biodiversity Hotspots</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap;

