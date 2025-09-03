import React from 'react';
import { MapPin, Camera, TreePine, Waves } from 'lucide-react';

const BiodiversityHotspots = () => {
  const hotspots = [
    {
      name: 'Indus Delta Mangroves',
      location: 'Sindh Province',
      area: '600,000 hectares',
      icon: Waves,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      image: '/src/assets/ecosystems/coasts_2.jpg',
      description: 'The largest mangrove forest in Pakistan, supporting diverse marine and terrestrial life.',
      keySpecies: ['Indus dolphin', 'Green turtle', 'Flamingo', 'Fishing cat'],
      threats: ['Water pollution', 'Reduced freshwater flow', 'Coastal development'],
      conservation: 'Ramsar Wetland Site, Protected under Wildlife Act',
      facts: [
        '95% of mangroves are Avicennia marina species',
        'Critical nursery for marine fish species',
        'Supports 140+ bird species',
        'Home to endangered Indus river dolphin'
      ]
    },
    {
      name: 'Thar Desert',
      location: 'Sindh Province',
      area: '175,000 km²',
      icon: TreePine,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
      image: '/src/assets/ecosystems/deserts_5.jpeg',
      description: 'One of the world\'s largest deserts, supporting unique desert-adapted species.',
      keySpecies: ['Desert fox', 'Sand cat', 'Great Indian bustard', 'Chinkara gazelle'],
      threats: ['Overgrazing', 'Water scarcity', 'Mining activities'],
      conservation: 'Multiple protected areas and reserves',
      facts: [
        'Receives only 100-500mm annual rainfall',
        'Supports over 140 bird species',
        'Home to unique desert flora',
        'Critical habitat for migratory birds'
      ]
    },
    {
      name: 'Alpine Meadows of Gilgit-Baltistan',
      location: 'Gilgit-Baltistan',
      area: '72,971 km²',
      icon: MapPin,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      image: '/src/assets/ecosystems/mountains_3.jpg',
      description: 'High-altitude ecosystems supporting rare mountain wildlife and endemic plants.',
      keySpecies: ['Snow leopard', 'Markhor', 'Brown bear', 'Blue sheep'],
      threats: ['Climate change', 'Tourism pressure', 'Livestock grazing'],
      conservation: 'Multiple national parks and protected areas',
      facts: [
        'Altitude ranges from 1,000-8,611m',
        'Part of three major mountain ranges',
        'Endemic plant species found nowhere else',
        'Critical corridor for wildlife movement'
      ]
    },
    {
      name: 'Chitral Gol National Park',
      location: 'Khyber Pakhtunkhwa',
      area: '7,750 hectares',
      icon: TreePine,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      image: '/src/assets/ecosystems/forest_4.jpg',
      description: 'Protected area known for its markhor population and diverse mountain ecosystems.',
      keySpecies: ['Markhor', 'Snow leopard', 'Lynx', 'Golden eagle'],
      threats: ['Poaching', 'Habitat fragmentation', 'Human encroachment'],
      conservation: 'National Park status, Community conservation programs',
      facts: [
        'Established in 1984',
        'Home to largest markhor population',
        'Altitude ranges 1,500-5,000m',
        'Important bird migration route'
      ]
    },
    {
      name: 'Hingol National Park',
      location: 'Balochistan',
      area: '6,100 km²',
      icon: Camera,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      image: '/src/assets/ecosystems/coasts_5.jpg',
      description: 'Pakistan\'s largest national park, featuring diverse coastal and desert ecosystems.',
      keySpecies: ['Sind ibex', 'Houbara bustard', 'Green turtle', 'Crocodile'],
      threats: ['Coastal development', 'Pollution', 'Unregulated tourism'],
      conservation: 'National Park status, Marine protected areas',
      facts: [
        'Largest national park in Pakistan',
        'Includes 610km of coastline',
        'Nesting site for marine turtles',
        'Unique geological formations'
      ]
    },
    {
      name: 'Deosai National Park',
      location: 'Gilgit-Baltistan',
      area: '3,000 km²',
      icon: MapPin,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      image: '/src/assets/ecosystems/mountains_7.jpg',
      description: 'High-altitude plateau known as "Land of Giants" for its brown bear population.',
      keySpecies: ['Himalayan brown bear', 'Snow leopard', 'Golden marmot', 'Tibetan wolf'],
      threats: ['Climate change', 'Tourism impact', 'Grazing pressure'],
      conservation: 'National Park status, Strict protection measures',
      facts: [
        'Second highest plateau in the world',
        'Average altitude 4,114m',
        'Home to 40+ brown bears',
        'Over 300 plant species'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <MapPin className="h-8 w-8 text-green-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">Biodiversity Hotspots</h1>
          </div>
          <p className="text-lg text-gray-600 max-w-4xl">
            Discover Pakistan's most important biodiversity hotspots - regions with exceptional 
            concentrations of endemic species and significant levels of habitat loss. These areas 
            are critical for conservation efforts and represent the country's natural heritage.
          </p>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg p-6 text-center shadow-md">
            <div className="text-3xl font-bold text-green-600 mb-2">25+</div>
            <div className="text-gray-700">Protected Areas</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-md">
            <div className="text-3xl font-bold text-blue-600 mb-2">15%</div>
            <div className="text-gray-700">Land Protected</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-md">
            <div className="text-3xl font-bold text-purple-600 mb-2">200+</div>
            <div className="text-gray-700">Endemic Species</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-md">
            <div className="text-3xl font-bold text-orange-600 mb-2">6</div>
            <div className="text-gray-700">Major Hotspots</div>
          </div>
        </div>

        {/* Hotspots */}
        <div className="space-y-8">
          {hotspots.map((hotspot, index) => {
            const IconComponent = hotspot.icon;
            return (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={hotspot.image}
                      alt={hotspot.name}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="flex items-center mb-4">
                      <div className={`p-2 rounded-full ${hotspot.bgColor} mr-3`}>
                        <IconComponent className={`h-6 w-6 ${hotspot.color}`} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{hotspot.name}</h3>
                        <p className="text-gray-600">{hotspot.location} • {hotspot.area}</p>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-4">{hotspot.description}</p>

                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Key Species</h4>
                        <div className="flex flex-wrap gap-2">
                          {hotspot.keySpecies.map((species, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-green-100 text-green-800 text-sm rounded-full"
                            >
                              {species}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Main Threats</h4>
                        <div className="flex flex-wrap gap-2">
                          {hotspot.threats.map((threat, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-red-100 text-red-800 text-sm rounded-full"
                            >
                              {threat}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Conservation Status</h4>
                      <p className="text-gray-700">{hotspot.conservation}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Key Facts</h4>
                      <ul className="grid md:grid-cols-2 gap-1 text-sm text-gray-700">
                        {hotspot.facts.map((fact, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            {fact}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Conservation Call to Action */}
        <div className="mt-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg p-8 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Protect Pakistan's Biodiversity Hotspots</h3>
            <p className="text-lg mb-6 max-w-3xl mx-auto">
              These critical ecosystems need our protection. Support conservation efforts through 
              responsible tourism, citizen science participation, and environmental awareness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors">
                Plan Eco-Tourism
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 font-semibold py-3 px-6 rounded-lg transition-colors">
                Support Conservation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BiodiversityHotspots;

