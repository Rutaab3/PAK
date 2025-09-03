import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, MapPin, Camera, BookOpen, AlertTriangle, Thermometer } from 'lucide-react';

// Import ecosystem images
import ecosystem1 from '../assets/ecosystems/pakistan_ecosystem_1.jpeg';
import ecosystem3 from '../assets/ecosystems/pakistan_ecosystem_3.jpeg';
import ecosystem6 from '../assets/ecosystems/pakistan_ecosystem_6.jpg';
import mountains1 from '../assets/ecosystems/mountains_1.jpg';
import forest4 from '../assets/ecosystems/forest_4.jpg';
import coasts2 from '../assets/ecosystems/coasts_2.jpg';
import deserts2 from '../assets/ecosystems/deserts_2.jpg';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: ecosystem1,
      title: "Pakistan's Diverse Ecosystems",
      subtitle: "From mountains to coasts, explore the rich biodiversity of Pakistan",
      cta: "Explore Wildlife"
    },
    {
      image: mountains1,
      title: "Majestic Mountain Ranges",
      subtitle: "Discover the wildlife of Himalayas, Karakoram, and Hindu Kush",
      cta: "View Mountains"
    },
    {
      image: forest4,
      title: "Lush Forest Habitats",
      subtitle: "Home to countless species in Pakistan's protected forests",
      cta: "Forest Wildlife"
    },
    {
      image: coasts2,
      title: "Coastal Marine Life",
      subtitle: "Explore the rich marine biodiversity along Pakistan's coastline",
      cta: "Marine Species"
    },
    {
      image: deserts2,
      title: "Desert Ecosystems",
      subtitle: "Unique adaptations in Thar, Cholistan, and other desert regions",
      cta: "Desert Life"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Banner Slider */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            </div>
          ))}
        </div>

        {/* Slider Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all z-10"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all z-10"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              {slides[currentSlide].title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-fade-in-delay">
              {slides[currentSlide].subtitle}
            </p>
            <Link
              to="/species-directory"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors transform hover:scale-105"
            >
              {slides[currentSlide].cta}
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pakistan's Biodiversity at a Glance
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover the incredible diversity of life across Pakistan's varied landscapes and climate zones
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">195+</div>
              <div className="text-gray-700">Mammal Species</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">668+</div>
              <div className="text-gray-700">Bird Species</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">174+</div>
              <div className="text-gray-700">Reptile Species</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">5000+</div>
              <div className="text-gray-700">Invertebrate Species</div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Updates Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Latest Updates & Alerts
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Weather Update */}
            <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
              <div className="flex items-center mb-4">
                <Thermometer className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">Weather Update</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Current weather conditions across Pakistan's major climate zones. Monsoon season approaching with expected rainfall patterns.
              </p>
              <Link to="/climate-zones" className="text-blue-600 hover:text-blue-700 font-medium">
                View Climate Data →
              </Link>
            </div>

            {/* Environmental Alert */}
            <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-500">
              <div className="flex items-center mb-4">
                <AlertTriangle className="h-6 w-6 text-red-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">Environmental Alert</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Monitoring ongoing environmental challenges including habitat loss and climate change impacts on wildlife populations.
              </p>
              <Link to="/natural-hazards" className="text-red-600 hover:text-red-700 font-medium">
                View Alerts →
              </Link>
            </div>

            {/* Recent Observations */}
            <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500">
              <div className="flex items-center mb-4">
                <Camera className="h-6 w-6 text-green-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">Recent Observations</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Latest wildlife sightings and observations from citizen scientists across Pakistan's diverse ecosystems.
              </p>
              <Link to="/submit-observation" className="text-green-600 hover:text-green-700 font-medium">
                Submit Yours →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Explore Pakistan's Natural Heritage
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Endangered Species */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img src={ecosystem3} alt="Endangered Species" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Endangered Species</h3>
                <p className="text-gray-600 mb-4">
                  Learn about Pakistan's critically endangered wildlife including snow leopards, markhor, and Indus dolphins.
                </p>
                <Link to="/endangered-species" className="text-green-600 hover:text-green-700 font-medium">
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Interactive Map */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img src={ecosystem6} alt="Interactive Map" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Interactive Map</h3>
                <p className="text-gray-600 mb-4">
                  Explore Pakistan's biodiversity through our interactive map showing species distributions and hotspots.
                </p>
                <Link to="/interactive-map" className="text-green-600 hover:text-green-700 font-medium">
                  Explore Map →
                </Link>
              </div>
            </div>

            {/* Educational Resources */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-green-400 to-blue-500 h-48 flex items-center justify-center">
                <BookOpen className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Educational Resources</h3>
                <p className="text-gray-600 mb-4">
                  Access research articles, field guides, and educational materials about Pakistan's wildlife and ecosystems.
                </p>
                <Link to="/blog-resources" className="text-green-600 hover:text-green-700 font-medium">
                  Browse Resources →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Pakistan's Biodiversity Conservation Effort
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Contribute to citizen science by documenting wildlife observations and helping protect Pakistan's natural heritage for future generations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/submit-observation"
              className="bg-white text-green-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              Submit Observation
            </Link>
            <Link
              to="/species-directory"
              className="border-2 border-white text-white hover:bg-white hover:text-green-600 font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              Browse Species
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

