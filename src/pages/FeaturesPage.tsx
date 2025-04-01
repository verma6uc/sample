
import Hero from '@/components/sections/Hero';
import FeatureSection from '@/components/sections/FeatureSection';
import CTASection from '@/components/sections/CTASection';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';

const FeaturesPage = () => {
  // Features with detailed descriptions
  const attributionFeatures = [
    {
      title: 'Cross-Device Tracking',
      description: 'Our AI models accurately connect user journeys across multiple devices, even without traditional identifiers. By analyzing behavioral patterns, we establish probabilistic matches that outperform deterministic methods alone.',
    },
    {
      title: 'Multi-Touch Attribution',
      description: 'Move beyond last-click attribution with sophisticated models that analyze the true impact of each touchpoint in the conversion path. Our AI continuously refines these models based on your specific audience behavior.',
    },
    {
      title: 'Offline Conversion Mapping',
      description: 'Bridge the gap between online activity and offline conversions with AI that identifies correlations between digital engagement patterns and in-store or call center conversions.',
    },
  ];
  
  const optimizationFeatures = [
    {
      title: 'Drop-off Prediction',
      description: 'The platform analyzes user behavior in real-time to identify when someone is likely to abandon their journey, triggering interventions before the drop-off occurs.',
    },
    {
      title: 'Dynamic Destination Routing',
      description: 'Links automatically adjust their destination based on user context, previous behavior, and predicted intent - ensuring users always land on the most relevant page for conversion.',
    },
    {
      title: 'Conversion Path Analysis',
      description: 'AI continuously analyzes successful conversion paths to identify common patterns and friction points, providing actionable insights for optimization.',
    },
  ];
  
  const segmentationFeatures = [
    {
      title: 'Behavior-Based Clustering',
      description: 'Our AI automatically identifies distinct user segments based on behavioral patterns, revealing high-value groups you might never discover through traditional segmentation.',
    },
    {
      title: 'Predictive LTV Modeling',
      description: 'Go beyond immediate conversion value by predicting the lifetime value of different user segments, allowing you to optimize acquisition for long-term revenue.',
    },
    {
      title: 'Dynamic Segment Adaption',
      description: 'Unlike static segments, our AI continuously refines segment definitions as user behavior evolves, ensuring your targeting stays relevant.',
    },
  ];
  
  const creationFeatures = [
    {
      title: 'Conversational Link Builder',
      description: 'Simply describe what you want the link to do in natural language, and our AI will configure all technical parameters and routing logic automatically.',
    },
    {
      title: 'Contextual Parameter Generation',
      description: 'The AI automatically suggests and includes the optimal tracking parameters based on your campaign goals, target audience, and historical performance.',
    },
    {
      title: 'Bulk Link Generation',
      description: 'Generate thousands of customized deep links for different products, campaigns or segments in seconds with intelligent templates.',
    },
  ];
  
  const anomalyFeatures = [
    {
      title: 'Real-Time Performance Monitoring',
      description: 'Our AI constantly analyzes link performance metrics to detect unusual patterns that might indicate problems or opportunities requiring attention.',
    },
    {
      title: 'Fraud Detection',
      description: 'Identify suspicious traffic patterns, unusual attribution claims, or potential click fraud with sophisticated anomaly detection algorithms.',
    },
    {
      title: 'Proactive Alerts',
      description: 'Receive intelligent notifications about significant changes in campaign performance before they impact your business metrics.',
    },
  ];
  
  return (
    <>
      <Hero
        title="AI-Powered Features"
        subtitle="In-depth exploration of our platform capabilities that transform link management and attribution"
        primaryCta={{ text: "Start Free Trial", to: "/trial" }}
        image="https://placehold.co/600x400/0ea5e9/FFFFFF/png?text=Platform+Features"
      />
      
      <section className="py-16 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">AI-Powered Attribution</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Machine learning models that continuously improve attribution accuracy by identifying complex conversion patterns.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <img 
                src="https://placehold.co/600x400/0ea5e9/FFFFFF/png?text=AI+Attribution"
                alt="AI Attribution"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <p className="text-gray-700 mb-6">
                Traditional attribution relies on simplistic models and direct identifiers that struggle with modern privacy restrictions and complex user journeys. Our AI-powered approach transforms this by analyzing behavioral patterns, cross-device signals, and time-based correlations to build a comprehensive understanding of the true conversion path.
              </p>
              <p className="text-gray-700">
                Unlike static attribution models, our system continuously learns from your specific data, improving accuracy over time while adapting to changing user behaviors and market conditions. This enables marketing teams to make decisions based on genuine insights rather than oversimplified heuristics.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {attributionFeatures.map((feature, index) => (
              <Card key={index} variant="bordered" className="p-6">
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>
      
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Predictive Journey Optimization</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Automated identification of likely drop-off points with dynamic link behavior modification.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div className="order-1 md:order-2">
              <img 
                src="https://placehold.co/600x400/0ea5e9/FFFFFF/png?text=Journey+Optimization"
                alt="Journey Optimization"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="order-2 md:order-1">
              <p className="text-gray-700 mb-6">
                Most deep links simply direct users to a predetermined destination, regardless of context or intent. Our AI fundamentally reimagines this static approach by making links intelligent and adaptive.
              </p>
              <p className="text-gray-700">
                By analyzing thousands of successful conversion journeys, our system identifies the critical factors that influence success at each stage. This enables links to dynamically adjust their behavior based on real-time signals and predicted user intent, dramatically improving conversion rates.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {optimizationFeatures.map((feature, index) => (
              <Card key={index} variant="bordered" className="p-6">
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>
      
      <FeatureSection
        title="Intelligent Audience Segmentation"
        subtitle="Automatic discovery of high-value user segments based on behavioral patterns"
        features={segmentationFeatures}
        columns={3}
      />
      
      <FeatureSection
        title="Natural Language Link Creation"
        subtitle="Simplified deep link generation through conversational AI interface"
        features={creationFeatures}
        columns={3}
        layout="grid"
      />
      
      <FeatureSection
        title="Anomaly Detection & Alerts"
        subtitle="Proactive identification of campaign performance shifts and tracking inconsistencies"
        features={anomalyFeatures}
        columns={3}
        layout="grid"
      />
      
      <CTASection
        title="Ready to experience AI-powered linking?"
        subtitle="Join the companies transforming their growth strategy with intelligent attribution."
        primaryCta={{ text: "Get Started", to: "/demo" }}
        secondaryCta={{ text: "Talk to an Expert", to: "/contact" }}
        background="gradient"
      />
    </>
  );
};

export default FeaturesPage;
  