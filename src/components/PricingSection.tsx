import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '$49',
    period: 'per month',
    description: 'Perfect for small businesses just getting started with data analytics.',
    features: [
      'Up to 10,000 data points',
      '3 custom dashboards',
      'Basic analytics features',
      '5 user accounts',
      'Email support',
    ],
    cta: 'Start Free Trial',
    highlighted: false,
  },
  {
    name: 'Professional',
    price: '$99',
    period: 'per month',
    description: 'Ideal for growing businesses with more advanced analytics needs.',
    features: [
      'Up to 100,000 data points',
      'Unlimited dashboards',
      'Advanced analytics & predictions',
      '10 user accounts',
      'Priority email & chat support',
      'API access',
    ],
    cta: 'Start Free Trial',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'tailored solution',
    description: 'For organizations with complex needs and large-scale data operations.',
    features: [
      'Unlimited data points',
      'Unlimited dashboards',
      'AI-powered recommendations',
      'Unlimited user accounts',
      '24/7 dedicated support',
      'Advanced security features',
      'Custom integrations',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600">Choose the plan that's right for your business</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`rounded-xl p-8 ${
                plan.highlighted 
                  ? 'bg-gradient-to-b from-green-500 to-green-600 shadow-xl transform scale-105 -mt-4 mb-4' 
                  : 'bg-white border border-gray-200'
              }`}
            >
              <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                {plan.name}
              </h3>
              <div className="flex items-baseline mb-6">
                <span className={`text-4xl font-bold ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                  {plan.price}
                </span>
                <span className={`ml-2 ${plan.highlighted ? 'text-green-100' : 'text-gray-600'}`}>
                  {plan.period}
                </span>
              </div>
              <p className={`mb-6 ${plan.highlighted ? 'text-green-100' : 'text-gray-600'}`}>
                {plan.description}
              </p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className={`h-5 w-5 mr-2 flex-shrink-0 ${
                      plan.highlighted ? 'text-green-100' : 'text-green-600'
                    }`} />
                    <span className={plan.highlighted ? 'text-white' : 'text-gray-700'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <a 
                href="#" 
                className={`block text-center py-3 px-4 rounded-md font-medium ${
                  plan.highlighted 
                    ? 'bg-white text-green-600 hover:bg-green-50' 
                    : 'bg-green-600 text-white hover:bg-green-700'
                } transition-colors`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <p className="text-gray-600 mb-4">All plans include a 14-day free trial. No credit card required.</p>
          <p className="text-gray-600">
            Need something different? <a href="#contact" className="text-green-600 font-medium">Contact us</a> for a custom solution.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;