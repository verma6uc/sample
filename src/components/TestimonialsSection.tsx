import React from 'react';

const testimonials = [
  {
    content: "Implementing Luecine.io transformed how we handle data. The insights we've gained have directly contributed to a 30% increase in our operational efficiency.",
    author: "Sarah Johnson",
    position: "CTO, TechNova Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  },
  {
    content: "The real-time analytics from Luecine helped us identify market trends months before our competitors. It's been a game-changer for our strategy.",
    author: "David Chen",
    position: "Marketing Director, GlobalSys",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  },
  {
    content: "As a small business, we never thought we could afford such powerful analytics. Luecine's pricing model made enterprise-grade insights accessible to us.",
    author: "Michelle Rodriguez",
    position: "Founder, Artisan Collective",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-indigo-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Trusted by Innovative Teams</h2>
          <p className="text-xl text-gray-600">Hear from the businesses that have transformed their operations with Luecine</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author} 
                  className="h-12 w-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">{testimonial.author}</h4>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 max-w-5xl mx-auto bg-indigo-600 rounded-xl shadow-xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8 md:p-12 flex items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">96% of customers report significant ROI within 6 months</h3>
                <p className="text-indigo-100 mb-6">Our customer success team works with you from day one to ensure you're getting maximum value from the platform.</p>
                <a href="#" className="inline-block bg-white text-indigo-600 px-6 py-3 rounded-md font-medium hover:bg-indigo-50 transition-colors">
                  Read Success Stories
                </a>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Team success" 
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;