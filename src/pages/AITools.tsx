import React, { useState } from 'react';
import { ExternalLink, Search, Star, Brain, Eye, MessageSquare, Code, Image, Music, Video } from 'lucide-react';

const AITools = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All', 'Machine Learning', 'Computer Vision', 'Natural Language Processing', 
    'Code Generation', 'Image Generation', 'Audio/Music', 'Video Processing'
  ];

  const tools = [
    {
      name: 'ChatGPT',
      description: 'Advanced conversational AI for text generation and assistance',
      category: 'Natural Language Processing',
      rating: 4.8,
      icon: <MessageSquare className="w-6 h-6" />,
      url: 'https://chat.openai.com',
      features: ['Text Generation', 'Code Help', 'Creative Writing'],
      price: 'Free/Premium'
    },
    {
      name: 'GitHub Copilot',
      description: 'AI-powered code completion and programming assistant',
      category: 'Code Generation',
      rating: 4.7,
      icon: <Code className="w-6 h-6" />,
      url: 'https://github.com/features/copilot',
      features: ['Code Completion', 'Bug Fixes', 'Documentation'],
      price: '$10/month'
    },
    {
      name: 'DALL-E 2',
      description: 'Create realistic images and art from text descriptions',
      category: 'Image Generation',
      rating: 4.6,
      icon: <Image className="w-6 h-6" />,
      url: 'https://openai.com/dall-e-2/',
      features: ['Text to Image', 'Image Editing', 'Style Transfer'],
      price: 'Credits'
    },
    {
      name: 'Midjourney',
      description: 'AI art generator creating stunning visual content',
      category: 'Image Generation',
      rating: 4.9,
      icon: <Eye className="w-6 h-6" />,
      url: 'https://midjourney.com',
      features: ['Artistic Images', 'High Quality', 'Creative Styles'],
      price: '$10-60/month'
    },
    {
      name: 'TensorFlow',
      description: 'Open-source machine learning framework',
      category: 'Machine Learning',
      rating: 4.5,
      icon: <Brain className="w-6 h-6" />,
      url: 'https://tensorflow.org',
      features: ['Deep Learning', 'Neural Networks', 'Model Training'],
      price: 'Free'
    },
    {
      name: 'Mubert',
      description: 'AI-generated music for content creators',
      category: 'Audio/Music',
      rating: 4.4,
      icon: <Music className="w-6 h-6" />,
      url: 'https://mubert.com',
      features: ['Music Generation', 'Royalty Free', 'Custom Tracks'],
      price: 'Free/Premium'
    },
    {
      name: 'RunwayML',
      description: 'AI-powered video editing and generation tools',
      category: 'Video Processing',
      rating: 4.3,
      icon: <Video className="w-6 h-6" />,
      url: 'https://runwayml.com',
      features: ['Video Generation', 'Effects', 'Editing Tools'],
      price: '$15-35/month'
    },
    {
      name: 'OpenCV',
      description: 'Computer vision and machine learning software library',
      category: 'Computer Vision',
      rating: 4.6,
      icon: <Eye className="w-6 h-6" />,
      url: 'https://opencv.org',
      features: ['Image Processing', 'Object Detection', 'Face Recognition'],
      price: 'Free'
    }
  ];

  const filteredTools = tools.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || tool.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            AI Tools Directory
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the most powerful AI tools and platforms to enhance your productivity and creativity
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12 space-y-6">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search AI tools..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 shadow-sm"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:text-blue-600 hover:bg-blue-50 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTools.map((tool, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in-up border border-gray-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 text-blue-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  {tool.icon}
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-gray-600 text-sm font-medium">{tool.rating}</span>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {tool.name}
              </h3>

              <p className="text-gray-600 mb-4 leading-relaxed">
                {tool.description}
              </p>

              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium mb-3">
                  {tool.category}
                </span>
                <div className="flex flex-wrap gap-2 mb-3">
                  {tool.features.map((feature, idx) => (
                    <span key={idx} className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-md">
                      {feature}
                    </span>
                  ))}
                </div>
                <div className="text-sm font-semibold text-gray-900">
                  {tool.price}
                </div>
              </div>

              <a
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-blue-600 font-semibold group-hover:text-blue-700 transition-colors"
              >
                <span>Visit Tool</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>

        {filteredTools.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">No tools found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AITools;