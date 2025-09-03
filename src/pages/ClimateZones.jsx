import React from 'react';
import { Thermometer, Cloud, Sun, Snowflake, Droplets } from 'lucide-react';

const ClimateZones = () => {
  const climateZones = [
    {
      name: 'Arid Zone',
      icon: Sun,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200',
      description: 'Hot and dry climate with minimal rainfall',
      rainfall: '< 250mm annually',
      temperature: '25-45°C',
      regions: ['Thar Desert', 'Cholistan Desert', 'Parts of Balochistan'],
      wildlife: ['Desert fox', 'Sand cat', 'Houbara bustard', 'Desert monitor']
    },
    {
      name: 'Semi-Arid Zone',
      icon: Cloud,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      description: 'Moderate rainfall with hot summers and mild winters',
      rainfall: '250-500mm annually',
      temperature: '20-40°C',
      regions: ['Punjab plains', 'Parts of Sindh', 'Lower Balochistan'],
      wildlife: ['Nilgai', 'Wild boar', 'Jackal', 'Various bird species']
    },
    {
      name: 'Temperate Zone',
      icon: Droplets,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      description: 'Moderate climate with distinct seasons',
      rainfall: '500-1000mm annually',
      temperature: '10-30°C',
      regions: ['Northern Punjab', 'Parts of KPK', 'Kashmir valleys'],
      wildlife: ['Leopard', 'Black bear', 'Monal pheasant', 'Various deer species']
    },
    {
      name: 'Alpine Zone',
      icon: Snowflake,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      description: 'Cold climate with heavy snowfall in winter',
      rainfall: '1000-2000mm annually',
      temperature: '-10-20°C',
      regions: ['Northern mountains', 'Gilgit-Baltistan', 'High altitude areas'],
      wildlife: ['Snow leopard', 'Markhor', 'Brown bear', 'Blue sheep']
    },
    {
      name: 'Coastal Zone',
      icon: Droplets,
      color: 'text-teal-600',
      bgColor: 'bg-teal-50',
      borderColor: 'border-teal-200',
      description: 'Humid coastal climate influenced by Arabian Sea',
      rainfall: '200-400mm annually',
      temperature: '20-35°C',
      regions: ['Karachi coast', 'Makran coast', 'Indus Delta'],
      wildlife: ['Green turtle', 'Indus dolphin', 'Flamingo', 'Mangrove species']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <Thermometer className="h-8 w-8 text-blue-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">Environment & Climate Zones</h1>
          </div>
          <p className="text-lg text-gray-600 max-w-4xl">
            Pakistan's diverse geography creates five distinct climate zones, each supporting unique ecosystems 
            and wildlife communities. Explore how climate influences biodiversity across the country.
          </p>
        </div>

        {/* Climate Overview */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pakistan's Climate Diversity</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-700 mb-4">
                Pakistan's location between 24°N and 37°N latitude, combined with its varied topography, 
                creates a remarkable diversity of climatic conditions. From the scorching deserts of Sindh 
                to the snow-capped peaks of the Karakoram, each zone supports distinct flora and fauna.
              </p>
              <p className="text-gray-700">
                Understanding these climate zones is crucial for wildlife conservation, as climate change 
                poses significant threats to species adapted to specific environmental conditions.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Climate Factors</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Monsoon rainfall patterns</li>
                <li>• Altitude variations (0-8,611m)</li>
                <li>• Distance from Arabian Sea</li>
                <li>• Mountain barrier effects</li>
                <li>• Continental vs. maritime influences</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Climate Zones */}
        <div className="space-y-6 mb-8">
          {climateZones.map((zone, index) => {
            const IconComponent = zone.icon;
            return (
              <div key={index} className={`bg-white rounded-lg shadow-lg overflow-hidden border-l-4 ${zone.borderColor}`}>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-full ${zone.bgColor} mr-4`}>
                      <IconComponent className={`h-6 w-6 ${zone.color}`} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{zone.name}</h3>
                  </div>
                  
                  <p className="text-gray-700 mb-6">{zone.description}</p>
                  
                  <div className="grid md:grid-cols-4 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Annual Rainfall</h4>
                      <p className={`text-lg font-medium ${zone.color}`}>{zone.rainfall}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Temperature Range</h4>
                      <p className={`text-lg font-medium ${zone.color}`}>{zone.temperature}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Major Regions</h4>
                      <ul className="text-gray-700 text-sm space-y-1">
                        {zone.regions.map((region, idx) => (
                          <li key={idx}>• {region}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Characteristic Wildlife</h4>
                      <ul className="text-gray-700 text-sm space-y-1">
                        {zone.wildlife.map((species, idx) => (
                          <li key={idx}>• {species}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Current Weather Alert */}
        <div className="bg-blue-600 rounded-lg p-6 text-white mb-8">
          <h3 className="text-xl font-bold mb-4">Current Weather Conditions</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">32°C</div>
              <div className="text-blue-100">Karachi (Coastal)</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">28°C</div>
              <div className="text-blue-100">Lahore (Semi-Arid)</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">15°C</div>
              <div className="text-blue-100">Gilgit (Alpine)</div>
            </div>
          </div>
          <p className="text-center text-blue-100 mt-4">
            Live weather data helps track environmental conditions affecting wildlife behavior and distribution.
          </p>
        </div>

        {/* Climate Change Impact */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-red-800 mb-4">Climate Change Impacts</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-red-700 mb-2">Observed Changes</h4>
              <ul className="text-red-700 space-y-1">
                <li>• Rising average temperatures</li>
                <li>• Changing precipitation patterns</li>
                <li>• Glacial retreat in northern regions</li>
                <li>• Increased frequency of extreme weather</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-red-700 mb-2">Wildlife Impacts</h4>
              <ul className="text-red-700 space-y-1">
                <li>• Habitat range shifts</li>
                <li>• Altered migration patterns</li>
                <li>• Breeding season changes</li>
                <li>• Increased species vulnerability</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClimateZones;

