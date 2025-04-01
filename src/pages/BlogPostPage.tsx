
import { useParams } from 'react-router-dom';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // In a real application, you would fetch the blog post data based on the slug
  // This is just a placeholder example
  const post = {
    title: 'The Evolution of Attribution: From Last-Click to AI-Powered Insights',
    date: 'November 15, 2023',
    category: 'Attribution',
    author: {
      name: 'Dr. Sarah Chen',
      title: 'Co-Founder & CEO',
      image: 'https://placehold.co/150/0ea5e9/FFFFFF/png?text=Sarah+Chen',
      bio: 'Former VP of Data Science at Branch.io with 15+ years experience in attribution technology and machine learning. PhD in Computer Science from Stanford University.'
    },
    heroImage: 'https://placehold.co/1200x600/0ea5e9/FFFFFF/png?text=AI+Attribution',
    content: `
      <h2>The Limited View of Traditional Attribution</h2>
      
      <p>For over a decade, digital marketers have relied on attribution models that were created for a simpler time. Last-click attribution, first-click attribution, and even multi-touch models were designed when digital journeys were linear and tracking was straightforward.</p>
      
      <p>These models served us well in their time, but they've become increasingly inadequate as consumer journeys have grown more complex. The modern customer journey spans multiple devices, channels, and time periods, creating a web of interactions that traditional models simply can't untangle.</p>
      
      <p>Furthermore, the attribution landscape has been dramatically reshaped by privacy regulations, browser restrictions on tracking, and changing consumer attitudes. The deterministic methods we've relied on are becoming less effective by the day.</p>
      
      <h2>The AI Revolution in Attribution</h2>
      
      <p>Artificial intelligence offers a fundamentally different approach to solving these challenges. Rather than relying solely on direct tracking and simplistic rules, AI-powered attribution uses machine learning to identify patterns and make probabilistic connections across fragmented customer journeys.</p>
      
      <p>Here's how AI is transforming attribution:</p>
      
      <h3>1. Pattern Recognition Across Fragmented Journeys</h3>
      
      <p>AI models can identify behavioral patterns that persist across devices and sessions, even without traditional identifiers like cookies. By analyzing thousands of successful conversion paths, these systems learn to recognize the fingerprints of the same user across different touchpoints.</p>
      
      <p>This probabilistic approach doesn't require perfect tracking - it thrives on patterns in aggregate data, making it resilient to the limitations of modern tracking environments.</p>
      
      <h3>2. Dynamic Attribution Modeling</h3>
      
      <p>Traditional attribution models apply the same static rules to every user journey. AI-powered attribution recognizes that different products, customer segments, and campaigns may require different attribution logic.</p>
      
      <p>These systems continuously analyze conversion data to determine the actual impact of each touchpoint for specific scenarios, rather than applying one-size-fits-all rules. The result is a dynamic model that evolves as customer behavior changes.</p>
      
      <h3>3. Predictive Attribution</h3>
      
      <p>Perhaps most revolutionary is the shift from backward-looking attribution to predictive attribution. Traditional models can only tell you what happened in the past. AI-powered systems can predict which current touchpoints are likely to influence future conversions.</p>
      
      <p>This predictive capability enables marketers to optimize campaigns based on projected outcomes rather than historical data alone - a crucial advantage in fast-changing markets.</p>
      
      <h2>Implementing AI-Powered Attribution</h2>
      
      <p>The transition from traditional to AI-powered attribution isn't just a technology shift - it requires a new approach to measurement strategy:</p>
      
      <h3>1. Embrace Probabilistic Thinking</h3>
      
      <p>AI-powered attribution deals in probabilities rather than certainties. Marketing teams need to become comfortable with confidence levels and probabilistic attribution rather than expecting perfect tracking of every user journey.</p>
      
      <h3>2. Focus on Incrementality</h3>
      
      <p>The true goal of attribution is understanding the incremental impact of marketing activities. AI models excel at identifying the true causal impact of touchpoints rather than simply assigning credit based on position in the journey.</p>
      
      <h3>3. Combine Multiple Data Sources</h3>
      
      <p>The best AI attribution systems integrate data from multiple sources - website analytics, CRM data, media platforms, and even offline touchpoints - to build a comprehensive view of the customer journey.</p>
      
      <h2>The Future of AI-Powered Attribution</h2>
      
      <p>As we look ahead, several emerging trends will shape the evolution of AI-powered attribution:</p>
      
      <h3>1. Privacy-Preserving Machine Learning</h3>
      
      <p>Advanced techniques like federated learning and differential privacy will enable powerful attribution insights while maintaining strong privacy protections for user data.</p>
      
      <h3>2. Cross-Channel Optimization</h3>
      
      <p>AI systems will increasingly optimize marketing spend across channels in real-time based on attribution insights, automatically reallocating budget to the most effective touchpoints.</p>
      
      <h3>3. Unified Marketing Measurement</h3>
      
      <p>The distinction between attribution and marketing mix modeling will blur as AI systems combine the granularity of attribution with the comprehensive view of mix modeling into unified measurement frameworks.</p>
      
      <h2>Conclusion</h2>
      
      <p>The evolution from last-click to AI-powered attribution represents more than just a technological upgrade - it's a fundamental reimagining of how we understand marketing effectiveness in a complex, privacy-conscious world.</p>
      
      <p>Organizations that embrace this new paradigm will gain a significant competitive advantage, with a clearer understanding of what truly drives customer conversions and the ability to optimize marketing investments for maximum impact.</p>
      
      <p>The future of attribution isn't just about tracking what happened - it's about understanding why it happened and predicting what will happen next. AI is making this future possible today.</p>
    `,
    relatedPosts: [
      {
        id: 'privacy-preserving-tracking',
        title: 'Privacy-Preserving Attribution in a Post-Cookie World',
        image: 'https://placehold.co/800x500/0ea5e9/FFFFFF/png?text=Privacy+Attribution'
      },
      {
        id: 'cross-device-attribution',
        title: 'Solving the Cross-Device Attribution Challenge with Machine Learning',
        image: 'https://placehold.co/800x500/0ea5e9/FFFFFF/png?text=Cross+Device+Attribution'
      },
      {
        id: 'implementing-ai-attribution',
        title: 'Implementing AI-Powered Attribution: A Step-by-Step Guide',
        image: 'https://placehold.co/800x500/0ea5e9/FFFFFF/png?text=Implementation+Guide'
      }
    ]
  };
  
  // This would normally check if the post exists based on the slug
  if (!slug) {
    return (
      <Container className="py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
        <p className="mb-8">The blog post you're looking for doesn't exist or has been moved.</p>
        <Button as="link" to="/blog" variant="primary">
          Return to Blog
        </Button>
      </Container>
    );
  }
  
  return (
    <div>
      {/* Hero section */}
      <div className="bg-white">
        <Container className="py-12">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-sm text-primary-600 font-semibold mb-3">{post.category}</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
            
            <div className="flex items-center justify-center mb-8">
              <img 
                src={post.author.image} 
                alt={post.author.name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div className="text-left">
                <div className="font-semibold">{post.author.name}</div>
                <div className="text-sm text-gray-500">{post.date}</div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      
      {/* Hero image */}
      <div className="w-full bg-gray-100">
        <img 
          src={post.heroImage} 
          alt={post.title}
          className="w-full max-h-[600px] object-cover"
        />
      </div>
      
      {/* Content */}
      <article className="bg-white py-12">
        <Container>
          <div className="grid grid-cols-12 gap-12">
            {/* Main content */}
            <div className="col-span-12 lg:col-span-8">
              <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
              
              {/* Tags */}
              <div className="mt-12 flex flex-wrap gap-2">
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Attribution</span>
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">AI</span>
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Marketing</span>
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Analytics</span>
              </div>
              
              {/* Social sharing */}
              <div className="mt-8 flex items-center">
                <span className="text-gray-600 mr-4">Share this article:</span>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-blue-500">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-600">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-800">
                    <span className="sr-only">Facebook</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="col-span-12 lg:col-span-4">
              {/* Author box */}
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <div className="flex items-center mb-4">
                  <img 
                    src={post.author.image} 
                    alt={post.author.name}
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-bold text-lg">{post.author.name}</h3>
                    <p className="text-gray-600 text-sm">{post.author.title}</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm">{post.author.bio}</p>
              </div>
              
              {/* Table of contents */}
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="font-bold text-lg mb-4">Table of Contents</h3>
                <nav>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a href="#" className="text-primary-600 hover:text-primary-800">The Limited View of Traditional Attribution</a>
                    </li>
                    <li>
                      <a href="#" className="text-primary-600 hover:text-primary-800">The AI Revolution in Attribution</a>
                    </li>
                    <li>
                      <a href="#" className="text-primary-600 hover:text-primary-800">Implementing AI-Powered Attribution</a>
                    </li>
                    <li>
                      <a href="#" className="text-primary-600 hover:text-primary-800">The Future of AI-Powered Attribution</a>
                    </li>
                    <li>
                      <a href="#" className="text-primary-600 hover:text-primary-800">Conclusion</a>
                    </li>
                  </ul>
                </nav>
              </div>
              
              {/* Related posts */}
              <div>
                <h3 className="font-bold text-lg mb-4">Related Articles</h3>
                <div className="space-y-4">
                  {post.relatedPosts.map((relatedPost) => (
                    <a 
                      key={relatedPost.id}
                      href={`/blog/${relatedPost.id}`}
                      className="flex items-center group"
                    >
                      <img 
                        src={relatedPost.image} 
                        alt={relatedPost.title}
                        className="w-16 h-16 object-cover rounded mr-3"
                      />
                      <h4 className="font-medium group-hover:text-primary-600 transition-colors">
                        {relatedPost.title}
                      </h4>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </article>
      
      {/* Newsletter */}
      <div className="bg-gray-50 py-12">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-gray-600 mb-6">
              Get the latest insights on AI-powered attribution, industry trends, and practical guides delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <Button variant="primary">
                Subscribe
              </Button>
            </form>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default BlogPostPage;
  