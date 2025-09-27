import React, { useState } from 'react';
import { ExternalLink, BookOpen, Clock, Users, Award, Star } from 'lucide-react';

const AIEducation = () => {
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [selectedType, setSelectedType] = useState('All');

  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];
  const types = ['All', 'Course', 'Tutorial', 'Certification', 'Workshop'];

  const educationResources = [
    {
      title: 'Machine Learning Specialization',
      provider: 'Coursera - Stanford University',
      description: 'Comprehensive introduction to machine learning, data mining, and statistical pattern recognition',
      level: 'Beginner',
      type: 'Course',
      duration: '3 months',
      students: '2.1M+',
      rating: 4.9,
      url: 'https://www.coursera.org/specializations/machine-learning',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
      skills: ['Python', 'Machine Learning', 'Neural Networks', 'Deep Learning'],
      price: '$49/month'
    },
    {
      title: 'Deep Learning Specialization',
      provider: 'Coursera - deeplearning.ai',
      description: 'Master deep learning and break into AI with this comprehensive specialization',
      level: 'Intermediate',
      type: 'Course',
      duration: '4 months',
      students: '850K+',
      rating: 4.8,
      url: 'https://www.coursera.org/specializations/deep-learning',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
      skills: ['TensorFlow', 'CNN', 'RNN', 'Deep Learning'],
      price: '$49/month'
    },
    {
      title: 'CS50 Introduction to AI with Python',
      provider: 'Harvard University',
      description: 'Explore concepts and algorithms at the foundation of modern artificial intelligence',
      level: 'Beginner',
      type: 'Course',
      duration: '7 weeks',
      students: '500K+',
      rating: 4.7,
      url: 'https://cs50.harvard.edu/ai/',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
      skills: ['Python', 'Search Algorithms', 'Knowledge', 'Uncertainty'],
      price: 'Free'
    },
    {
      title: 'Natural Language Processing',
      provider: 'Coursera - deeplearning.ai',
      description: 'Learn cutting-edge natural language processing techniques',
      level: 'Advanced',
      type: 'Course',
      duration: '4 months',
      students: '300K+',
      rating: 4.6,
      url: 'https://www.coursera.org/specializations/natural-language-processing',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
      skills: ['NLP', 'BERT', 'Transformers', 'Attention Models'],
      price: '$49/month'
    },
    {
      title: 'AI for Everyone',
      provider: 'Coursera - deeplearning.ai',
      description: 'Non-technical course designed to help you understand AI technologies',
      level: 'Beginner',
      type: 'Course',
      duration: '4 weeks',
      students: '1.2M+',
      rating: 4.8,
      url: 'https://www.coursera.org/learn/ai-for-everyone',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
      skills: ['AI Strategy', 'Machine Learning', 'Data Science', 'AI Ethics'],
      price: 'Free'
    },
    {
      title: 'TensorFlow Developer Certificate',
      provider: 'TensorFlow',
      description: 'Demonstrate your proficiency in using TensorFlow to solve deep learning problems',
      level: 'Intermediate',
      type: 'Certification',
      duration: 'Self-paced',
      students: '100K+',
      rating: 4.5,
      url: 'https://www.tensorflow.org/certificate',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
      skills: ['TensorFlow', 'Computer Vision', 'NLP', 'Time Series'],
      price: '$100'
    }
  ];

  const filteredResources = educationResources.filter(resource => {
    const matchesLevel = selectedLevel === 'All' || resource.level === selectedLevel;
    const matchesType = selectedType === 'All' || resource.type === selectedType;
    return matchesLevel && matchesType;
  });

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            AI Education Hub
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master artificial intelligence with curated courses, tutorials, and certifications from top institutions and platforms
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12 space-y-6">
          <div className="flex flex-wrap justify-center gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Level</label>
              <div className="flex flex-wrap gap-2">
                {levels.map((level) => (
                  <button
                    key={level}
                    onClick={() => setSelectedLevel(level)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedLevel === level
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-700 hover:text-blue-600 hover:bg-blue-50 border border-gray-200'
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Type</label>
              <div className="flex flex-wrap gap-2">
                {types.map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedType === type
                        ? 'bg-purple-600 text-white'
                        : 'bg-white text-gray-700 hover:text-purple-600 hover:bg-purple-50 border border-gray-200'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Education Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredResources.map((resource, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in-up border border-gray-100 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={resource.image}
                  alt={resource.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    resource.level === 'Beginner' ? 'bg-green-500 text-white' :
                    resource.level === 'Intermediate' ? 'bg-yellow-500 text-white' :
                    'bg-red-500 text-white'
                  }`}>
                    {resource.level}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-blue-600 rounded-full text-xs font-medium text-white">
                    {resource.type}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {resource.title}
                </h3>
                
                <p className="text-blue-600 text-sm font-medium mb-3">
                  {resource.provider}
                </p>

                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {resource.description}
                </p>

                <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{resource.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{resource.students}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span>{resource.rating}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">Skills:</span>
                    <span className="text-sm font-bold text-gray-900">{resource.price}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {resource.skills.map((skill, idx) => (
                      <span key={idx} className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-md">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 w-full justify-center px-4 py-3 bg-blue-600 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-blue-700 hover:scale-105 shadow-lg"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Start Learning</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredResources.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">No resources found</h3>
            <p className="text-gray-600">Try adjusting your filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIEducation;