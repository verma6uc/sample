
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';

interface Testimonial {
  quote: string;
  author: {
    name: string;
    title: string;
    company: string;
    image?: string;
  };
}

interface TestimonialSectionProps {
  title: string;
  subtitle?: string;
  testimonials: Testimonial[];
  background?: 'white' | 'light' | 'dark';
}

const TestimonialSection = ({
  title,
  subtitle,
  testimonials,
  background = 'light',
}: TestimonialSectionProps) => {
  const bgColors = {
    white: 'bg-white',
    light: 'bg-gray-50',
    dark: 'bg-gray-900 text-white',
  };
  
  const textColors = {
    white: 'text-gray-900',
    light: 'text-gray-900',
    dark: 'text-white',
  };
  
  const subtitleColors = {
    white: 'text-gray-600',
    light: 'text-gray-600',
    dark: 'text-gray-300',
  };
  
  const cardVariant = background === 'dark' ? 'default' : 'elevated';
  
  return (
    <section className={`py-16 md:py-24 ${bgColors[background]}`}>
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-bold ${textColors[background]}`}>{title}</h2>
          {subtitle && <p className={`mt-4 text-xl ${subtitleColors[background]}`}>{subtitle}</p>}
        </div>
        
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              variant={cardVariant}
              className={`p-6 ${background === 'dark' ? 'bg-gray-800' : ''}`}
            >
              <div className={`text-4xl mb-4 ${background === 'dark' ? 'text-primary-400' : 'text-primary-600'}`}>"</div>
              <p className={`italic mb-6 ${background === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                {testimonial.quote}
              </p>
              <div className="flex items-center">
                {testimonial.author.image ? (
                  <img
                    src={testimonial.author.image}
                    alt={testimonial.author.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                ) : (
                  <div className={`w-12 h-12 rounded-full mr-4 flex items-center justify-center ${background === 'dark' ? 'bg-gray-700' : 'bg-gray-200'}`}>
                    <span className="text-xl font-bold">
                      {testimonial.author.name.charAt(0)}
                    </span>
                  </div>
                )}
                <div>
                  <p className={`font-bold ${textColors[background]}`}>{testimonial.author.name}</p>
                  <p className={background === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                    {testimonial.author.title}, {testimonial.author.company}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TestimonialSection;
  