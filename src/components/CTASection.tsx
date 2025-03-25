import React from 'react';
import { Mail } from 'lucide-react';

const CTASection = () => {
  return (
    <section id="contact" className="py-20 bg-indigo-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">Ready to Transform Your Data Experience?</h2>
              <p className="text-xl text-gray-600 mb-8">
                Join thousands of forward-thinking businesses already using Luecine to unlock the full potential of their data.
              </p>
              <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Us</h3>
                <form>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" 
                      placeholder="Your name"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" 
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea 
                      id="message" 
                      rows={4} 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" 
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 transition-colors flex items-center justify-center font-medium"
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Customer Success" 
                  className="w-full h-96 object-cover"
                />
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Join Our Community</h3>
                  <p className="text-gray-600 mb-4">
                    Get exclusive access to resources, webinars, and connect with other Luecine users.
                  </p>
                  <a 
                    href="#" 
                    className="inline-block bg-gray-100 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-200 transition-colors font-medium"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;