import React, { useState } from 'react';
import { BookOpen, Download, ExternalLink, Search } from 'lucide-react';

const BlogResources = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { value: 'all', label: 'All Resources' },
    { value: 'research', label: 'Research Papers' },
    { value: 'guides', label: 'Field Guides' },
    { value: 'reports', label: 'Conservation Reports' },
    { value: 'education', label: 'Educational Materials' },
    { value: 'news', label: 'News & Updates' }
  ];

  const resources = [
    {
      id: 1,
      title: 'Snow Leopard Conservation in Pakistan: A Comprehensive Study',
      category: 'research',
      type: 'Research Paper',
      author: 'Dr. Ahmad Khan et al.',
      date: '2023-11-15',
      description: 'Detailed analysis of snow leopard populations, habitat requirements, and conservation strategies in northern Pakistan.',
      downloadUrl: '#',
      tags: ['Snow Leopard', 'Conservation', 'Northern Pakistan'],
      featured: true
    },
    {
      id: 2,
      title: 'Field Guide to Birds of Pakistan',
      category: 'guides',
      type: 'Field Guide',
      author: 'Pakistan Wildlife Foundation',
      date: '2023-10-20',
      description: 'Complete identification guide covering 668+ bird species found in Pakistan with distribution maps and behavioral notes.',
      downloadUrl: '#',
      tags: ['Birds', 'Identification', 'Field Guide'],
      featured: true
    },
    {
      id: 3,
      title: 'State of Pakistan\'s Biodiversity Report 2023',
      category: 'reports',
      type: 'Annual Report',
      author: 'Ministry of Climate Change',
      date: '2023-09-30',
      description: 'Annual assessment of biodiversity status, threats, and conservation progress across Pakistan.',
      downloadUrl: '#',
      tags: ['Biodiversity', 'Annual Report', 'Conservation Status'],
      featured: false
    },
    {
      id: 4,
      title: 'Mangrove Ecosystems of Pakistan: Ecology and Conservation',
      category: 'research',
      type: 'Research Paper',
      author: 'Dr. Fatima Sheikh',
      date: '2023-08-12',
      description: 'Comprehensive study of Pakistan\'s mangrove ecosystems, their ecological importance, and conservation challenges.',
      downloadUrl: '#',
      tags: ['Mangroves', 'Coastal Ecology', 'Conservation'],
      featured: false
    },
    {
      id: 5,
      title: 'Wildlife Photography Ethics and Best Practices',
      category: 'education',
      type: 'Educational Guide',
      author: 'Pakistan Nature Photography Society',
      date: '2023-07-25',
      description: 'Guidelines for ethical wildlife photography that prioritizes animal welfare and habitat conservation.',
      downloadUrl: '#',
      tags: ['Photography', 'Ethics', 'Wildlife'],
      featured: false
    },
    {
      id: 6,
      title: 'Endangered Species Recovery Plans for Pakistan',
      category: 'reports',
      type: 'Conservation Plan',
      author: 'WWF Pakistan',
      date: '2023-06-18',
      description: 'Detailed recovery plans for critically endangered species including action items and timelines.',
      downloadUrl: '#',
      tags: ['Endangered Species', 'Recovery Plans', 'Conservation'],
      featured: false
    },
    {
      id: 7,
      title: 'Climate Change Impacts on Pakistan\'s Wildlife',
      category: 'research',
      type: 'Research Paper',
      author: 'Climate Research Institute',
      date: '2023-05-10',
      description: 'Analysis of how climate change is affecting wildlife populations and ecosystems across Pakistan.',
      downloadUrl: '#',
      tags: ['Climate Change', 'Wildlife Impact', 'Research'],
      featured: false
    },
    {
      id: 8,
      title: 'Community-Based Conservation Success Stories',
      category: 'news',
      type: 'News Article',
      author: 'Conservation Pakistan',
      date: '2023-04-22',
      description: 'Highlighting successful community-led conservation initiatives across different regions of Pakistan.',
      downloadUrl: '#',
      tags: ['Community Conservation', 'Success Stories', 'Local Initiatives'],
      featured: false
    }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredResources = resources.filter(resource => resource.featured);

  const getTypeColor = (type) => {
    switch (type) {
      case 'Research Paper': return 'bg-blue-100 text-blue-800';
      case 'Field Guide': return 'bg-green-100 text-green-800';
      case 'Annual Report': return 'bg-purple-100 text-purple-800';
      case 'Educational Guide': return 'bg-yellow-100 text-yellow-800';
      case 'Conservation Plan': return 'bg-red-100 text-red-800';
      case 'News Article': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <BookOpen className="h-8 w-8 text-blue-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">Blog & Resources</h1>
          </div>
          <p className="text-lg text-gray-600 max-w-4xl">
            Access the latest research, field guides, conservation reports, and educational materials 
            about Pakistan's wildlife and biodiversity. Stay informed with cutting-edge science and conservation efforts.
          </p>
        </div>

        {/* Featured Resources */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Resources</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {featuredResources.map(resource => (
              <div key={resource.id} className="bg-white rounded-lg shadow-lg overflow-hidden border-l-4 border-blue-500">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(resource.type)}`}>
                      {resource.type}
                    </span>
                    <span className="text-sm text-gray-500">{resource.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{resource.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">by {resource.author}</p>
                  <p className="text-gray-700 mb-4">{resource.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {resource.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <button className="flex items-center px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm">
                      <Download className="h-4 w-4 mr-1" />
                      Download
                    </button>
                    <button className="flex items-center px-3 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors text-sm">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      View Online
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    selectedCategory === category.value
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-4 text-sm text-gray-600">
            Showing {filteredResources.length} resources
          </div>
        </div>

        {/* Resources List */}
        <div className="space-y-4">
          {filteredResources.map(resource => (
            <div key={resource.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(resource.type)}`}>
                      {resource.type}
                    </span>
                    <span className="text-sm text-gray-500">{resource.date}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{resource.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">by {resource.author}</p>
                  <p className="text-gray-700 mb-3">{resource.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {resource.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-2">
                  <button className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm">
                    <Download className="h-4 w-4 mr-1" />
                    Download
                  </button>
                  <button className="flex items-center justify-center px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors text-sm">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredResources.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">No resources found matching your criteria.</p>
            <p className="text-gray-400 mt-2">Try adjusting your search terms or category filters.</p>
          </div>
        )}

        {/* Newsletter Signup */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg p-8 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest research, conservation news, and educational resources 
              about Pakistan's wildlife and biodiversity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Resource Statistics */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg p-6 text-center shadow-md">
            <div className="text-3xl font-bold text-blue-600 mb-2">150+</div>
            <div className="text-gray-700">Research Papers</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-md">
            <div className="text-3xl font-bold text-green-600 mb-2">25+</div>
            <div className="text-gray-700">Field Guides</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-md">
            <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
            <div className="text-gray-700">Reports</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-md">
            <div className="text-3xl font-bold text-orange-600 mb-2">100+</div>
            <div className="text-gray-700">Educational Materials</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogResources;

