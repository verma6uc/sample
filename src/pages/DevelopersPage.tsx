
import Hero from '@/components/sections/Hero';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import CTASection from '@/components/sections/CTASection';

const DevelopersPage = () => {
  const platforms = [
    {
      name: "iOS",
      icon: "🍎",
      language: "Swift",
      description: "Native SDK for iOS applications with Swift and Objective-C support.",
      links: {
        docs: "/docs/ios",
        github: "https://github.com/ai-link/ios-sdk",
        sample: "/samples/ios"
      }
    },
    {
      name: "Android",
      icon: "🤖",
      language: "Kotlin/Java",
      description: "Native SDK for Android applications with Kotlin and Java support.",
      links: {
        docs: "/docs/android",
        github: "https://github.com/ai-link/android-sdk",
        sample: "/samples/android"
      }
    },
    {
      name: "Web",
      icon: "🌐",
      language: "JavaScript",
      description: "Lightweight JavaScript SDK for websites and web applications.",
      links: {
        docs: "/docs/web",
        github: "https://github.com/ai-link/web-sdk",
        sample: "/samples/web"
      }
    },
    {
      name: "React Native",
      icon: "⚛️",
      language: "JavaScript/TypeScript",
      description: "SDK for React Native applications with TypeScript support.",
      links: {
        docs: "/docs/react-native",
        github: "https://github.com/ai-link/react-native-sdk",
        sample: "/samples/react-native"
      }
    },
    {
      name: "Flutter",
      icon: "📱",
      language: "Dart",
      description: "SDK for Flutter applications with comprehensive platform channel support.",
      links: {
        docs: "/docs/flutter",
        github: "https://github.com/ai-link/flutter-sdk",
        sample: "/samples/flutter"
      }
    },
    {
      name: "Unity",
      icon: "🎮",
      language: "C#",
      description: "SDK for Unity game development with cross-platform support.",
      links: {
        docs: "/docs/unity",
        github: "https://github.com/ai-link/unity-sdk",
        sample: "/samples/unity"
      }
    },
  ];
  
  const apiEndpoints = [
    {
      name: "Link Creation API",
      description: "RESTful API for programmatically creating and managing deep links with full customization options.",
      path: "/api/v1/links",
      method: "POST"
    },
    {
      name: "Attribution Data API",
      description: "Access attribution data and insights programmatically for integration with your analytics systems.",
      path: "/api/v1/attribution",
      method: "GET"
    },
    {
      name: "Audience API",
      description: "Retrieve AI-generated audience segments and user insights for targeting and personalization.",
      path: "/api/v1/audiences",
      method: "GET"
    },
    {
      name: "Webhook API",
      description: "Configure webhooks to receive real-time events for conversions, link clicks, and system alerts.",
      path: "/api/v1/webhooks",
      method: "POST"
    },
    {
      name: "Natural Language Link API",
      description: "Create deep links using natural language descriptions through our AI processing endpoint.",
      path: "/api/v1/links/natural",
      method: "POST"
    },
  ];
  
  const codeExamples = {
    swift: `// Initialize the SDK
AiLink.configure(withApiKey: "YOUR_API_KEY")

// Create a deep link
let link = AiLink.createLink(
  destination: "https://yourapp.com/product/12345",
  analytics: [
    "campaign": "summer_sale",
    "medium": "email"
  ]
)

// Handle incoming deep link
AiLink.handleIncomingLink { link, error in
  if let link = link {
    // Navigate to the appropriate screen
    navigationController.navigate(to: link.destination)
    
    // Track conversion event
    AiLink.trackEvent(
      name: "purchase",
      value: 99.99,
      currency: "USD"
    )
  }
}`,
    
    kotlin: `// Initialize the SDK
AiLink.configure(context, "YOUR_API_KEY")

// Create a deep link
val link = AiLink.createLink(
  destination = "https://yourapp.com/product/12345",
  analytics = mapOf(
    "campaign" to "summer_sale",
    "medium" to "email"
  )
)

// Handle incoming deep link
AiLink.handleIncomingLink { link, error ->
  link?.let {
    // Navigate to the appropriate screen
    navController.navigate(link.destination)
    
    // Track conversion event
    AiLink.trackEvent(
      name = "purchase",
      value = 99.99,
      currency = "USD"
    )
  }
}`,
    
    javascript: `// Initialize the SDK
AiLink.configure({
  apiKey: 'YOUR_API_KEY',
  domain: 'link.yourdomain.com'
});

// Create a deep link
const link = await AiLink.createLink({
  destination: 'https://yourapp.com/product/12345',
  analytics: {
    campaign: 'summer_sale',
    medium: 'email'
  }
});

// Handle incoming deep link
AiLink.handleIncomingLink((link, error) => {
  if (link) {
    // Navigate to the appropriate page
    router.push(link.destination);
    
    // Track conversion event
    AiLink.trackEvent({
      name: 'purchase',
      value: 99.99,
      currency: 'USD'
    });
  }
});`
  };
  
  return (
    <>
      <Hero
        title="Developer Resources"
        subtitle="Comprehensive technical resources for implementing AI Link Intelligence in your applications"
        primaryCta={{ text: "View Documentation", to: "/docs" }}
        secondaryCta={{ text: "Get API Keys", to: "/signup" }}
        image="https://placehold.co/600x400/0ea5e9/FFFFFF/png?text=Developer+Resources"
      />
      
      <section className="py-16 bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Platform SDKs</h2>
            <p className="text-xl text-gray-600">
              Integrate AI Link Intelligence into any platform with our comprehensive SDK libraries.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platforms.map((platform) => (
              <Card key={platform.name} variant="bordered" className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{platform.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold">{platform.name}</h3>
                    <p className="text-sm text-gray-500">{platform.language}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-6">{platform.description}</p>
                <div className="flex flex-wrap gap-2">
                  <Button as="link" to={platform.links.docs} variant="primary" size="sm">
                    Documentation
                  </Button>
                  <Button as="link" to={platform.links.github} variant="outline" size="sm">
                    GitHub
                  </Button>
                  <Button as="link" to={platform.links.sample} variant="text" size="sm">
                    Sample App
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>
      
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">API Reference</h2>
            <p className="text-xl text-gray-600">
              Our RESTful APIs provide programmatic access to all platform capabilities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {apiEndpoints.map((endpoint) => (
              <Card key={endpoint.name} variant="elevated" className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold">{endpoint.name}</h3>
                  <span className="px-2 py-1 bg-primary-100 text-primary-800 rounded text-sm font-mono">
                    {endpoint.method}
                  </span>
                </div>
                <p className="text-gray-700 mb-4">{endpoint.description}</p>
                <div className="bg-gray-100 p-3 rounded font-mono text-sm text-gray-800">
                  {endpoint.path}
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button as="link" to="/docs/api" variant="primary">
              View Complete API Documentation
            </Button>
          </div>
        </Container>
      </section>
      
      <section className="py-16 bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Integration Examples</h2>
            <p className="text-xl text-gray-600">
              Get started quickly with example code for common implementation scenarios.
            </p>
          </div>
          
          <div className="mb-8">
            <div className="bg-gray-900 rounded-t-lg px-4 py-2 flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-500"></span>
              <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
              <span className="h-3 w-3 rounded-full bg-green-500"></span>
              <span className="text-gray-400 text-sm ml-2">Basic Integration Example</span>
            </div>
            
            <div className="bg-gray-800 rounded-b-lg overflow-hidden">
              <div className="flex border-b border-gray-700">
                <button className="px-4 py-2 text-white bg-gray-700">Swift</button>
                <button className="px-4 py-2 text-gray-400 hover:text-white">Kotlin</button>
                <button className="px-4 py-2 text-gray-400 hover:text-white">JavaScript</button>
              </div>
              <pre className="p-4 text-gray-100 overflow-x-auto">
                <code>{codeExamples.swift}</code>
              </pre>
            </div>
          </div>
          
          <div className="text-center">
            <Button as="link" to="/docs/examples" variant="primary">
              View More Examples
            </Button>
          </div>
        </Container>
      </section>
      
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">AI-Powered Endpoints</h2>
              <p className="text-gray-700 mb-4">
                Unlike traditional SDKs that offer basic link creation and tracking, our platform provides advanced AI capabilities through specialized endpoints.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">Natural Language Link Creation</h3>
                  <p className="text-gray-600">Create sophisticated deep links by describing what you want in plain English. Our AI handles the technical configuration.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-2">Audience Insights API</h3>
                  <p className="text-gray-600">Access AI-generated audience segments based on behavioral patterns for targeted campaigns and personalization.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-2">Journey Prediction</h3>
                  <p className="text-gray-600">API endpoints for predicting user journey outcomes and optimizing touchpoints in real-time.</p>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://placehold.co/600x400/0ea5e9/FFFFFF/png?text=AI+API+Endpoints"
                alt="AI API Endpoints"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </Container>
      </section>
      
      <CTASection
        title="Ready to start building?"
        subtitle="Get access to our SDKs, APIs, and developer support resources."
        primaryCta={{ text: "Create Developer Account", to: "/signup" }}
        secondaryCta={{ text: "Contact Developer Support", to: "/contact" }}
        background="gradient"
      />
    </>
  );
};

export default DevelopersPage;
  