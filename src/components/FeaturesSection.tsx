import React from 'react';
import { Laptop, Shield, Zap, AlertCircle, Check } from 'lucide-react';

const features = [
  {
    title: 'Intelligent Analytics',
    description: 'Transform raw data into actionable insights with our AI-powered analytics platform. Identify trends and make data-driven decisions.',
    icon: <Laptop className="h-10 w-10 text-blue-600" />,
  },
  {
    title: 'Enhanced Security',
    description: 'Keep your data safe with our industry-leading security protocols. Enterprise-grade protection for businesses of all sizes.',
    icon: <Shield className="h-10 w-10 text-blue-600" />,
  },
  {
    title: 'Lightning Performance',
    description: 'Experience blazing-fast performance with our optimized platform. No more waiting for reports or dashboards to load.',
    icon: <Zap className="h-10 w-10 text-blue-600" />,
  },
  {
    title: 'Real-time Monitoring',
    description: 'Stay on top of your metrics with real-time monitoring. Get instant notifications when something requires your attention.',
    icon: <AlertCircle className="h-10 w-10 text-blue-600" />,
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Powerful Features for Modern Businesses</h2>
          <p className="text-xl text-gray-600">Everything you need to take your business to the next level</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Seamless Integration with Your Workflow</h3>
              <p className="text-lg text-gray-600 mb-6">
                Luecine adapts to how you work, not the other way around. Integrate with your favorite tools and services for a truly seamless experience.
              </p>
              <ul className="space-y-4">
                {[
                  'Works with 100+ popular SaaS applications',
                  'Custom API for specialized integrations',
                  'Data import/export in multiple formats',
                  'Automated workflow triggers and actions'
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-100 to-blue-100 rounded-xl p-2">
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Seamless Integration" 
                  className="rounded-lg shadow-md w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;