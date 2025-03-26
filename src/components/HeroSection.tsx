import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="pt-28 pb-20 sm:pt-36 sm:pb-28 bg-gradient-to-b from-indigo-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
                <span className="block">Illuminate Your</span>
                <span className="block bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">Digital Experience</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl">
                creator labs empowers businesses with intelligent solutions to transform data into actionable insights. Discover a new way to illuminate your digital journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#" className="bg-indigo-600 text-white px-8 py-3 rounded-md hover:bg-indigo-700 transition-colors text-center font-medium flex items-center justify-center">
                  Get Started <ArrowRight size={16} className="ml-2" />
                </a>
                <a href="#" className="border border-gray-300 text-gray-700 px-8 py-3 rounded-md hover:bg-gray-50 transition-colors text-center font-medium">
                  See Demo
                </a>
              </div>
              
              <div className="mt-10">
                <p className="text-sm text-gray-500 mb-3">Trusted by leading companies worldwide</p>
                <div className="flex flex-wrap gap-8 items-center">
                  <div className="text-gray-400 font-semibold">ACME Inc</div>
                  <div className="text-gray-400 font-semibold">TechCorp</div>
                  <div className="text-gray-400 font-semibold">GlobalSys</div>
                  <div className="text-gray-400 font-semibold">FutureLabs</div>
                </div>
              </div>
            </div>
            
            <div className="relative lg:pl-10">
              <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="creator labs Dashboard" 
                  className="w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-indigo-600 rounded-lg p-4 shadow-lg hidden md:block">
                <div className="text-white font-bold text-xl">200%</div>
                <div className="text-indigo-100 text-sm">Increased productivity</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;