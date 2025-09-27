import React from 'react';
import { ExternalLink, Building, Users, MapPin, Phone, Globe, Award, Briefcase } from 'lucide-react';

const Magazine = () => {
  const companyInfo = {
    name: 'AITECH.STUDIO',
    parent: 'Trizula Digital Solutions Pvt Ltd',
    founded: '2023',
    industry: 'Information Services',
    size: '11-50 employees',
    headquarters: 'Hyderabad, Telangana',
    address: '402, BLOCK-B, SATYANARAYANA ENCLAVE, Madinaguda, Hyderabad, Telangana 500050, IN',
    phone: '6303565528',
    website: 'https://aitech.studio/',
    specialties: ['AI', 'Artificial Intelligence', 'NLP', 'AI Categories', 'Robotics', 'AI Tutorials', 'AI Blogs']
  };

  const aiCompanies = [
    {
      name: 'OpenAI',
      description: 'Leading AI research company focused on developing safe and beneficial artificial general intelligence',
      category: 'AI Research',
      founded: '2015',
      location: 'San Francisco, CA',
      specialties: ['GPT Models', 'DALL-E', 'ChatGPT', 'AI Safety'],
      website: 'https://openai.com',
      logo: '🤖'
    },
    {
      name: 'Google DeepMind',
      description: 'AI research lab combining Google AI and DeepMind to advance AI for the benefit of humanity',
      category: 'AI Research',
      founded: '2010',
      location: 'London, UK',
      specialties: ['AlphaGo', 'Protein Folding', 'Reinforcement Learning', 'Neural Networks'],
      website: 'https://deepmind.com',
      logo: '🧠'
    },
    {
      name: 'Anthropic',
      description: 'AI safety company focused on developing safe, beneficial, and understandable AI systems',
      category: 'AI Safety',
      founded: '2021',
      location: 'San Francisco, CA',
      specialties: ['Claude AI', 'Constitutional AI', 'AI Safety Research', 'Large Language Models'],
      website: 'https://anthropic.com',
      logo: '🔒'
    },
    {
      name: 'NVIDIA',
      description: 'Computing platform company accelerating AI and high-performance computing applications',
      category: 'AI Hardware',
      founded: '1993',
      location: 'Santa Clara, CA',
      specialties: ['GPU Computing', 'CUDA', 'AI Chips', 'Deep Learning Frameworks'],
      website: 'https://nvidia.com',
      logo: '💻'
    },
    {
      name: 'Hugging Face',
      description: 'Platform democratizing machine learning through open-source tools and model sharing',
      category: 'AI Platform',
      founded: '2016',
      location: 'New York, NY',
      specialties: ['Transformers', 'Model Hub', 'NLP', 'Open Source AI'],
      website: 'https://huggingface.co',
      logo: '🤗'
    },
    {
      name: 'Stability AI',
      description: 'AI company focused on making AI accessible through open-source generative models',
      category: 'Generative AI',
      founded: '2020',
      location: 'London, UK',
      specialties: ['Stable Diffusion', 'Image Generation', 'Open Source Models', 'Creative AI'],
      website: 'https://stability.ai',
      logo: '🎨'
    }
  ];

  const industryInsights = [
    {
      title: 'The Rise of Generative AI',
      description: 'Exploring how generative AI is transforming industries from content creation to software development',
      category: 'Trends',
      readTime: '8 min read'
    },
    {
      title: 'AI Ethics in Practice',
      description: 'Real-world applications of ethical AI principles and their impact on business decisions',
      category: 'Ethics',
      readTime: '12 min read'
    },
    {
      title: 'Future of Work with AI',
      description: 'How artificial intelligence is reshaping job markets and creating new opportunities',
      category: 'Future',
      readTime: '10 min read'
    },
    {
      title: 'AI in Healthcare Revolution',
      description: 'Breakthrough applications of AI in medical diagnosis, drug discovery, and patient care',
      category: 'Healthcare',
      readTime: '15 min read'
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            AITECH.STUDIO Magazine
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Industry insights, company profiles, and comprehensive coverage of the AI ecosystem
          </p>
        </div>

        {/* Company Information */}
        <section className="mb-20">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <img 
                    src="/aitech_LOGO1-removebg-preview.png" 
                    alt="AITECH.STUDIO" 
                    className="h-20 w-auto"
                  />
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">{companyInfo.name}</h2>
                    <div className="bg-blue-50 border-l-4 border-blue-600 p-3 rounded-r-lg mt-2">
                      <p className="text-blue-800 font-semibold text-sm">
                        A subsidiary of {companyInfo.parent}
                      </p>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Your comprehensive resource for AI insights, tools, education, and industry coverage. 
                  We provide in-depth analysis of the rapidly evolving artificial intelligence landscape, 
                  serving professionals and enthusiasts worldwide.
                </p>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Building className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="text-gray-500 text-sm">Industry</p>
                        <p className="text-gray-900 font-medium">{companyInfo.industry}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="text-gray-500 text-sm">Company Size</p>
                        <p className="text-gray-900 font-medium">{companyInfo.size}</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Award className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="text-gray-500 text-sm">Founded</p>
                        <p className="text-gray-900 font-medium">{companyInfo.founded}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="text-gray-500 text-sm">Headquarters</p>
                        <p className="text-gray-900 font-medium">{companyInfo.headquarters}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-4 h-4 text-blue-600" />
                      <span className="text-gray-700">{companyInfo.phone}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Globe className="w-4 h-4 text-blue-600" />
                      <a href={companyInfo.website} className="text-blue-600 hover:text-blue-700 transition-colors">
                        {companyInfo.website}
                      </a>
                    </div>
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-4 h-4 text-blue-600 mt-1" />
                      <span className="text-gray-700 text-sm">{companyInfo.address}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Specialties</h3>
                  <div className="flex flex-wrap gap-2">
                    {companyInfo.specialties.map((specialty, index) => (
                      <span key={index} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Insights */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Latest Industry Insights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industryInsights.map((insight, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in-up border border-gray-100"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                    {insight.category}
                  </span>
                  <span className="text-gray-500 text-sm">{insight.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {insight.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {insight.description}
                </p>
                <button className="inline-flex items-center space-x-2 text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                  <span>Read More</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* AI Companies Directory */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            AI Companies Directory
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiCompanies.map((company, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in-up border border-gray-100"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-4xl">{company.logo}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {company.name}
                    </h3>
                    <p className="text-blue-600 text-sm">{company.category}</p>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {company.description}
                </p>

                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Award className="w-4 h-4 text-blue-600" />
                    <span className="text-gray-500">Founded: {company.founded}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-blue-600" />
                    <span className="text-gray-500">{company.location}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-gray-500 text-xs mb-2">Specialties:</p>
                  <div className="flex flex-wrap gap-1">
                    {company.specialties.map((specialty, idx) => (
                      <span key={idx} className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-md">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={company.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-blue-600 font-semibold group-hover:text-blue-700 transition-colors"
                >
                  <Globe className="w-4 h-4" />
                  <span>Visit Website</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Magazine;