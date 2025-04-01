
import Hero from '@/components/sections/Hero';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import CTASection from '@/components/sections/CTASection';

const HowItWorksPage = () => {
  const aiModels = [
    {
      title: "Behavioral Pattern Recognition",
      description: "Our deep learning models identify unique user interaction patterns across sessions and devices, creating probabilistic identifiers that persist even without traditional tracking mechanisms.",
      technical: "Utilizes multi-headed attention mechanisms similar to transformers, processing sequential user interactions while maintaining contextual understanding across time periods."
    },
    {
      title: "Conversion Path Analysis",
      description: "Machine learning algorithms analyze thousands of successful conversion paths to identify common patterns and critical touchpoints that influence purchase decisions.",
      technical: "Combines gradient-boosted decision trees with LSTM neural networks to identify both immediate and long-term factors in the conversion funnel."
    },
    {
      title: "Predictive Intent Modeling",
      description: "Real-time prediction of user intent and likely next actions based on their current behavior, historical patterns, and similar user cohorts.",
      technical: "Ensemble model combining collaborative filtering techniques with contextual bandits for real-time decision optimization."
    },
    {
      title: "Natural Language Understanding",
      description: "Processes marketer requests in plain English, extracting campaign goals and user targeting parameters to automatically configure technical link settings.",
      technical: "Fine-tuned large language model with domain-specific training on marketing terminology and deep linking configuration patterns."
    },
  ];
  
  const architectureComponents = [
    {
      title: "Data Collection Layer",
      description: "Lightweight, privacy-compliant SDK that captures relevant interaction signals without compromising user experience or requiring excessive permissions.",
    },
    {
      title: "Identity Resolution Engine",
      description: "Advanced probabilistic matching system that connects user interactions across sessions, devices, and channels without relying on persistent identifiers.",
    },
    {
      title: "Real-Time Processing Pipeline",
      description: "Stream processing architecture that analyzes events as they occur, enabling immediate optimization decisions and adaptive link behavior.",
    },
    {
      title: "Model Training Infrastructure",
      description: "Continuous learning system that constantly improves prediction accuracy based on new data, automatically adapting to changing user behaviors.",
    },
    {
      title: "Decision Engine",
      description: "Real-time system that determines optimal link behavior based on user context, predicted intent, and campaign goals.",
    },
    {
      title: "Analytics & Visualization",
      description: "Interactive dashboards that transform complex attribution data into actionable insights with drill-down capabilities.",
    },
  ];
  
  return (
    <>
      <Hero
        title="How AI Link Intelligence Works"
        subtitle="A technical deep dive into the AI technology powering our platform"
        image="https://placehold.co/600x400/0ea5e9/FFFFFF/png?text=Technology+Overview"
      />
      
      <section className="py-16 bg-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Beyond Traditional Attribution</h2>
              <p className="text-gray-700 mb-4">
                Traditional deep linking and attribution rely on deterministic matching using device IDs, cookies, and direct click tracking. While effective in controlled environments, this approach fails in the face of cross-device journeys, privacy restrictions, and complex user paths.
              </p>
              <p className="text-gray-700 mb-4">
                AI Link Intelligence fundamentally reimagines this approach by using machine learning to identify patterns that persist across devices and time periods, even without traditional identifiers. This probabilistic approach, combined with deterministic signals when available, creates a comprehensive understanding of the user journey.
              </p>
              <p className="text-gray-700">
                The result is attribution that doesn't just record the last click, but understands the true impact of each touchpoint while respecting user privacy and adapting to a changing regulatory landscape.
              </p>
            </div>
            <div>
              <img 
                src="https://placehold.co/600x400/0ea5e9/FFFFFF/png?text=Attribution+Comparison"
                alt="Traditional vs AI Attribution"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Core AI Technologies</h2>
            <p className="text-xl text-gray-600">
              Our platform combines multiple specialized AI models to solve different aspects of the attribution challenge.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {aiModels.map((model, index) => (
              <Card key={index} variant="bordered" className="p-6">
                <h3 className="text-xl font-bold mb-2">{model.title}</h3>
                <p className="text-gray-700 mb-4">{model.description}</p>
                <div className="bg-gray-50 p-4 rounded-md">
                  <h4 className="font-medium text-sm text-gray-500 mb-1">Technical Implementation</h4>
                  <p className="text-gray-800">{model.technical}</p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>
      
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Technical Architecture</h2>
            <p className="text-xl text-gray-600">
              Our platform is built on a modern, scalable architecture designed for real-time processing and continuous learning.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {architectureComponents.map((component, index) => (
              <Card key={index} variant="elevated" className="p-6 h-full">
                <h3 className="text-lg font-bold mb-2">{component.title}</h3>
                <p className="text-gray-700">{component.description}</p>
              </Card>
            ))}
          </div>
          
          <div className="mt-16">
            <img 
              src="https://placehold.co/1200x600/0ea5e9/FFFFFF/png?text=System+Architecture"
              alt="System Architecture Diagram"
              className="rounded-lg shadow-lg mx-auto"
            />
          </div>
        </Container>
      </section>
      
      <section className="py-16 bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Privacy-First Approach</h2>
            <p className="text-xl text-gray-600">
              Our technology is designed from the ground up to deliver powerful attribution in a privacy-conscious world.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://placehold.co/600x400/0ea5e9/FFFFFF/png?text=Privacy+Architecture"
                alt="Privacy-First Architecture"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Beyond Cookie Dependence</h3>
              <p className="text-gray-700 mb-4">
                While most attribution systems crumble in the face of cookie restrictions and tracking prevention, our AI models are designed to function effectively even without traditional tracking mechanisms. By focusing on patterns rather than persistent identifiers, we maintain accuracy while respecting user privacy.
              </p>
              
              <h3 className="text-2xl font-bold mb-4 mt-8">On-Device Processing</h3>
              <p className="text-gray-700 mb-4">
                Where possible, our SDK performs pattern recognition directly on the device, sending only aggregated or anonymized data to our servers. This edge computing approach minimizes personal data transmission while maintaining attribution accuracy.
              </p>
              
              <h3 className="text-2xl font-bold mb-4 mt-8">Differential Privacy</h3>
              <p className="text-gray-700">
                Our machine learning training processes incorporate differential privacy techniques, ensuring that no individual user's data has a significant impact on the models while still enabling powerful pattern recognition across large datasets.
              </p>
            </div>
          </div>
        </Container>
      </section>
      
      <CTASection
        title="Ready to Experience AI-Powered Attribution?"
        subtitle="Join the companies transforming their growth strategy with intelligent deep linking."
        primaryCta={{ text: "Get Started", to: "/demo" }}
        secondaryCta={{ text: "Talk to an Expert", to: "/contact" }}
        background="gradient"
      />
    </>
  );
};

export default HowItWorksPage;
  