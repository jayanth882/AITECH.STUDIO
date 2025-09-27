import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Brain, BookOpen, Calendar, FileText, ArrowRight, Star, Users, Award, TrendingUp, Zap, Globe, Target, Shield } from 'lucide-react';

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallax = scrolled * 0.3;
      
      if (heroRef.current) {
        heroRef.current.style.transform = `translateY(${parallax}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'AI Tools',
      description: 'Discover cutting-edge AI tools and platforms to enhance your productivity',
      link: '/ai-tools',
      color: 'blue'
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'AI Education',
      description: 'Learn from comprehensive AI courses and tutorials from top institutions',
      link: '/ai-education',
      color: 'purple'
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: 'AI Events',
      description: 'Stay updated with latest AI conferences, workshops and networking events',
      link: '/ai-events',
      color: 'green'
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Magazine',
      description: 'Read insights from AI industry leaders and company directory',
      link: '/magazine',
      color: 'orange'
    }
  ];

  const stats = [
    { icon: <Users className="w-6 h-6" />, value: '50K+', label: 'Active Users' },
    { icon: <Star className="w-6 h-6" />, value: '1000+', label: 'AI Tools' },
    { icon: <Award className="w-6 h-6" />, value: '500+', label: 'Courses' },
    { icon: <TrendingUp className="w-6 h-6" />, value: '99%', label: 'Satisfaction' }
  ];

  const partners = [
    'OpenAI', 'Google AI', 'Microsoft', 'NVIDIA', 'Hugging Face', 'Anthropic'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-100 via-white to-blue-100">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl animate-float-delayed"></div>
          <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-pink-600 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="space-y-8 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
               <span className="text-blue-600"></span><br />
               <span className="text-blue-600">AI Learning</span><br />
              Through Technology
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We provide expert AI insights and tailored technology solutions that optimize your learning journey in artificial intelligence.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
              <Link
                to="/ai-tools"
                className="group px-8 py-4 bg-blue-600 text-white font-semibold text-lg rounded-lg transition-all duration-300 hover:bg-blue-700 hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2"
              >
                <span>Explore More</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                to="/magazine"
                className="group px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold text-lg rounded-lg transition-all duration-300 hover:border-blue-600 hover:text-blue-600 hover:scale-105 flex items-center space-x-2"
              >
                <span>Contact Us To Know More</span>
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="mt-16 relative">
            <div className="relative mx-auto max-w-4xl">
              <img
                src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg"
                alt="AI Technology"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl"></div>
              
              {/* Floating Cards */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg animate-float">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700">AI GROWTH</span>
                </div>
                <h4 className="font-bold text-gray-900 mt-1">AI Growth Catalyst For SMEs</h4>
                <p className="text-xs text-gray-600 mt-1">We transform information systems into powerful business tools that fuel growth, enhance efficiency.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Partners */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gray-600 text-lg">
              Trusted by global brands for tailored, impactful digital transformation services.
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {partners.map((partner, index) => (
              <div key={index} className="text-2xl font-bold text-gray-400 hover:text-gray-600 transition-colors">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-blue-600 font-semibold mb-4">OUR APPROACH</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What We Do Let's Explore Some of them
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Achieve valuable insights with AI dashboards, productivity reports, and location analytics.
            </p>
          </div>

          {/* Service Tags */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {['AI Growth Catalyst', 'AI Solutions', 'AI Education', 'Data Science', 'AI/ML for Business', 'Staffing Solutions', 'Tailored Web Solutions', 'Digital Growth'].map((service, index) => (
              <span key={index} className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                {service}
              </span>
            ))}
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Link
                key={index}
                to={feature.link}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in-up border border-gray-100"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-${feature.color}-100 text-${feature.color}-600 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  <span>Explore</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                About AITECH.STUDIO
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Welcome to your comprehensive resource for artificial intelligence insights, tools, and education. 
                  We provide in-depth coverage of the rapidly evolving AI landscape, from machine learning and 
                  computer vision to natural language processing and predictive analytics.
                </p>
                <p>
                  Our mission is to make AI accessible to everyone, whether you're a seasoned professional or 
                  just beginning your journey into artificial intelligence. We offer tutorials, career resources, 
                  expert insights, and coverage of all prominent AI categories and companies.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg">
                  <p className="text-blue-800 font-semibold">
                    The digital platform, AITECH.STUDIO, functions as a subsidiary of Trizula Digital Solutions Pvt Ltd.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <Globe className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Global Reach</h4>
                    <p className="text-gray-600">Serving AI enthusiasts worldwide</p>
                  </div>
                  <div className="text-center">
                    <Zap className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Latest Tech</h4>
                    <p className="text-gray-600">Cutting-edge AI innovations</p>
                  </div>
                  <div className="text-center">
                    <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Expert Team</h4>
                    <p className="text-gray-600">Industry professionals</p>
                  </div>
                  <div className="text-center">
                    <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Quality Content</h4>
                    <p className="text-gray-600">Premium AI resources</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-8">
           
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready To Elevate Your AI Journey?
            </h2>
          </div>
          <p className="text-xl text-blue-100 mb-8">
            Contact us today for tailored solutions and expert support!
          </p>
          <Link
            to="/magazine"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg transition-all duration-300 hover:bg-gray-100 hover:scale-105 shadow-lg"
          >
            Contact us and know
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-300">
                <li>AI Tools</li>
                <li>AI Education</li>
                <li>Data Science</li>
                <li>Digital Marketing</li>
                <li>Staffing Solutions</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Technology / Vertical</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Oracle</li>
                <li>Zoho</li>
                <li>Amazon AWS</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Staffing Services</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Contract staffing</li>
                <li>Permanent roles</li>
                <li>Freelancers</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">We are Located</h3>
              <p className="text-gray-300 text-sm">
                402-B, Satyanarayana Enclave<br />
                Madinaguda, Hyderabad, Telangana<br />
                +91 630 356 5528
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;