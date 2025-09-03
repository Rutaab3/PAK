import React, { useState } from 'react';
import { AlertTriangle, MapPin, TrendingDown, Shield } from 'lucide-react';

const EndangeredSpecies = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'mammals', label: 'Mammals' },
    { value: 'birds', label: 'Birds' },
    { value: 'reptiles', label: 'Reptiles' },
    { value: 'amphibians', label: 'Amphibians' },
    { value: 'plants', label: 'Plants' }
  ];

  const endangeredSpecies = [
    {
      id: 1,
      name: 'Snow Leopard',
      scientificName: 'Panthera uncia',
      category: 'mammals',
      status: 'Vulnerable',
      population: '200-400 individuals',
      location: 'Northern Pakistan (Gilgit-Baltistan, KPK)',
      threats: ['Habitat loss', 'Human-wildlife conflict', 'Climate change', 'Poaching'],
      conservation: 'Protected under CITES Appendix I',
      image: '/src/assets/endangered_species/snow_leopard_3.jpg',
      description: 'The snow leopard is an iconic big cat of the high mountains, perfectly adapted to life in harsh alpine environments. In Pakistan, they inhabit the northern regions including the Karakoram, Hindu Kush, and Himalayan ranges.',
      conservationEfforts: [
        'Community-based conservation programs',
        'Livestock insurance schemes',
        'Anti-poaching patrols',
        'Habitat protection initiatives'
      ]
    },
    {
      id: 2,
      name: 'Markhor',
      scientificName: 'Capra falconeri',
      category: 'mammals',
      status: 'Near Threatened',
      population: '2,500-3,000 individuals',
      location: 'Northern and western mountainous regions',
      threats: ['Hunting', 'Habitat degradation', 'Competition with livestock'],
      conservation: 'National animal of Pakistan, protected by law',
      image: '/src/assets/endangered_species/markhor_2.jpg',
      description: 'The markhor is Pakistan\'s national animal, a magnificent wild goat with distinctive spiral horns. They inhabit steep, rocky terrain in mountainous regions.',
      conservationEfforts: [
        'Trophy hunting programs with community benefits',
        'Habitat restoration projects',
        'Local community engagement',
        'Protected area management'
      ]
    },
    {
      id: 3,
      name: 'Indus River Dolphin',
      scientificName: 'Platanista gangetica minor',
      category: 'mammals',
      status: 'Endangered',
      population: '1,800-2,000 individuals',
      location: 'Indus River system',
      threats: ['Water pollution', 'Dam construction', 'Fishing nets', 'Habitat fragmentation'],
      conservation: 'Protected under Wildlife Protection Act',
      image: '/src/assets/endangered_species/indus_dolphin_3.jpg',
      description: 'The Indus river dolphin is one of the world\'s rarest cetaceans, endemic to the Indus River system. These blind dolphins navigate using echolocation.',
      conservationEfforts: [
        'Dolphin rescue operations',
        'Habitat restoration',
        'Fishing gear modification',
        'Water quality monitoring'
      ]
    },
    {
      id: 4,
      name: 'Himalayan Brown Bear',
      scientificName: 'Ursus arctos isabellinus',
      category: 'mammals',
      status: 'Critically Endangered',
      population: '150-200 individuals',
      location: 'Northern Pakistan alpine regions',
      threats: ['Habitat loss', 'Human encroachment', 'Climate change', 'Retaliatory killing'],
      conservation: 'Strictly protected species',
      image: '/src/assets/endangered_species/himalayan_brown_bear_3.jpg',
      description: 'The Himalayan brown bear is a subspecies of brown bear found in the high-altitude regions of Pakistan. They are excellent climbers and hibernate during winter.',
      conservationEfforts: [
        'Habitat protection in national parks',
        'Human-bear conflict mitigation',
        'Research and monitoring programs',
        'Community awareness campaigns'
      ]
    },
    {
      id: 5,
      name: 'Mugger Crocodile',
      scientificName: 'Crocodylus palustris',
      category: 'reptiles',
      status: 'Vulnerable',
      population: '400-500 individuals',
      location: 'Sindh and southern Punjab wetlands',
      threats: ['Habitat destruction', 'Water pollution', 'Human persecution', 'Illegal hunting'],
      conservation: 'Protected in wildlife sanctuaries',
      image: '/src/assets/endangered_species/mugger_crocodile_5.jpg',
      description: 'The mugger crocodile is a medium-sized crocodilian found in freshwater habitats. They play a crucial role in maintaining aquatic ecosystem balance.',
      conservationEfforts: [
        'Captive breeding programs',
        'Habitat restoration',
        'Community education',
        'Anti-poaching measures'
      ]
    },
    {
      id: 6,
      name: 'Green Sea Turtle',
      scientificName: 'Chelonia mydas',
      category: 'reptiles',
      status: 'Endangered',
      population: 'Unknown (declining)',
      location: 'Coastal waters of Sindh and Balochistan',
      threats: ['Plastic pollution', 'Coastal development', 'Fishing nets', 'Egg collection'],
      conservation: 'Protected under marine wildlife laws',
      image: '/src/assets/ecosystems/coasts_5.jpg',
      description: 'Green sea turtles are large marine reptiles that nest on Pakistan\'s beaches. They are crucial for marine ecosystem health.',
      conservationEfforts: [
        'Beach protection programs',
        'Nest monitoring',
        'Plastic reduction campaigns',
        'Fishermen training programs'
      ]
    },
    {
      id: 7,
      name: 'Houbara Bustard',
      scientificName: 'Chlamydotis undulata',
      category: 'birds',
      status: 'Vulnerable',
      population: '1,000-2,000 individuals',
      location: 'Desert regions of Sindh and Balochistan',
      threats: ['Overhunting', 'Habitat loss', 'Power line collisions', 'Disturbance'],
      conservation: 'Hunting regulations and protected areas',
      image: '/src/assets/ecosystems/deserts_6.jpg',
      description: 'The houbara bustard is a large terrestrial bird that inhabits arid and semi-arid regions. They are known for their elaborate courtship displays.',
      conservationEfforts: [
        'Captive breeding and release programs',
        'Hunting quota management',
        'Habitat conservation',
        'International cooperation'
      ]
    },
    {
      id: 8,
      name: 'Chilgoza Pine',
      scientificName: 'Pinus gerardiana',
      category: 'plants',
      status: 'Near Threatened',
      population: 'Declining forest coverage',
      location: 'Northern Pakistan mountains',
      threats: ['Deforestation', 'Over-harvesting', 'Climate change', 'Forest fires'],
      conservation: 'Forest protection laws',
      image: '/src/assets/ecosystems/forest_8.jpg',
      description: 'The chilgoza pine is an economically important tree species that produces edible pine nuts. These forests are crucial for local communities.',
      conservationEfforts: [
        'Sustainable harvesting practices',
        'Reforestation programs',
        'Community forest management',
        'Fire prevention measures'
      ]
    }
  ];

  const filteredSpecies = selectedCategory === 'all' 
    ? endangeredSpecies 
    : endangeredSpecies.filter(species => species.category === selectedCategory);

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'critically endangered': return 'bg-red-600 text-white';
      case 'endangered': return 'bg-red-500 text-white';
      case 'vulnerable': return 'bg-orange-500 text-white';
      case 'near threatened': return 'bg-yellow-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <AlertTriangle className="h-8 w-8 text-red-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">Endangered & Protected Species</h1>
          </div>
          <p className="text-lg text-gray-600 max-w-4xl">
            Pakistan is home to numerous endangered species facing threats from habitat loss, climate change, 
            and human activities. Learn about these remarkable creatures and the conservation efforts to protect them.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-red-100 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">12</div>
            <div className="text-red-800">Critically Endangered</div>
          </div>
          <div className="bg-orange-100 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">20</div>
            <div className="text-orange-800">Endangered</div>
          </div>
          <div className="bg-yellow-100 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-yellow-600 mb-2">32</div>
            <div className="text-yellow-800">Vulnerable</div>
          </div>
          <div className="bg-blue-100 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">44</div>
            <div className="text-blue-800">Near Threatened</div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Filter by Category</h3>
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.value
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
          <div className="mt-4 text-sm text-gray-600">
            Showing {filteredSpecies.length} species
          </div>
        </div>

        {/* Species Cards */}
        <div className="space-y-8">
          {filteredSpecies.map(species => (
            <div key={species.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    src={species.image}
                    alt={species.name}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">{species.name}</h3>
                      <p className="text-gray-600 italic">{species.scientificName}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(species.status)}`}>
                      {species.status}
                    </span>
                  </div>

                  <p className="text-gray-700 mb-4">{species.description}</p>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="flex items-center mb-2">
                        <TrendingDown className="h-5 w-5 text-red-500 mr-2" />
                        <span className="font-semibold text-gray-900">Population</span>
                      </div>
                      <p className="text-gray-700">{species.population}</p>
                    </div>
                    <div>
                      <div className="flex items-center mb-2">
                        <MapPin className="h-5 w-5 text-blue-500 mr-2" />
                        <span className="font-semibold text-gray-900">Location</span>
                      </div>
                      <p className="text-gray-700">{species.location}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Main Threats</h4>
                    <div className="flex flex-wrap gap-2">
                      {species.threats.map((threat, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-red-100 text-red-800 text-sm rounded-full"
                        >
                          {threat}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center mb-2">
                      <Shield className="h-5 w-5 text-green-500 mr-2" />
                      <span className="font-semibold text-gray-900">Conservation Status</span>
                    </div>
                    <p className="text-gray-700">{species.conservation}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Conservation Efforts</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      {species.conservationEfforts.map((effort, index) => (
                        <li key={index}>{effort}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 bg-green-600 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Help Protect Pakistan's Wildlife</h3>
          <p className="text-green-100 mb-6 max-w-3xl mx-auto">
            Every observation and report helps us better understand and protect these endangered species. 
            Join our conservation efforts by documenting wildlife sightings and supporting local conservation initiatives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors">
              Report a Sighting
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 font-semibold py-3 px-6 rounded-lg transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EndangeredSpecies;

