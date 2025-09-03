import React from 'react';
import { AlertTriangle, Cloud, Zap, Thermometer, Waves } from 'lucide-react';

const NaturalHazards = () => {
  const hazards = [
    {
      name: 'Flooding',
      icon: Waves,
      severity: 'High',
      frequency: 'Annual (Monsoon)',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-500',
      description: 'Pakistan experiences severe flooding during monsoon season, affecting millions.',
      recentEvent: '2022 floods affected 33 million people and submerged 15% of the country',
      affectedRegions: ['Sindh', 'Balochistan', 'Punjab', 'KPK'],
      wildlifeImpact: [
        'Habitat destruction in wetlands',
        'Displacement of terrestrial species',
        'Water pollution affecting aquatic life',
        'Breeding disruption for migratory birds'
      ],
      preparedness: [
        'Early warning systems',
        'Evacuation plans for wildlife',
        'Habitat restoration post-flood',
        'Community awareness programs'
      ]
    },
    {
      name: 'Drought',
      icon: Thermometer,
      severity: 'High',
      frequency: 'Cyclical (3-5 years)',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-500',
      description: 'Extended periods of water scarcity affecting agriculture and wildlife.',
      recentEvent: '2018-2019 drought in Balochistan and Sindh',
      affectedRegions: ['Balochistan', 'Sindh', 'Southern Punjab'],
      wildlifeImpact: [
        'Water source depletion',
        'Vegetation loss affecting herbivores',
        'Increased human-wildlife conflict',
        'Migration pattern disruption'
      ],
      preparedness: [
        'Water conservation measures',
        'Drought-resistant vegetation',
        'Alternative water sources',
        'Wildlife corridor protection'
      ]
    },
    {
      name: 'Heatwaves',
      icon: Thermometer,
      severity: 'Medium',
      frequency: 'Annual (Summer)',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-500',
      description: 'Extreme temperatures exceeding 45°C affecting human and wildlife health.',
      recentEvent: '2021 heatwave with temperatures reaching 50°C in Sindh',
      affectedRegions: ['Sindh', 'Punjab', 'Balochistan'],
      wildlifeImpact: [
        'Heat stress in animals',
        'Increased water demand',
        'Behavioral changes in species',
        'Mortality in vulnerable populations'
      ],
      preparedness: [
        'Shade provision in habitats',
        'Water point maintenance',
        'Heat stress monitoring',
        'Emergency response protocols'
      ]
    },
    {
      name: 'Earthquakes',
      icon: Zap,
      severity: 'High',
      frequency: 'Irregular',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-500',
      description: 'Seismic activity due to tectonic plate movements in northern regions.',
      recentEvent: '2005 Kashmir earthquake (7.6 magnitude)',
      affectedRegions: ['Northern Pakistan', 'Kashmir', 'KPK'],
      wildlifeImpact: [
        'Habitat destruction',
        'Landslides affecting mountain species',
        'River course changes',
        'Ecosystem fragmentation'
      ],
      preparedness: [
        'Seismic monitoring systems',
        'Habitat resilience planning',
        'Emergency wildlife rescue',
        'Post-disaster ecosystem assessment'
      ]
    },
    {
      name: 'Wildfires',
      icon: Zap,
      severity: 'Medium',
      frequency: 'Seasonal',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-500',
      description: 'Forest fires during dry seasons affecting woodland ecosystems.',
      recentEvent: '2021 forest fires in Margalla Hills and northern areas',
      affectedRegions: ['Northern forests', 'Margalla Hills', 'Chitral'],
      wildlifeImpact: [
        'Direct mortality of wildlife',
        'Habitat loss and fragmentation',
        'Air quality degradation',
        'Long-term ecosystem changes'
      ],
      preparedness: [
        'Fire prevention measures',
        'Early detection systems',
        'Firefighting capabilities',
        'Post-fire rehabilitation'
      ]
    }
  ];

  const getSeverityColor = (severity) => {
    switch (severity.toLowerCase()) {
      case 'high': return 'bg-red-500 text-white';
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
            <AlertTriangle className="h-8 w-8 text-red-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">Natural Hazards & Alerts</h1>
          </div>
          <p className="text-lg text-gray-600 max-w-4xl">
            Pakistan faces various natural hazards that significantly impact wildlife and ecosystems. 
            Stay informed about current threats and learn how these events affect biodiversity across the country.
          </p>
        </div>

        {/* Current Alert Banner */}
        <div className="bg-red-600 text-white rounded-lg p-6 mb-8">
          <div className="flex items-center mb-2">
            <AlertTriangle className="h-6 w-6 mr-2" />
            <h3 className="text-xl font-bold">Current Weather Alert</h3>
          </div>
          <p className="text-red-100 mb-4">
            Monsoon season approaching - Increased flood risk in Sindh and southern Punjab. 
            Wildlife monitoring teams on high alert for potential habitat impacts.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-red-700 rounded-full text-sm">Flood Watch</span>
            <span className="px-3 py-1 bg-red-700 rounded-full text-sm">Wildlife Alert</span>
            <span className="px-3 py-1 bg-red-700 rounded-full text-sm">Habitat Monitoring</span>
          </div>
        </div>

        {/* Hazard Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">5</div>
            <div className="text-gray-700">Major Hazard Types</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">33M</div>
            <div className="text-gray-700">People Affected (2022 Floods)</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">15%</div>
            <div className="text-gray-700">Country Submerged (2022)</div>
          </div>
        </div>

        {/* Hazards Detail */}
        <div className="space-y-6">
          {hazards.map((hazard, index) => {
            const IconComponent = hazard.icon;
            return (
              <div key={index} className={`bg-white rounded-lg shadow-lg border-l-4 ${hazard.borderColor} overflow-hidden`}>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className={`p-3 rounded-full ${hazard.bgColor} mr-4`}>
                        <IconComponent className={`h-6 w-6 ${hazard.color}`} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{hazard.name}</h3>
                        <p className="text-gray-600">Frequency: {hazard.frequency}</p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getSeverityColor(hazard.severity)}`}>
                      {hazard.severity} Risk
                    </span>
                  </div>

                  <p className="text-gray-700 mb-4">{hazard.description}</p>

                  <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Recent Major Event</h4>
                    <p className="text-gray-700">{hazard.recentEvent}</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Affected Regions</h4>
                      <div className="flex flex-wrap gap-2">
                        {hazard.affectedRegions.map((region, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                          >
                            {region}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Wildlife Impact</h4>
                      <ul className="text-gray-700 text-sm space-y-1">
                        {hazard.wildlifeImpact.slice(0, 3).map((impact, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-red-500 mr-2">•</span>
                            {impact}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Preparedness Measures</h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {hazard.preparedness.map((measure, idx) => (
                        <div key={idx} className="flex items-start text-sm text-gray-700">
                          <span className="text-green-500 mr-2">✓</span>
                          {measure}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Emergency Contacts */}
        <div className="mt-12 bg-blue-600 rounded-lg p-6 text-white">
          <h3 className="text-xl font-bold mb-4">Emergency Contacts & Resources</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold mb-2">National Disaster Management</h4>
              <p className="text-blue-100">NDMA Helpline: 1129</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Wildlife Emergency</h4>
              <p className="text-blue-100">Wildlife Dept: Contact local offices</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Weather Updates</h4>
              <p className="text-blue-100">PMD: www.pmd.gov.pk</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NaturalHazards;

