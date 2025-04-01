
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';

interface HeroProps {
  title: string;
  subtitle: string;
  primaryCta?: {
    text: string;
    to: string;
  };
  secondaryCta?: {
    text: string;
    to: string;
  };
  image?: string;
  imageAlt?: string;
}

const Hero = ({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  image,
  imageAlt = 'Hero image',
}: HeroProps) => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <Container className="py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 animate-fade-in-slow">
              {title}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 animate-fade-in">
              {subtitle}
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {primaryCta && (
                <Button
                  as="link"
                  to={primaryCta.to}
                  variant="primary"
                  size="lg"
                  className="animate-slide-up"
                >
                  {primaryCta.text}
                </Button>
              )}
              
              {secondaryCta && (
                <Button
                  as="link"
                  to={secondaryCta.to}
                  variant="outline"
                  size="lg"
                  className="animate-slide-up"
                >
                  {secondaryCta.text}
                </Button>
              )}
            </div>
          </div>
          
          {image && (
            <div className="lg:relative animate-fade-in">
              <div className="hidden lg:block absolute -z-10 inset-0 bg-gradient-to-tr from-primary-200 to-secondary-200 opacity-30 rounded-full blur-3xl transform -translate-y-20 translate-x-20" />
              <img
                src={image}
                alt={imageAlt}
                className="mx-auto lg:mx-0 max-w-full rounded-lg shadow-xl"
              />
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Hero;
  