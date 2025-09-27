import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Users, ExternalLink, Star } from 'lucide-react';

const AIEvents = () => {
  const [selectedType, setSelectedType] = useState('All');
  const [selectedMonth, setSelectedMonth] = useState('All');

  const eventTypes = ['All', 'Conference', 'Workshop', 'Webinar', 'Meetup', 'Summit'];
  const months = ['All', 'January', 'February', 'March', 'April', 'May', 'June'];

  const events = [
    {
      title: 'NeurIPS 2024',
      type: 'Conference',
      date: '2024-12-10',
      endDate: '2024-12-16',
      time: '09:00 AM',
      location: 'Vancouver, Canada',
      isVirtual: false,
      description: 'The premier conference on neural information processing systems, featuring cutting-edge research in machine learning and AI.',
      attendees: '8000+',
      price: '$850',
      rating: 4.9,
      url: 'https://neurips.cc/',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
      tags: ['Machine Learning', 'Neural Networks', 'Research', 'Deep Learning']
    },
    {
      title: 'AI Summit 2024',
      type: 'Summit',
      date: '2024-03-15',
      endDate: '2024-03-17',
      time: '10:00 AM',
      location: 'San Francisco, CA',
      isVirtual: false,
      description: 'Leading AI summit bringing together industry leaders, researchers, and innovators to discuss the future of artificial intelligence.',
      attendees: '5000+',
      price: '$1200',
      rating: 4.8,
      url: 'https://aisummit.com/',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
      tags: ['Industry Leaders', 'Innovation', 'Networking', 'Future Tech']
    },
    {
      title: 'Computer Vision Workshop',
      type: 'Workshop',
      date: '2024-02-20',
      endDate: '2024-02-22',
      time: '02:00 PM',
      location: 'Online',
      isVirtual: true,
      description: 'Hands-on workshop covering the latest techniques in computer vision and image processing using deep learning.',
      attendees: '500+',
      price: 'Free',
      rating: 4.7,
      url: 'https://cvworkshop.com/',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
      tags: ['Computer Vision', 'Hands-on', 'Deep Learning', 'Image Processing']
    },
    {
      title: 'Natural Language Processing Meetup',
      type: 'Meetup',
      date: '2024-01-25',
      endDate: '2024-01-25',
      time: '06:00 PM',
      location: 'New York, NY',
      isVirtual: false,
      description: 'Monthly meetup for NLP enthusiasts to share knowledge, network, and discuss latest developments in language models.',
      attendees: '200+',
      price: 'Free',
      rating: 4.6,
      url: 'https://nlpmeetup.com/',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
      tags: ['NLP', 'Language Models', 'Networking', 'Community']
    }
  ];

  const filteredEvents = events.filter(event => {
    const eventDate = new Date(event.date);
    const eventMonth = eventDate.toLocaleString('default', { month: 'long' });
    
    const matchesType = selectedType === 'All' || event.type === selectedType;
    const matchesMonth = selectedMonth === 'All' || eventMonth === selectedMonth;
    
    return matchesType && matchesMonth;
  });

  const formatDate = (dateString: string, endDateString?: string) => {
    const startDate = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    
    if (endDateString && endDateString !== dateString) {
      const endDate = new Date(endDateString);
      return `${startDate.toLocaleDateString('en-US', options)} - ${endDate.toLocaleDateString('en-US', options)}`;
    }
    
    return startDate.toLocaleDateString('en-US', options);
  };

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            AI Events & Conferences
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest AI conferences, workshops, and networking events happening around the world
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12 space-y-6">
          <div className="flex flex-wrap justify-center gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Event Type</label>
              <div className="flex flex-wrap gap-2">
                {eventTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedType === type
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-700 hover:text-blue-600 hover:bg-blue-50 border border-gray-200'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Month</label>
              <div className="flex flex-wrap gap-2">
                {months.map((month) => (
                  <button
                    key={month}
                    onClick={() => setSelectedMonth(month)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedMonth === month
                        ? 'bg-purple-600 text-white'
                        : 'bg-white text-gray-700 hover:text-purple-600 hover:bg-purple-50 border border-gray-200'
                    }`}
                  >
                    {month}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in-up border border-gray-100 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    event.type === 'Conference' ? 'bg-blue-600 text-white' :
                    event.type === 'Workshop' ? 'bg-green-600 text-white' :
                    event.type === 'Webinar' ? 'bg-purple-600 text-white' :
                    event.type === 'Meetup' ? 'bg-orange-600 text-white' :
                    'bg-red-600 text-white'
                  }`}>
                    {event.type}
                  </span>
                </div>
                <div className="absolute top-4 left-4">
                  {event.isVirtual && (
                    <span className="px-3 py-1 bg-cyan-600 rounded-full text-xs font-medium text-white">
                      Virtual
                    </span>
                  )}
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between text-white">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">{event.rating}</span>
                    </div>
                    <span className="text-sm font-bold">{event.price}</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {event.title}
                </h3>

                <div className="space-y-2 mb-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-blue-600" />
                    <span>{formatDate(event.date, event.endDate)}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-blue-600" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-blue-600" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-blue-600" />
                    <span>{event.attendees} attendees</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {event.description}
                </p>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {event.tags.map((tag, idx) => (
                      <span key={idx} className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={event.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 w-full justify-center px-4 py-3 bg-blue-600 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-blue-700 hover:scale-105 shadow-lg"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Register Now</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">No events found</h3>
            <p className="text-gray-600">Try adjusting your filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIEvents;