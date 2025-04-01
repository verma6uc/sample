
import Hero from '@/components/sections/Hero';
import FeatureSection from '@/components/sections/FeatureSection';
import TestimonialSection from '@/components/sections/TestimonialSection';
import CTASection from '@/components/sections/CTASection';

// Placeholder image URLs - replace with actual images
const heroImage = 'https://placehold.co/600x400/0ea5e9/FFFFFF/png?text=AI+Link+Intelligence';
const featureImages = {
  attribution: 'https://placehold.co/400/0ea5e9/FFFFFF/png?text=AI+Attribution',
  journey: 'https://placehold.co/400/0ea5e9/FFFFFF/png?text=Journey+Optimization',
  segmentation: 'https://placehold.co/400/0ea5e9/FFFFFF/png?text=Audience+Segmentation',
  creation: 'https://placehold.co/400/0ea5e9/FFFFFF/png?text=Link+Creation',
  anomaly: 'https://placehold.co/400/0ea5e9/FFFFFF/png?text=Anomaly+Detection',
};

const HomePage = () => {
  // Core features for the grid layout
  const coreFeatures = [
    {
      title: 'AI-Powered Attribution',
      description: 'Machine learning models that continuously improve attribution accuracy by identifying complex conversion patterns across devices, channels, and time periods.',
      image: featureImages.attribution,
    },
    {
      title: 'Predictive Journey Optimization',
      description: 'Automated identification of likely drop-off points in user journeys with dynamic link behavior modification to improve conversion rates in real-time.',
      image: featureImages.journey,
    },
    {
      title: 'Intelligent Audience Segmentation',
      description: 'Automatic discovery of high-value user segments based on behavioral patterns, allowing for precision targeting without manual analysis.',
      image: featureImages.segmentation,
    },
    {
      title: 'Natural Language Link Creation',
      description: 'Simplified deep link generation through conversational AI interface, allowing marketers to describe desired outcomes rather than configuring technical parameters.',
      image: featureImages.creation,
    },
    {
      title: 'Anomaly Detection & Alerts',
      description: 'Proactive identification of campaign performance shifts, tracking inconsistencies, or integration issues before they impact business metrics.',
      image: featureImages.anomaly,
    },
  ];
  
  // For alternating layout with more detailed features
  const detailedFeatures = [
    {
      title: 'Unlock the Full Potential of Your Marketing Data',
      description: 'Our AI-powered platform analyzes complex user journeys across channels and devices to reveal hidden patterns and optimize attribution models in real-time, giving you accurate insights into what truly drives conversions.',
      image: 'https://placehold.co/800x600/0ea5e9/FFFFFF/png?text=Marketing+Data+Insights',
    },
    {
      title: 'Predict and Optimize User Journeys',
      description: 'Stop guessing where users drop off. Our predictive analytics identifies potential conversion obstacles before they impact your metrics and automatically adapts link behavior to guide users toward conversion, increasing ROI without manual intervention.',
      image: 'https://placehold.co/800x600/0ea5e9/FFFFFF/png?text=Predictive+Analytics',
    },
    {
      title: 'Simplify Deep Linking with Conversational AI',
      description: 'Forget complex technical parameters. Our natural language interface lets you create sophisticated deep links by simply describing your desired outcome. The AI handles all the technical complexity while you focus on strategy.',
      image: 'https://placehold.co/800x600/0ea5e9/FFFFFF/png?text=Conversational+AI',
    },
  ];
  
  // Testimonials
  const testimonials = [
    {
      quote: "We increased our conversion rate by 37% within the first month of implementing AI Link Intelligence. The predictive optimization alone transformed our user acquisition strategy.",
      author: {
        name: "Sarah Johnson",
        title: "VP of Marketing",
        company: "TechCorp",
      }
    },
    {
      quote: "The natural language link creation feature saves our team hours every week. We're creating sophisticated deep links in seconds that used to take us half an hour to configure.",
      author: {
        name: "Mike Chen",
        title: "Growth Lead",
        company: "Streamly",
      }
    },
    {
      quote: "The AI-powered attribution gave us visibility into conversion patterns we never knew existed. We completely redesigned our funnel based on these insights and saw immediate results.",
      author: {
        name: "Alex Rivera",
        title: "CMO",
        company: "FinanceApp",
      }
    },
  ];
  
  return (
    <>
      <Hero
        title="The Next Evolution in Deep Linking & Attribution"
        subtitle="Transform link management from a technical utility into a strategic growth engine with AI-powered intelligence."
        primaryCta={{ text: "Get Started", to: "/demo" }}
        secondaryCta={{ text: "See How It Works", to: "/how-it-works" }}
        image={heroImage}
      />
      
      <FeatureSection
        title="Core Platform Capabilities"
        subtitle="Leverage the power of AI to optimize every aspect of your deep linking strategy"
        features={coreFeatures}
        columns={3}
      />
      
      <FeatureSection
        title="Revolutionary Attribution Intelligence"
        subtitle="See how our AI fundamentally transforms what's possible with deep linking"
        features={detailedFeatures}
        layout="alternating"
      />
      
      <TestimonialSection
        title="Trusted by Forward-Thinking Teams"
        subtitle="Hear from the marketers and developers who've transformed their growth strategy"
        testimonials={testimonials}
        background="light"
      />
      
      <CTASection
        title="Ready to Transform Your Growth Strategy?"
        subtitle="Join the companies leveraging AI to optimize their deep linking and attribution."
        primaryCta={{ text: "Start Free Trial", to: "/trial" }}
        secondaryCta={{ text: "Talk to an Expert", to: "/contact" }}
        background="gradient"
      />
    </>
  );
};

export default HomePage;
  