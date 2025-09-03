import React, { useState } from 'react';
import { Search, Filter, Grid, List } from 'lucide-react';

const SpeciesDirectory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedThreatLevel, setSelectedThreatLevel] = useState('all');
  const [viewMode, setViewMode] = useState('grid');

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'mammals', label: 'Mammals' },
    { value: 'birds', label: 'Birds' },
    { value: 'reptiles', label: 'Reptiles' },
    { value: 'amphibians', label: 'Amphibians' },
    { value: 'fish', label: 'Fish' },
    { value: 'insects', label: 'Insects' },
    { value: 'plants', label: 'Plants' },
    { value: 'fungi', label: 'Fungi' }
  ];

  const regions = [
    { value: 'all', label: 'All Regions' },
    { value: 'northern-mountains', label: 'Northern Mountains' },
    { value: 'indus-plains', label: 'Indus Plains' },
    { value: 'western-highlands', label: 'Western Highlands' },
    { value: 'coastal-regions', label: 'Coastal Regions' },
    { value: 'desert-regions', label: 'Desert Regions' }
  ];

  const threatLevels = [
    { value: 'all', label: 'All Threat Levels' },
    { value: 'least-concern', label: 'Least Concern' },
    { value: 'near-threatened', label: 'Near Threatened' },
    { value: 'vulnerable', label: 'Vulnerable' },
    { value: 'endangered', label: 'Endangered' },
    { value: 'critically-endangered', label: 'Critically Endangered' }
  ];

  // Sample species data
  const speciesData = [
    {
      id: 1,
      name: 'Snow Leopard',
      scientificName: 'Panthera uncia',
      category: 'mammals',
      region: 'northern-mountains',
      threatLevel: 'vulnerable',
      image: '/src/assets/endangered_species/snow_leopard_1.jpg',
      description: 'The snow leopard is a large cat native to the mountain ranges of Central and South Asia.',
      habitat: 'Alpine and subalpine zones',
      population: '200-400 individuals in Pakistan'
    },
    {
      id: 2,
      name: 'Markhor',
      scientificName: 'Capra falconeri',
      category: 'mammals',
      region: 'northern-mountains',
      threatLevel: 'near-threatened',
      image: '/src/assets/endangered_species/markhor_1.jpg',
      description: 'The markhor is a large wild goat and the national animal of Pakistan.',
      habitat: 'Mountainous regions',
      population: '2,500-3,000 individuals'
    },
    {
      id: 3,
      name: 'Indus River Dolphin',
      scientificName: 'Platanista gangetica minor',
      category: 'mammals',
      region: 'indus-plains',
      threatLevel: 'endangered',
      image: '/src/assets/endangered_species/indus_dolphin_1.jpg',
      description: 'The Indus river dolphin is a freshwater dolphin endemic to the Indus River.',
      habitat: 'Indus River system',
      population: '1,800-2,000 individuals'
    },
    {
      id: 4,
      name: 'Himalayan Brown Bear',
      scientificName: 'Ursus arctos isabellinus',
      category: 'mammals',
      region: 'northern-mountains',
      threatLevel: 'critically-endangered',
      image: '/src/assets/endangered_species/himalayan_brown_bear_1.jpg',
      description: 'The Himalayan brown bear is a subspecies of brown bear found in the Himalayas.',
      habitat: 'Alpine meadows and forests',
      population: '150-200 individuals in Pakistan'
    },
    {
      id: 5,
      name: 'Mugger Crocodile',
      scientificName: 'Crocodylus palustris',
      category: 'reptiles',
      region: 'indus-plains',
      threatLevel: 'vulnerable',
      image: '/src/assets/endangered_species/mugger_crocodile_1.jpg',
      description: 'The mugger crocodile is a medium-sized broad-snouted crocodile.',
      habitat: 'Rivers, lakes, and marshes',
      population: '400-500 individuals'
    }
  ];

  const filteredSpecies = speciesData.filter(species => {
    const matchesSearch = species.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         species.scientificName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || species.category === selectedCategory;
    const matchesRegion = selectedRegion === 'all' || species.region === selectedRegion;
    const matchesThreatLevel = selectedThreatLevel === 'all' || species.threatLevel === selectedThreatLevel;
    
    return matchesSearch && matchesCategory && matchesRegion && matchesThreatLevel;
  });

  const getThreatLevelColor = (level) => {
    switch (level) {
      case 'least-concern': return 'text-green-600 bg-green-100';
      case 'near-threatened': return 'text-yellow-600 bg-yellow-100';
      case 'vulnerable': return 'text-orange-600 bg-orange-100';
      case 'endangered': return 'text-red-600 bg-red-100';
      case 'critically-endangered': return 'text-red-800 bg-red-200';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Species Directory</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Explore Pakistan's diverse wildlife with detailed information about each species, 
            their habitats, conservation status, and distribution across different regions.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search species..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>

            {/* Region Filter */}
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              {regions.map(region => (
                <option key={region.value} value={region.value}>
                  {region.label}
                </option>
              ))}
            </select>

            {/* Threat Level Filter */}
            <select
              value={selectedThreatLevel}
              onChange={(e) => setSelectedThreatLevel(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              {threatLevels.map(level => (
                <option key={level.value} value={level.value}>
                  {level.label}
                </option>
              ))}
            </select>

            {/* View Mode Toggle */}
            <div className="flex border border-gray-300 rounded-md">
              <button
                onClick={() => setViewMode('grid')}
                className={`flex-1 px-3 py-2 rounded-l-md ${
                  viewMode === 'grid' ? 'bg-green-500 text-white' : 'bg-white text-gray-700'
                }`}
              >
                <Grid className="h-5 w-5 mx-auto" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`flex-1 px-3 py-2 rounded-r-md ${
                  viewMode === 'list' ? 'bg-green-500 text-white' : 'bg-white text-gray-700'
                }`}
              >
                <List className="h-5 w-5 mx-auto" />
              </button>
            </div>
          </div>

          <div className="text-sm text-gray-600">
            Showing {filteredSpecies.length} species
          </div>
        </div>

        {/* Species Grid/List */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSpecies.map(species => (
              <div key={species.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src={species.image}
                  alt={species.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{species.name}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getThreatLevelColor(species.threatLevel)}`}>
                      {species.threatLevel.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 italic mb-3">{species.scientificName}</p>
                  <p className="text-gray-700 mb-3 line-clamp-3">{species.description}</p>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p><strong>Habitat:</strong> {species.habitat}</p>
                    <p><strong>Population:</strong> {species.population}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredSpecies.map(species => (
              <div key={species.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row gap-6">
                  <img
                    src={species.image}
                    alt={species.name}
                    className="w-full md:w-48 h-32 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{species.name}</h3>
                        <p className="text-sm text-gray-600 italic">{species.scientificName}</p>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getThreatLevelColor(species.threatLevel)}`}>
                        {species.threatLevel.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                      </span>
                    </div>
                    <p className="text-gray-700 mb-3">{species.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600">
                      <p><strong>Habitat:</strong> {species.habitat}</p>
                      <p><strong>Population:</strong> {species.population}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {filteredSpecies.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No species found matching your criteria.</p>
            <p className="text-gray-400 mt-2">Try adjusting your filters or search terms.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SpeciesDirectory;

