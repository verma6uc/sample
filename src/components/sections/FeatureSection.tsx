
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';

interface Feature {
  title: string;
  description: string;
  icon?: React.ReactNode;
  image?: string;
}

interface FeatureSectionProps {
  title: string;
  subtitle?: string;
  features: Feature[];
  layout?: 'grid' | 'alternating';
  columns?: 2 | 3 | 4;
}

const FeatureSection = ({
  title,
  subtitle,
  features,
  layout = 'grid',
  columns = 3,
}: FeatureSectionProps) => {
  const renderGridLayout = () => {
    const colClasses = {
      2: 'md:grid-cols-2',
      3: 'md:grid-cols-3',
      4: 'md:grid-cols-2 lg:grid-cols-4',
    };
    
    return (
      <div className={`mt-12 grid grid-cols-1 gap-8 ${colClasses[columns]}`}>
        {features.map((feature, index) => (
          <Card
            key={index}
            variant="bordered"
            className="p-6 h-full transform transition-transform hover:-translate-y-1 hover:shadow-md"
          >
            {feature.icon && <div className="text-primary-600 mb-4">{feature.icon}</div>}
            {feature.image && <img src={feature.image} alt={feature.title} className="w-12 h-12 mb-4" />}
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </Card>
        ))}
      </div>
    );
  };
  
  const renderAlternatingLayout = () => {
    return (
      <div className="mt-12 space-y-24">
        {features.map((feature, index) => (
          <div 
            key={index}
            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}
          >
            <div className="md:w-1/2">
              {feature.image ? (
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="rounded-lg shadow-lg max-w-full" 
                />
              ) : (
                <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                  {feature.icon || <span className="text-gray-500">Feature Image</span>}
                </div>
              )}
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
          {subtitle && <p className="mt-4 text-xl text-gray-600">{subtitle}</p>}
        </div>
        
        {layout === 'grid' ? renderGridLayout() : renderAlternatingLayout()}
      </Container>
    </section>
  );
};

export default FeatureSection;
  