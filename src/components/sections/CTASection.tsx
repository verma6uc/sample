
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';

interface CTASectionProps {
  title: string;
  subtitle?: string;
  primaryCta?: {
    text: string;
    to: string;
  };
  secondaryCta?: {
    text: string;
    to: string;
  };
  background?: 'light' | 'gradient' | 'dark';
}

const CTASection = ({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  background = 'light',
}: CTASectionProps) => {
  const bgClasses = {
    light: 'bg-gray-50',
    gradient: 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white',
    dark: 'bg-gray-900 text-white',
  };
  
  const titleColor = background === 'light' ? 'text-gray-900' : 'text-white';
  const subtitleColor = {
    light: 'text-gray-600',
    gradient: 'text-white/90',
    dark: 'text-gray-300',
  };
  
  // Adjust button variants based on background
  const primaryBtnVariant = background === 'light' ? 'primary' : 'outline';
  const secondaryBtnVariant = background === 'light' ? 'outline' : 'text';
  
  return (
    <section className={`py-16 md:py-24 ${bgClasses[background]}`}>
      <Container size="md">
        <div className="text-center">
          <h2 className={`text-3xl md:text-4xl font-bold ${titleColor}`}>{title}</h2>
          {subtitle && <p className={`mt-6 text-xl ${subtitleColor[background]}`}>{subtitle}</p>}
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            {primaryCta && (
              <Button
                as="link"
                to={primaryCta.to}
                variant={primaryBtnVariant}
                size="lg"
                className={background !== 'light' ? 'border-white text-white hover:bg-white/10' : ''}
              >
                {primaryCta.text}
              </Button>
            )}
            
            {secondaryCta && (
              <Button
                as="link"
                to={secondaryCta.to}
                variant={secondaryBtnVariant}
                size="lg"
                className={background !== 'light' ? 'text-white hover:bg-white/10' : ''}
              >
                {secondaryCta.text}
              </Button>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTASection;
  