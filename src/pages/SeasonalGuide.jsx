import React, { useState } from 'react';
import { Calendar, Camera, MapPin, Thermometer } from 'lucide-react';

const SeasonalGuide = () => {
  const [selectedSeason, setSelectedSeason] = useState('winter');

  const seasons = {
    winter: {
      name: 'Winter (December - February)',
      temperature: '5-20°C',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-500',
      description: 'Perfect time for wildlife viewing in northern regions and desert areas',
      highlights: [
        'Snow leopard tracking in Gilgit-Baltistan',
        'Migratory birds in wetlands',
        'Desert wildlife in Thar and Cholistan',
        'Clear mountain views'
      ],
      destinations: [
        {
          name: 'Gilgit-Baltistan',
          activities: ['Snow leopard expeditions', 'Winter wildlife photography', 'Cultural tours'],
          wildlife: ['Snow leopard', 'Markhor', 'Blue sheep', 'Golden eagle'],
          bestFor: 'Mountain wildlife and snow landscapes'
        },
        {
          name: 'Thar Desert',
          activities: ['Desert safaris', 'Bird watching', 'Cultural experiences'],
          wildlife: ['Desert fox', 'Sand cat', 'Houbara bustard', 'Chinkara'],
          bestFor: 'Desert wildlife and comfortable temperatures'
        },
        {
          name: 'Wetlands (Sindh)',
          activities: ['Bird watching', 'Photography', 'Boat tours'],
          wildlife: ['Flamingo', 'Pelican', 'Crane', 'Duck species'],
          bestFor: 'Migratory bird watching'
        }
      ]
    },
    spring: {
      name: 'Spring (March - May)',
      temperature: '15-30°C',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-500',
      description: 'Ideal season for flowering meadows and active wildlife',
      highlights: [
        'Alpine meadows in full bloom',
        'Bird migration season',
        'Pleasant weather for trekking',
        'Wildflower photography'
      ],
      destinations: [
        {
          name: 'Chitral & Swat',
          activities: ['Trekking', 'Wildflower tours', 'Bird watching'],
          wildlife: ['Monal pheasant', 'Markhor', 'Brown bear', 'Various songbirds'],
          bestFor: 'Mountain flowers and moderate weather'
        },
        {
          name: 'Margalla Hills',
          activities: ['Hiking', 'Bird watching', 'Photography'],
          wildlife: ['Leopard', 'Wild boar', 'Various bird species'],
          bestFor: 'Accessible wildlife viewing near Islamabad'
        },
        {
          name: 'Deosai Plateau',
          activities: ['Wildlife viewing', 'Photography', 'Camping'],
          wildlife: ['Brown bear', 'Golden marmot', 'Snow leopard'],
          bestFor: 'High-altitude wildlife and landscapes'
        }
      ]
    },
    summer: {
      name: 'Summer (June - August)',
      temperature: '25-45°C',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-500',
      description: 'Best time for high-altitude regions and northern valleys',
      highlights: [
        'Access to high-altitude areas',
        'Lush green valleys',
        'Active wildlife in mountains',
        'Long daylight hours'
      ],
      destinations: [
        {
          name: 'Fairy Meadows',
          activities: ['Trekking', 'Wildlife photography', 'Camping'],
          wildlife: ['Brown bear', 'Snow leopard', 'Himalayan ibex'],
          bestFor: 'High-altitude wildlife and stunning views'
        },
        {
          name: 'Skardu Region',
          activities: ['Mountaineering', 'Wildlife tours', 'Photography'],
          wildlife: ['Marco Polo sheep', 'Snow leopard', 'Lynx'],
          bestFor: 'Extreme altitude wildlife'
        },
        {
          name: 'Northern Valleys',
          activities: ['Valley tours', 'Cultural experiences', 'Photography'],
          wildlife: ['Various mountain species', 'Birds of prey'],
          bestFor: 'Scenic beauty and cultural immersion'
        }
      ]
    },
    autumn: {
      name: 'Autumn (September - November)',
      temperature: '10-25°C',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-500',
      description: 'Golden season with perfect weather and active wildlife',
      highlights: [
        'Golden fields and landscapes',
        'Comfortable temperatures',
        'Harvest season wildlife activity',
        'Clear skies for photography'
      ],
      destinations: [
        {
          name: 'Sindh Golden Fields',
          activities: ['Agricultural tours', 'Bird watching', 'Photography'],
          wildlife: ['Migratory birds', 'Small mammals', 'Reptiles'],
          bestFor: 'Agricultural landscapes and bird migration'
        },
        {
          name: 'Balochistan Highlands',
          activities: ['Wildlife safaris', 'Photography', 'Cultural tours'],
          wildlife: ['Markhor', 'Urial', 'Leopard', 'Various birds'],
          bestFor: 'Mountain wildlife and comfortable weather'
        },
        {
          name: 'Coastal Areas',
          activities: ['Marine wildlife tours', 'Turtle watching', 'Photography'],
          wildlife: ['Sea turtles', 'Dolphins', 'Seabirds'],
          bestFor: 'Marine life and coastal ecosystems'
        }
      ]
    }
  };

  const currentSeason = seasons[selectedSeason];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <Calendar className="h-8 w-8 text-green-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">Seasonal Travel Guide</h1>
          </div>
          <p className="text-lg text-gray-600 max-w-4xl">
            Discover the best times to explore Pakistan's diverse wildlife and ecosystems. 
            Each season offers unique opportunities for wildlife viewing, photography, and eco-tourism experiences.
          </p>
        </div>

        {/* Season Selector */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Choose Your Season</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(seasons).map(([key, season]) => (
              <button
                key={key}
                onClick={() => setSelectedSeason(key)}
                className={`p-4 rounded-lg font-medium transition-colors text-center ${
                  selectedSeason === key
                    ? `${season.bgColor} ${season.color} border-2 ${season.borderColor}`
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <div className="text-sm font-semibold">{season.name.split(' ')[0]}</div>
                <div className="text-xs mt-1">{season.temperature}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Season Overview */}
        <div className={`bg-white rounded-lg shadow-lg border-l-4 ${currentSeason.borderColor} mb-8`}>
          <div className="p-6">
            <div className="flex items-center mb-4">
              <Thermometer className={`h-6 w-6 ${currentSeason.color} mr-3`} />
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{currentSeason.name}</h2>
                <p className="text-gray-600">Average Temperature: {currentSeason.temperature}</p>
              </div>
            </div>
            <p className="text-gray-700 mb-4">{currentSeason.description}</p>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Season Highlights</h4>
              <div className="grid md:grid-cols-2 gap-2">
                {currentSeason.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center text-gray-700">
                    <span className={`${currentSeason.color} mr-2`}>•</span>
                    {highlight}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Destinations */}
        <div className="space-y-6 mb-8">
          <h3 className="text-2xl font-bold text-gray-900">Recommended Destinations</h3>
          {currentSeason.destinations.map((destination, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <MapPin className={`h-6 w-6 ${currentSeason.color} mr-2`} />
                  <h4 className="text-xl font-bold text-gray-900">{destination.name}</h4>
                </div>
                
                <p className="text-gray-700 mb-4">{destination.bestFor}</p>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Activities</h5>
                    <ul className="text-gray-700 text-sm space-y-1">
                      {destination.activities.map((activity, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className={`${currentSeason.color} mr-2`}>•</span>
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Wildlife to See</h5>
                    <div className="flex flex-wrap gap-1">
                      {destination.wildlife.map((species, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full"
                        >
                          {species}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Best For</h5>
                    <p className="text-gray-700 text-sm">{destination.bestFor}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Photography Tips */}
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-8">
          <div className="flex items-center mb-4">
            <Camera className="h-6 w-6 text-purple-600 mr-2" />
            <h3 className="text-xl font-bold text-purple-800">Photography Tips for {currentSeason.name.split(' ')[0]}</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-purple-700 mb-2">Equipment Recommendations</h4>
              <ul className="text-purple-700 space-y-1 text-sm">
                <li>• Telephoto lens for wildlife (300mm+)</li>
                <li>• Weather protection for gear</li>
                <li>• Extra batteries (cold weather drains faster)</li>
                <li>• Tripod for stable shots</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-purple-700 mb-2">Best Practices</h4>
              <ul className="text-purple-700 space-y-1 text-sm">
                <li>• Early morning and late afternoon lighting</li>
                <li>• Respect wildlife and maintain safe distances</li>
                <li>• Use local guides for best locations</li>
                <li>• Be patient and quiet around animals</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Eco-Tourism Guidelines */}
        <div className="bg-green-600 rounded-lg p-6 text-white">
          <h3 className="text-xl font-bold mb-4">Responsible Eco-Tourism Guidelines</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Wildlife Viewing</h4>
              <ul className="text-green-100 space-y-1 text-sm">
                <li>• Maintain safe distances</li>
                <li>• No feeding of wild animals</li>
                <li>• Follow guide instructions</li>
                <li>• Minimize noise and movement</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Environmental Impact</h4>
              <ul className="text-green-100 space-y-1 text-sm">
                <li>• Leave no trace principles</li>
                <li>• Use designated trails</li>
                <li>• Proper waste disposal</li>
                <li>• Respect local communities</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Conservation Support</h4>
              <ul className="text-green-100 space-y-1 text-sm">
                <li>• Choose certified eco-operators</li>
                <li>• Support local conservation</li>
                <li>• Report wildlife sightings</li>
                <li>• Educate others about conservation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeasonalGuide;

