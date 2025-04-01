
import { useState } from 'react';
import Hero from '@/components/sections/Hero';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { CheckIcon } from '@heroicons/react/24/solid';
import CTASection from '@/components/sections/CTASection';

const PricingPage = () => {
  const [annual, setAnnual] = useState(true);
  
  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for startups and small businesses just beginning their growth journey.',
      price: {
        monthly: 299,
        annual: 249,
      },
      features: [
        'Up to 50,000 monthly link clicks',
        'Basic AI attribution models',
        'Natural language link creation',
        'Cross-device tracking',
        'Email + chat support',
        '3 team members',
      ],
      cta: 'Start Free Trial',
      most_popular: false,
    },
    {
      name: 'Growth',
      description: 'For growing businesses ready to optimize their marketing strategy with advanced AI.',
      price: {
        monthly: 599,
        annual: 499,
      },
      features: [
        'Up to 250,000 monthly link clicks',
        'Advanced AI attribution models',
        'Predictive journey optimization',
        'Intelligent audience segmentation',
        'Anomaly detection & alerts',
        'Priority support',
        '10 team members',
        'Custom domains',
      ],
      cta: 'Start Free Trial',
      most_popular: true,
    },
    {
      name: 'Enterprise',
      description: 'Custom solutions for large organizations with complex attribution needs.',
      price: {
        monthly: null,
        annual: null,
        custom: true,
      },
      features: [
        'Unlimited monthly link clicks',
        'Custom AI model training',
        'Advanced data integration',
        'Dedicated ML engineer',
        'Service level agreement',
        'Custom feature development',
        'Unlimited team members',
        'On-premise deployment option',
      ],
      cta: 'Contact Sales',
      most_popular: false,
    },
  ];
  
  const faqs = [
    {
      question: 'How does the free trial work?',
      answer: 'Our 14-day free trial includes full access to all features in the Growth plan. No credit card is required to start, and you can cancel anytime. At the end of the trial, you can choose the plan that best fits your needs or continue with the free version which includes limited functionality.',
    },
    {
      question: 'What happens if I exceed my monthly click limit?',
      answer: 'If you exceed your monthly click limit, we don\'t cut off your service. Additional clicks are billed at a per-click rate that decreases with volume. You\'ll receive notifications as you approach your limit, and we\'re happy to work with you on upgrading to a higher tier if you consistently exceed your limit.',
    },
    {
      question: 'How does AI Link Intelligence compare to traditional attribution platforms like Branch.io?',
      answer: 'While traditional platforms focus on basic link routing and last-click attribution, AI Link Intelligence uses machine learning to provide probabilistic multi-touch attribution, predictive journey optimization, and automated audience discovery. Our AI capabilities typically improve attribution accuracy by 30-50% and conversion rates by 15-25% compared to traditional solutions.',
    },
    {
      question: 'Can I use my existing attribution data with AI Link Intelligence?',
      answer: 'Yes! We offer a seamless migration path from most attribution platforms. Our system can import historical data to train the AI models, ensuring you maintain continuity in reporting while gaining the advanced capabilities of our platform. Our customer success team provides dedicated support during the migration process.',
    },
    {
      question: 'How does the platform handle privacy regulations like GDPR and CCPA?',
      answer: 'Our platform is designed with privacy-first principles. We use probabilistic matching and differential privacy techniques that minimize the need for personal data while maintaining attribution accuracy. The platform includes built-in compliance tools for managing consent, data deletion requests, and privacy preferences across different jurisdictions.',
    },
    {
      question: 'What kind of support is included?',
      answer: 'All plans include email support with guaranteed response times. Growth plans and above include priority support with faster response times and access to our technical support team via chat. Enterprise plans include a dedicated customer success manager and technical account manager, along with custom training and implementation support.',
    },
  ];
  
  return (
    <>
      <Hero
        title="Simple, Value-Based Pricing"
        subtitle="Choose a plan that aligns with your business goals and scales with your growth."
        primaryCta={{ text: "Get Started", to: "/signup" }}
        secondaryCta={{ text: "Contact Sales", to: "/contact" }}
      />
      
      <section className="py-16 bg-white">
        <Container>
          <div className="text-center mb-8">
            <div className="inline-flex items-center p-1 rounded-full border border-gray-300 bg-white">
              <button
                className={`px-8 py-2 rounded-full text-sm font-medium ${
                  annual ? 'bg-primary-600 text-white' : 'text-gray-700'
                }`}
                onClick={() => setAnnual(true)}
              >
                Annual Billing
                {annual && <span className="ml-2 text-primary-200">Save 20%</span>}
              </button>
              <button
                className={`px-8 py-2 rounded-full text-sm font-medium ${
                  !annual ? 'bg-primary-600 text-white' : 'text-gray-700'
                }`}
                onClick={() => setAnnual(false)}
              >
                Monthly Billing
              </button>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <Card 
                key={plan.name} 
                variant={plan.most_popular ? 'elevated' : 'bordered'}
                className={`p-6 relative ${plan.most_popular ? 'border-2 border-primary-500' : ''}`}
              >
                {plan.most_popular && (
                  <div className="absolute top-0 inset-x-0 transform -translate-y-1/2">
                    <div className="inline-block bg-primary-600 text-white text-sm font-semibold px-4 py-1 rounded-full">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  {plan.price.custom ? (
                    <div className="text-3xl font-bold">Custom Pricing</div>
                  ) : (
                    <>
                      <div className="text-4xl font-bold">
                        ${annual ? plan.price.annual : plan.price.monthly}
                      </div>
                      <div className="text-gray-500">per month</div>
                    </>
                  )}
                </div>
                
                <div className="mb-8">
                  <Button 
                    as="link" 
                    to={plan.name === 'Enterprise' ? '/contact' : '/signup'} 
                    variant="primary" 
                    fullWidth
                    className={plan.most_popular ? 'bg-primary-600' : ''}
                  >
                    {plan.cta}
                  </Button>
                </div>
                
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Container>
      </section>
      
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Compare All Features</h2>
              <p className="text-xl text-gray-600">
                A detailed breakdown of what's included in each plan.
              </p>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-4 text-sm font-medium text-gray-500 uppercase tracking-wider">Feature</th>
                    <th className="px-6 py-4 text-sm font-medium text-gray-500 uppercase tracking-wider">Starter</th>
                    <th className="px-6 py-4 text-sm font-medium text-gray-500 uppercase tracking-wider">Growth</th>
                    <th className="px-6 py-4 text-sm font-medium text-gray-500 uppercase tracking-wider">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-medium">Monthly link clicks</td>
                    <td className="px-6 py-4">50,000</td>
                    <td className="px-6 py-4">250,000</td>
                    <td className="px-6 py-4">Unlimited</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">AI attribution models</td>
                    <td className="px-6 py-4">Basic</td>
                    <td className="px-6 py-4">Advanced</td>
                    <td className="px-6 py-4">Custom</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Predictive journey optimization</td>
                    <td className="px-6 py-4">—</td>
                    <td className="px-6 py-4">
                      <CheckIcon className="h-5 w-5 text-green-500" />
                    </td>
                    <td className="px-6 py-4">
                      <CheckIcon className="h-5 w-5 text-green-500" />
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Intelligent audience segmentation</td>
                    <td className="px-6 py-4">—</td>
                    <td className="px-6 py-4">
                      <CheckIcon className="h-5 w-5 text-green-500" />
                    </td>
                    <td className="px-6 py-4">
                      <CheckIcon className="h-5 w-5 text-green-500" />
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Anomaly detection & alerts</td>
                    <td className="px-6 py-4">—</td>
                    <td className="px-6 py-4">
                      <CheckIcon className="h-5 w-5 text-green-500" />
                    </td>
                    <td className="px-6 py-4">
                      <CheckIcon className="h-5 w-5 text-green-500" />
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Natural language link creation</td>
                    <td className="px-6 py-4">Basic</td>
                    <td className="px-6 py-4">Advanced</td>
                    <td className="px-6 py-4">Custom</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Team members</td>
                    <td className="px-6 py-4">3</td>
                    <td className="px-6 py-4">10</td>
                    <td className="px-6 py-4">Unlimited</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Data retention</td>
                    <td className="px-6 py-4">12 months</td>
                    <td className="px-6 py-4">24 months</td>
                    <td className="px-6 py-4">Custom</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">API access</td>
                    <td className="px-6 py-4">Limited</td>
                    <td className="px-6 py-4">Full</td>
                    <td className="px-6 py-4">Custom</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Support</td>
                    <td className="px-6 py-4">Email & chat</td>
                    <td className="px-6 py-4">Priority</td>
                    <td className="px-6 py-4">Dedicated</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </section>
      
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600">
                Have other questions? <a href="/contact" className="text-primary-600 hover:text-primary-800">Contact our sales team</a>
              </p>
            </div>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
      
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="bg-white rounded-xl overflow-hidden shadow-xl">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-4">Need a custom solution?</h2>
                <p className="text-gray-600 mb-6">
                  Our enterprise plan is tailored to your specific business needs. Get in touch with our sales team to discuss custom pricing, dedicated support, and advanced features.
                </p>
                <Button as="link" to="/contact" variant="primary" size="lg">
                  Contact Sales
                </Button>
              </div>
              <div className="bg-primary-600 p-8 md:p-12 text-white">
                <h3 className="text-2xl font-bold mb-4">Enterprise Features</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-primary-200 mt-0.5 mr-3 flex-shrink-0" />
                    <span>Custom AI model training on your specific user journeys</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-primary-200 mt-0.5 mr-3 flex-shrink-0" />
                    <span>Dedicated ML engineer to optimize your attribution models</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-primary-200 mt-0.5 mr-3 flex-shrink-0" />
                    <span>Advanced data integration with your existing systems</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-primary-200 mt-0.5 mr-3 flex-shrink-0" />
                    <span>On-premise deployment options for sensitive industries</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-primary-200 mt-0.5 mr-3 flex-shrink-0" />
                    <span>Custom feature development for unique requirements</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>
      
      <CTASection
        title="Ready to transform your attribution strategy?"
        subtitle="Join the companies leveraging AI to optimize their marketing performance."
        primaryCta={{ text: "Start Free Trial", to: "/signup" }}
        secondaryCta={{ text: "Schedule Demo", to: "/demo" }}
        background="gradient"
      />
    </>
  );
};

export default PricingPage;
  