import React, { useState } from 'react';
import { Calendar, Wheat, Droplets, Sun } from 'lucide-react';

const CropCalendar = () => {
  const [selectedSeason, setSelectedSeason] = useState('kharif');

  const seasons = {
    kharif: {
      name: 'Kharif (Summer)',
      period: 'April - October',
      description: 'Summer crops grown during monsoon season with high water requirements',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-500',
      icon: Droplets,
      crops: [
        {
          name: 'Rice',
          plantingPeriod: 'May - July',
          harvestPeriod: 'September - November',
          waterRequirement: 'High',
          provinces: ['Punjab', 'Sindh'],
          wildlifeImpact: 'Provides habitat for waterbirds and amphibians'
        },
        {
          name: 'Cotton',
          plantingPeriod: 'April - June',
          harvestPeriod: 'September - December',
          waterRequirement: 'High',
          provinces: ['Punjab', 'Sindh'],
          wildlifeImpact: 'Pesticide use affects beneficial insects and birds'
        },
        {
          name: 'Maize',
          plantingPeriod: 'February - July',
          harvestPeriod: 'May - October',
          waterRequirement: 'Medium',
          provinces: ['Punjab', 'KPK', 'Sindh'],
          wildlifeImpact: 'Attracts granivorous birds and small mammals'
        },
        {
          name: 'Sugarcane',
          plantingPeriod: 'February - April',
          harvestPeriod: 'November - April',
          waterRequirement: 'Very High',
          provinces: ['Punjab', 'Sindh'],
          wildlifeImpact: 'Dense growth provides shelter for various species'
        }
      ]
    },
    rabi: {
      name: 'Rabi (Winter)',
      period: 'October - April',
      description: 'Winter crops grown with cooler temperatures and lower water requirements',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-500',
      icon: Sun,
      crops: [
        {
          name: 'Wheat',
          plantingPeriod: 'October - December',
          harvestPeriod: 'April - May',
          waterRequirement: 'Medium',
          provinces: ['Punjab', 'Sindh', 'KPK'],
          wildlifeImpact: 'Major food source for birds and small mammals'
        },
        {
          name: 'Barley',
          plantingPeriod: 'October - November',
          harvestPeriod: 'April - May',
          waterRequirement: 'Low',
          provinces: ['Balochistan', 'KPK'],
          wildlifeImpact: 'Drought-resistant crop supporting desert wildlife'
        },
        {
          name: 'Lentils',
          plantingPeriod: 'October - November',
          harvestPeriod: 'March - April',
          waterRequirement: 'Low',
          provinces: ['Punjab', 'KPK'],
          wildlifeImpact: 'Nitrogen fixation improves soil for other species'
        },
        {
          name: 'Mustard',
          plantingPeriod: 'October - November',
          harvestPeriod: 'March - April',
          waterRequirement: 'Low',
          provinces: ['Punjab', 'Sindh'],
          wildlifeImpact: 'Flowers attract pollinators and beneficial insects'
        }
      ]
    }
  };

  const currentSeason = seasons[selectedSeason];
  const IconComponent = currentSeason.icon;

  const getWaterRequirementColor = (requirement) => {
    switch (requirement.toLowerCase()) {
      case 'very high': return 'bg-red-500 text-white';
      case 'high': return 'bg-orange-500 text-white';
      case 'medium': return 'bg-yellow-500 text-white';
      case 'low': return 'bg-green-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <Calendar className="h-8 w-8 text-green-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">Crop Calendar</h1>
          </div>
          <p className="text-lg text-gray-600 max-w-4xl">
            Pakistan's agricultural calendar follows two main cropping seasons. Understanding these patterns 
            helps us track how farming activities impact wildlife habitats and ecosystem dynamics throughout the year.
          </p>
        </div>

        {/* Season Selector */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Select Cropping Season</h3>
          <div className="flex gap-4">
            {Object.entries(seasons).map(([key, season]) => {
              const SeasonIcon = season.icon;
              return (
                <button
                  key={key}
                  onClick={() => setSelectedSeason(key)}
                  className={`flex items-center px-6 py-3 rounded-lg font-medium transition-colors ${
                    selectedSeason === key
                      ? `${season.bgColor} ${season.color} border-2 ${season.borderColor}`
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <SeasonIcon className="h-5 w-5 mr-2" />
                  {season.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Season Overview */}
        <div className={`bg-white rounded-lg shadow-lg border-l-4 ${currentSeason.borderColor} mb-8`}>
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className={`p-3 rounded-full ${currentSeason.bgColor} mr-4`}>
                <IconComponent className={`h-6 w-6 ${currentSeason.color}`} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{currentSeason.name}</h2>
                <p className="text-gray-600">{currentSeason.period}</p>
              </div>
            </div>
            <p className="text-gray-700">{currentSeason.description}</p>
          </div>
        </div>

        {/* Agricultural Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg p-6 text-center shadow-md">
            <div className="text-3xl font-bold text-green-600 mb-2">25%</div>
            <div className="text-gray-700">GDP from Agriculture</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-md">
            <div className="text-3xl font-bold text-blue-600 mb-2">42%</div>
            <div className="text-gray-700">Labor Force</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-md">
            <div className="text-3xl font-bold text-orange-600 mb-2">22M</div>
            <div className="text-gray-700">Hectares Cultivated</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-md">
            <div className="text-3xl font-bold text-purple-600 mb-2">2</div>
            <div className="text-gray-700">Major Seasons</div>
          </div>
        </div>

        {/* Crop Details */}
        <div className="space-y-6 mb-8">
          {currentSeason.crops.map((crop, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{crop.name}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span>🌱 Plant: {crop.plantingPeriod}</span>
                      <span>🌾 Harvest: {crop.harvestPeriod}</span>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getWaterRequirementColor(crop.waterRequirement)}`}>
                    {crop.waterRequirement} Water
                  </span>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Major Provinces</h4>
                    <div className="flex flex-wrap gap-2">
                      {crop.provinces.map((province, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                        >
                          {province}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <h4 className="font-semibold text-gray-900 mb-2">Wildlife & Ecosystem Impact</h4>
                    <p className="text-gray-700 text-sm">{crop.wildlifeImpact}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Climate Impact */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
          <div className="flex items-center mb-4">
            <Wheat className="h-6 w-6 text-yellow-600 mr-2" />
            <h3 className="text-xl font-bold text-yellow-800">Climate Change Impact on Agriculture</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-yellow-700 mb-2">Observed Changes</h4>
              <ul className="text-yellow-700 space-y-1 text-sm">
                <li>• Shifting planting and harvesting dates</li>
                <li>• Increased water stress during critical growth periods</li>
                <li>• More frequent extreme weather events</li>
                <li>• Changes in pest and disease patterns</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-yellow-700 mb-2">Wildlife Implications</h4>
              <ul className="text-yellow-700 space-y-1 text-sm">
                <li>• Altered food availability for wildlife</li>
                <li>• Changes in habitat structure and timing</li>
                <li>• Increased human-wildlife conflict</li>
                <li>• Disruption of pollinator relationships</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Provincial Breakdown */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Provincial Agricultural Profiles</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Punjab</h4>
              <p className="text-sm text-gray-600 mb-2">Major crops: Wheat, Rice, Cotton</p>
              <p className="text-xs text-gray-500">60% of national agricultural output</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Sindh</h4>
              <p className="text-sm text-gray-600 mb-2">Major crops: Rice, Cotton, Sugarcane</p>
              <p className="text-xs text-gray-500">25% of national agricultural output</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">KPK</h4>
              <p className="text-sm text-gray-600 mb-2">Major crops: Wheat, Maize, Tobacco</p>
              <p className="text-xs text-gray-500">10% of national agricultural output</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Balochistan</h4>
              <p className="text-sm text-gray-600 mb-2">Major crops: Wheat, Barley, Fruits</p>
              <p className="text-xs text-gray-500">5% of national agricultural output</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CropCalendar;

