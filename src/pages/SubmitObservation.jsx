import React, { useState } from 'react';
import { Camera, MapPin, Calendar, Send } from 'lucide-react';

const SubmitObservation = () => {
  const [formData, setFormData] = useState({
    species: '',
    location: '',
    date: '',
    time: '',
    behavior: '',
    habitat: '',
    weather: '',
    notes: '',
    observerName: '',
    observerEmail: '',
    photo: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      photo: e.target.files[0]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your observation! It will be reviewed by our team.');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <Camera className="h-8 w-8 text-green-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">Submit Wildlife Observation</h1>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl">
            Help us build Pakistan's most comprehensive biodiversity database by sharing your wildlife observations. 
            Every sighting contributes to our understanding of species distribution and conservation needs.
          </p>
        </div>

        {/* Guidelines */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-blue-800 mb-4">Observation Guidelines</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-blue-700 mb-2">What to Include</h4>
              <ul className="text-blue-700 text-sm space-y-1">
                <li>• Clear photos if possible</li>
                <li>• Exact location coordinates</li>
                <li>• Date and time of observation</li>
                <li>• Behavior and habitat details</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-blue-700 mb-2">Important Notes</h4>
              <ul className="text-blue-700 text-sm space-y-1">
                <li>• Maintain safe distance from wildlife</li>
                <li>• Do not disturb animals for photos</li>
                <li>• Report endangered species immediately</li>
                <li>• Include weather conditions</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Observation Form */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Species Information */}
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Species Information</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Species Name (Common or Scientific)
                  </label>
                  <input
                    type="text"
                    name="species"
                    value={formData.species}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="e.g., Snow Leopard or Panthera uncia"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Behavior Observed
                  </label>
                  <select
                    name="behavior"
                    value={formData.behavior}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">Select behavior</option>
                    <option value="feeding">Feeding</option>
                    <option value="resting">Resting</option>
                    <option value="moving">Moving/Traveling</option>
                    <option value="hunting">Hunting</option>
                    <option value="social">Social interaction</option>
                    <option value="breeding">Breeding behavior</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Location & Time */}
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Location & Time</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <MapPin className="h-4 w-4 inline mr-1" />
                    Location Details
                  </label>
                  <textarea
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Include GPS coordinates, nearest landmark, province, district..."
                    required
                  />
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Calendar className="h-4 w-4 inline mr-1" />
                      Date of Observation
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Time of Observation
                    </label>
                    <input
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Environment Details */}
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Environment Details</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Habitat Type
                  </label>
                  <select
                    name="habitat"
                    value={formData.habitat}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">Select habitat</option>
                    <option value="forest">Forest</option>
                    <option value="grassland">Grassland</option>
                    <option value="wetland">Wetland</option>
                    <option value="desert">Desert</option>
                    <option value="mountain">Mountain</option>
                    <option value="coastal">Coastal</option>
                    <option value="agricultural">Agricultural</option>
                    <option value="urban">Urban</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Weather Conditions
                  </label>
                  <input
                    type="text"
                    name="weather"
                    value={formData.weather}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="e.g., Sunny, 25°C, light wind"
                  />
                </div>
              </div>
            </div>

            {/* Photo Upload */}
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Photo Upload</h3>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Camera className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <label className="cursor-pointer">
                  <span className="text-sm text-gray-600">
                    Click to upload photos or drag and drop
                  </span>
                  <input
                    type="file"
                    name="photo"
                    onChange={handleFileChange}
                    accept="image/*"
                    multiple
                    className="hidden"
                  />
                </label>
                <p className="text-xs text-gray-500 mt-2">
                  PNG, JPG up to 10MB each. Multiple photos accepted.
                </p>
              </div>
            </div>

            {/* Additional Notes */}
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Additional Notes</h3>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleInputChange}
                rows="4"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Any additional observations, group size, interactions with other species, conservation concerns..."
              />
            </div>

            {/* Observer Information */}
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Observer Information</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="observerName"
                    value={formData.observerName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="observerEmail"
                    value={formData.observerEmail}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors"
              >
                <Send className="h-5 w-5 mr-2" />
                Submit Observation
              </button>
            </div>
          </form>
        </div>

        {/* Impact Statement */}
        <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-green-800 mb-4">Your Impact</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 mb-1">5,000+</div>
              <div className="text-green-700 text-sm">Observations Submitted</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 mb-1">200+</div>
              <div className="text-green-700 text-sm">Species Documented</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 mb-1">50+</div>
              <div className="text-green-700 text-sm">Conservation Actions</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitObservation;

