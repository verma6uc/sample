
import { Link } from 'react-router-dom';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  author: {
    name: string;
    title: string;
    image?: string;
  };
  image: string;
}

const BlogPage = () => {
  const featuredPost: BlogPost = {
    id: 'ai-attribution-evolution',
    title: 'The Evolution of Attribution: From Last-Click to AI-Powered Insights',
    excerpt: 'How artificial intelligence is fundamentally transforming the way we understand and optimize marketing attribution in a privacy-first digital landscape.',
    date: 'November 15, 2023',
    category: 'Attribution',
    author: {
      name: 'Dr. Sarah Chen',
      title: 'Co-Founder & CEO',
      image: 'https://placehold.co/150/0ea5e9/FFFFFF/png?text=Sarah+Chen'
    },
    image: 'https://placehold.co/1200x600/0ea5e9/FFFFFF/png?text=AI+Attribution'
  };
  
  const recentPosts: BlogPost[] = [
    {
      id: 'privacy-preserving-tracking',
      title: 'Privacy-Preserving Attribution in a Post-Cookie World',
      excerpt: 'How to maintain effective marketing attribution while respecting user privacy and adapting to evolving regulations and browser restrictions.',
      date: 'November 8, 2023',
      category: 'Privacy',
      author: {
        name: 'Michael Rodriguez',
        title: 'Co-Founder & CTO',
        image: 'https://placehold.co/150/0ea5e9/FFFFFF/png?text=Michael+Rodriguez'
      },
      image: 'https://placehold.co/800x500/0ea5e9/FFFFFF/png?text=Privacy+Attribution'
    },
    {
      id: 'predictive-journey-optimization',
      title: 'Predictive Journey Optimization: Beyond A/B Testing',
      excerpt: 'How AI can dynamically predict and prevent conversion drop-offs before they happen, revolutionizing traditional optimization approaches.',
      date: 'October 29, 2023',
      category: 'Optimization',
      author: {
        name: 'Alex Johnson',
        title: 'Head of Data Science',
        image: 'https://placehold.co/150/0ea5e9/FFFFFF/png?text=Alex+Johnson'
      },
      image: 'https://placehold.co/800x500/0ea5e9/FFFFFF/png?text=Journey+Optimization'
    },
    {
      id: 'natural-language-deeplinks',
      title: 'Creating Deep Links with Natural Language: A Technical Deep Dive',
      excerpt: 'An inside look at how our conversational AI transforms plain English descriptions into technically complex deep link configurations.',
      date: 'October 22, 2023',
      category: 'Technical',
      author: {
        name: 'David Kim',
        title: 'VP of Engineering',
        image: 'https://placehold.co/150/0ea5e9/FFFFFF/png?text=David+Kim'
      },
      image: 'https://placehold.co/800x500/0ea5e9/FFFFFF/png?text=Natural+Language+Links'
    },
    {
      id: 'cross-device-attribution',
      title: 'Solving the Cross-Device Attribution Challenge with Machine Learning',
      excerpt: 'How probabilistic models and behavioral fingerprinting create accurate cross-device attribution without compromising privacy.',
      date: 'October 15, 2023',
      category: 'Attribution',
      author: {
        name: 'Priya Sharma',
        title: 'VP of Product',
        image: 'https://placehold.co/150/0ea5e9/FFFFFF/png?text=Priya+Sharma'
      },
      image: 'https://placehold.co/800x500/0ea5e9/FFFFFF/png?text=Cross+Device+Attribution'
    },
    {
      id: 'implementing-ai-attribution',
      title: 'Implementing AI-Powered Attribution: A Step-by-Step Guide',
      excerpt: 'A practical guide to transitioning from traditional attribution methods to an AI-powered approach, with real-world examples and technical considerations.',
      date: 'October 8, 2023',
      category: 'Implementation',
      author: {
        name: 'Jennifer Wu',
        title: 'VP of Customer Success',
        image: 'https://placehold.co/150/0ea5e9/FFFFFF/png?text=Jennifer+Wu'
      },
      image: 'https://placehold.co/800x500/0ea5e9/FFFFFF/png?text=Implementation+Guide'
    },
  ];
  
  const categories = [
    'All', 'Attribution', 'Privacy', 'Optimization', 'Technical', 'Implementation', 'Case Studies'
  ];
  
  return (
    <div className="bg-gray-50 pb-16">
      <div className="bg-white pb-12">
        <Container>
          <div className="py-16 text-center">
            <h1 className="text-4xl font-bold mb-4">AI Link Intelligence Blog</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Insights, guides, and thought leadership on AI-powered attribution, deep linking, and growth strategy.
            </p>
          </div>
          
          {/* Featured post */}
          <div className="mb-8">
            <Card variant="elevated" className="overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="order-2 md:order-1 p-8">
                  <div className="text-sm text-primary-600 font-semibold mb-1">{featuredPost.category}</div>
                  <Link to={`/blog/${featuredPost.id}`} className="block mb-4">
                    <h2 className="text-3xl font-bold hover:text-primary-600 transition-colors">{featuredPost.title}</h2>
                  </Link>
                  <p className="text-gray-600 mb-6 line-clamp-3">{featuredPost.excerpt}</p>
                  <div className="flex items-center mb-6">
                    {featuredPost.author.image && (
                      <img 
                        src={featuredPost.author.image} 
                        alt={featuredPost.author.name}
                        className="w-10 h-10 rounded-full mr-3"
                      />
                    )}
                    <div>
                      <div className="font-semibold">{featuredPost.author.name}</div>
                      <div className="text-sm text-gray-500">{featuredPost.date}</div>
                    </div>
                  </div>
                  <Button as="link" to={`/blog/${featuredPost.id}`} variant="primary">
                    Read Article
                  </Button>
                </div>
                <div className="order-1 md:order-2">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                    style={{ maxHeight: '400px' }}
                  />
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </div>
      
      <Container className="pt-12">
        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                category === 'All' 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Recent posts grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post) => (
            <Card key={post.id} variant="bordered" className="overflow-hidden h-full">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-primary-600 font-semibold mb-1">{post.category}</div>
                <Link to={`/blog/${post.id}`} className="block mb-3">
                  <h3 className="text-xl font-bold hover:text-primary-600 transition-colors">{post.title}</h3>
                </Link>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center">
                    {post.author.image && (
                      <img 
                        src={post.author.image} 
                        alt={post.author.name}
                        className="w-8 h-8 rounded-full mr-2"
                      />
                    )}
                    <div className="text-sm">{post.author.name}</div>
                  </div>
                  <div className="text-sm text-gray-500">{post.date}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Load more button */}
        <div className="text-center mt-12">
          <Button variant="outline">
            Load More Articles
          </Button>
        </div>
        
        {/* Newsletter subscription */}
        <div className="mt-16 bg-primary-900 text-white p-8 md:p-12 rounded-xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-primary-100">
                Get the latest insights on AI-powered attribution, industry trends, and practical guides delivered to your inbox.
              </p>
            </div>
            <div>
              <form className="space-y-4">
                <div>
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="w-full px-4 py-3 rounded-lg bg-primary-800 border border-primary-700 text-white placeholder-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full px-4 py-3 bg-white text-primary-800 font-medium rounded-lg hover:bg-primary-50 transition-colors"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-xs text-primary-300 mt-3">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BlogPage;
  