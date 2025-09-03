import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X, Leaf, Map } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [wildlifeDropdown, setWildlifeDropdown] = useState(false);
  const [mapsDropdown, setMapsDropdown] = useState(false);

  const wildlifeItems = [
    { name: 'Species Directory', path: '/species-directory' },
    { name: 'Endangered & Protected Species', path: '/endangered-species' }
  ];

  const mapsItems = [
    { name: 'Interactive Map', path: '/interactive-map' },
    { name: 'Environment & Climate Zones', path: '/climate-zones' },
    { name: 'Biodiversity Hotspots', path: '/biodiversity-hotspots' },
    { name: 'Natural Hazards & Alerts', path: '/natural-hazards' },
    { name: 'Crop Calendar', path: '/crop-calendar' }
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-green-600" />
              <span className="text-xl font-bold text-gray-900">PakNature</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Home
            </Link>

            {/* Wildlife Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                onMouseEnter={() => setWildlifeDropdown(true)}
                onMouseLeave={() => setWildlifeDropdown(false)}
              >
                <Leaf className="h-4 w-4 mr-1" />
                Wildlife
                <ChevronDown className="h-4 w-4 ml-1" />
              </button>
              {wildlifeDropdown && (
                <div
                  className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-1 z-50"
                  onMouseEnter={() => setWildlifeDropdown(true)}
                  onMouseLeave={() => setWildlifeDropdown(false)}
                >
                  {wildlifeItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Maps Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                onMouseEnter={() => setMapsDropdown(true)}
                onMouseLeave={() => setMapsDropdown(false)}
              >
                <Map className="h-4 w-4 mr-1" />
                Maps
                <ChevronDown className="h-4 w-4 ml-1" />
              </button>
              {mapsDropdown && (
                <div
                  className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-1 z-50"
                  onMouseEnter={() => setMapsDropdown(true)}
                  onMouseLeave={() => setMapsDropdown(false)}
                >
                  {mapsItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/seasonal-guide" className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Seasonal Travel Guide
            </Link>
            <Link to="/submit-observation" className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Submit Observation
            </Link>
            <Link to="/blog-resources" className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Blog & Resources
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-green-600 focus:outline-none focus:text-green-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link to="/" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors">
                Home
              </Link>
              
              {/* Mobile Wildlife Section */}
              <div className="px-3 py-2">
                <div className="flex items-center text-base font-medium text-gray-900 mb-2">
                  <Leaf className="h-4 w-4 mr-2" />
                  Wildlife
                </div>
                {wildlifeItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="block px-4 py-2 text-sm text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Mobile Maps Section */}
              <div className="px-3 py-2">
                <div className="flex items-center text-base font-medium text-gray-900 mb-2">
                  <Map className="h-4 w-4 mr-2" />
                  Maps
                </div>
                {mapsItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="block px-4 py-2 text-sm text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <Link to="/seasonal-guide" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors">
                Seasonal Travel Guide
              </Link>
              <Link to="/submit-observation" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors">
                Submit Observation
              </Link>
              <Link to="/blog-resources" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors">
                Blog & Resources
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

