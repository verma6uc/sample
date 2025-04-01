
import Hero from '@/components/sections/Hero';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import CTASection from '@/components/sections/CTASection';

interface CaseStudy {
  title: string;
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
  logo?: string;
}

const CaseStudiesPage = () => {
  const caseStudies: CaseStudy[] = [
    {
      title: "37% Increase in App Conversion Rate",
      company: "StreamFlix",
      industry: "Entertainment",
      challenge: "StreamFlix struggled with high user acquisition costs and poor conversion rates from ad campaigns to subscription sign-ups. Their existing attribution system couldn't identify which channels were truly driving valuable users, leading to misallocated marketing spend.",
      solution: "Implementing AI Link Intelligence transformed their attribution model, revealing complex patterns across devices and time periods. The platform's predictive journey optimization identified critical drop-off points in the subscription flow, automatically adjusting deep link destinations based on user context and behavior patterns.",
      results: [
        "37% increase in ad-to-subscription conversion rate",
        "28% reduction in customer acquisition cost",
        "Identified a high-value user segment that was previously unrecognized",
        "Automated optimization across 12 different campaign types"
      ],
      image: "https://placehold.co/800x500/0ea5e9/FFFFFF/png?text=StreamFlix+Case+Study"
    },
    {
      title: "52% Growth in Mobile Commerce Revenue",
      company: "FashionNova",
      industry: "E-commerce",
      challenge: "FashionNova was experiencing high cart abandonment rates and difficulty attributing sales to their complex marketing mix across social, email, and influencer channels. Traditional deep links weren't effectively maintaining context when users moved between platforms.",
      solution: "AI Link Intelligence's cross-device attribution engine mapped user journeys across multiple touchpoints, while intelligent audience segmentation automatically identified behavior-based customer groups. The natural language link creation tool allowed their marketing team to rapidly deploy customized deep links for thousands of products and campaigns.",
      results: [
        "52% increase in mobile commerce revenue",
        "68% improvement in attribution accuracy",
        "Discovered that users who engaged with products in 3+ channels had 4x higher LTV",
        "Reduced campaign setup time by 75%"
      ],
      image: "https://placehold.co/800x500/0ea5e9/FFFFFF/png?text=FashionNova+Case+Study"
    },
    {
      title: "2.3x Improvement in Lead Quality",
      company: "FinanceHub",
      industry: "Financial Services",
      challenge: "FinanceHub was generating high volumes of leads through their digital campaigns, but conversion to qualified applications was low. Their traditional attribution model couldn't connect online behavior to offline conversion events, making optimization impossible.",
      solution: "AI Link Intelligence implemented probabilistic matching to connect web visits with application completion events, even when they occurred through call centers. The platform's anomaly detection identified fraudulent traffic patterns in specific channels, while predictive journey optimization dynamically routed users to the most appropriate product based on their behavior.",
      results: [
        "2.3x improvement in lead-to-application conversion",
        "Identified and eliminated $240K/month in ad spend on fraudulent traffic",
        "Created dynamic deep links that adjusted destinations based on 14 user variables",
        "Improved offline conversion tracking by 87%"
      ],
      image: "https://placehold.co/800x500/0ea5e9/FFFFFF/png?text=FinanceHub+Case+Study"
    },
  ];
  
  return (
    <>
      <Hero
        title="Customer Success Stories"
        subtitle="Real-world examples of how companies are using AI Link Intelligence to transform their growth strategies"
        primaryCta={{ text: "Talk to an Expert", to: "/contact" }}
        image="https://placehold.co/600x400/0ea5e9/FFFFFF/png?text=Success+Stories"
      />
      
      <section className="py-16 bg-white">
        <Container>
          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <div key={index} className="grid md:grid-cols-2 gap-12 items-center">
                <div className={index % 2 === 0 ? '' : 'md:order-2'}>
                  <h2 className="text-3xl font-bold mb-2">{study.title}</h2>
                  <p className="text-xl text-primary-600 mb-6">{study.company} • {study.industry}</p>
                  
                  <Card variant="bordered" className="p-6 mb-8">
                    <h3 className="text-lg font-semibold mb-2">Challenge</h3>
                    <p className="text-gray-700">{study.challenge}</p>
                  </Card>
                  
                  <Card variant="bordered" className="p-6 mb-8">
                    <h3 className="text-lg font-semibold mb-2">Solution</h3>
                    <p className="text-gray-700">{study.solution}</p>
                  </Card>
                  
                  <Card variant="bordered" className="p-6">
                    <h3 className="text-lg font-semibold mb-2">Results</h3>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
                      {study.results.map((result, i) => (
                        <li key={i}>{result}</li>
                      ))}
                    </ul>
                  </Card>
                  
                  <div className="mt-8">
                    <Button as="link" to={`/case-studies/${study.company.toLowerCase()}`} variant="primary">
                      Read Full Case Study
                    </Button>
                  </div>
                </div>
                
                <div className={index % 2 === 0 ? 'md:order-2' : ''}>
                  <img 
                    src={study.image} 
                    alt={`${study.company} Case Study`}
                    className="rounded-lg shadow-xl"
                  />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
      
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Results Across Industries</h2>
            <p className="text-xl text-gray-600 mb-12">
              AI Link Intelligence delivers measurable improvements in key metrics regardless of your industry or business model.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card variant="elevated" className="p-8 text-center">
              <div className="text-4xl text-primary-600 font-bold mb-2">43%</div>
              <h3 className="text-xl font-semibold mb-4">Average Improvement in Attribution Accuracy</h3>
              <p className="text-gray-600">Compared to traditional deep linking platforms</p>
            </Card>
            
            <Card variant="elevated" className="p-8 text-center">
              <div className="text-4xl text-primary-600 font-bold mb-2">31%</div>
              <h3 className="text-xl font-semibold mb-4">Average Increase in Conversion Rate</h3>
              <p className="text-gray-600">Through AI-powered journey optimization</p>
            </Card>
            
            <Card variant="elevated" className="p-8 text-center">
              <div className="text-4xl text-primary-600 font-bold mb-2">67%</div>
              <h3 className="text-xl font-semibold mb-4">Time Saved on Campaign Setup</h3>
              <p className="text-gray-600">Using natural language link creation</p>
            </Card>
          </div>
        </Container>
      </section>
      
      <CTASection
        title="See How AI Link Intelligence Can Transform Your Business"
        subtitle="Join these companies in revolutionizing your attribution and deep linking strategy."
        primaryCta={{ text: "Schedule a Demo", to: "/demo" }}
        secondaryCta={{ text: "View Pricing", to: "/pricing" }}
        background="gradient"
      />
    </>
  );
};

export default CaseStudiesPage;
  