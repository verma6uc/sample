
import { Link } from 'react-router-dom';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

const NotFoundPage = () => {
  return (
    <Container className="py-20 text-center">
      <div className="max-w-md mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-3xl font-bold text-gray-700 mb-6">Page Not Found</p>
        <p className="text-gray-600 mb-12">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button as="link" to="/" variant="primary">
            Return Home
          </Button>
          <Button as="link" to="/contact" variant="outline">
            Contact Support
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default NotFoundPage;
  