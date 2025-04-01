
import Hero from '@/components/sections/Hero';
import Container from '@/components/ui/Container';
import CTASection from '@/components/sections/CTASection';

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      title: "Co-Founder & CEO",
      bio: "Former VP of Data Science at Branch.io with 15+ years experience in attribution technology and machine learning. PhD in Computer Science from Stanford University.",
      image: "https://placehold.co/300/0ea5e9/FFFFFF/png?text=Sarah+Chen"
    },
    {
      name: "Michael Rodriguez",
      title: "Co-Founder & CTO",
      bio: "Previously led AI research at Google, specializing in predictive analytics and natural language processing. MS in Artificial Intelligence from MIT.",
      image: "https://placehold.co/300/0ea5e9/FFFFFF/png?text=Michael+Rodriguez"
    },
    {
      name: "Priya Sharma",
      title: "VP of Product",
      bio: "Product leader with extensive experience in marketing technology platforms. Former product director at Adobe Marketing Cloud focusing on attribution products.",
      image: "https://placehold.co/300/0ea5e9/FFFFFF/png?text=Priya+Sharma"
    },
    {
      name: "David Kim",
      title: "VP of Engineering",
      bio: "Seasoned engineering leader with expertise in building scalable data platforms. Previously Engineering Director at Segment focusing on customer data infrastructure.",
      image: "https://placehold.co/300/0ea5e9/FFFFFF/png?text=David+Kim"
    },
    {
      name: "Alex Johnson",
      title: "Head of Data Science",
      bio: "Expert in machine learning for behavioral prediction models. Led data science initiatives at Netflix focused on recommendation systems and user journey analysis.",
      image: "https://placehold.co/300/0ea5e9/FFFFFF/png?text=Alex+Johnson"
    },
    {
      name: "Jennifer Wu",
      title: "VP of Customer Success",
      bio: "Customer-focused leader with deep experience in implementing attribution solutions. Previously led enterprise customer success at AppsFlyer.",
      image: "https://placehold.co/300/0ea5e9/FFFFFF/png?text=Jennifer+Wu"
    },
  ];
  
  const values = [
    {
      title: "Intelligent Innovation",
      description: "We believe AI should enhance human capabilities, not replace them. Our technology is designed to augment marketers' creativity and strategic thinking with data-driven intelligence."
    },
    {
      title: "Privacy by Design",
      description: "We build our technology with user privacy as a foundational principle, not an afterthought. Our systems are designed to deliver powerful insights while respecting user privacy preferences."
    },
    {
      title: "Transparent Attribution",
      description: "We're committed to making the black box of attribution transparent. Our customers always understand how our AI arrives at its conclusions and recommendations."
    },
    {
      title: "Continuous Learning",
      description: "We believe in the power of constant improvement. Our systems continuously learn and adapt, and our team embodies this principle through relentless curiosity."
    },
  ];
  
  return (
    <>
      <Hero
        title="Our Story"
        subtitle="Building the future of AI-powered attribution and deep linking"
        image="https://placehold.co/600x400/0ea5e9/FFFFFF/png?text=Our+Team"
      />
      
      <section className="py-16 bg-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-700 mb-4">
                AI Link Intelligence was founded with a clear mission: to transform link management from a technical utility into a strategic growth engine powered by artificial intelligence.
              </p>
              <p className="text-gray-700 mb-4">
                We saw an industry stuck in the past - using deep linking technology that hadn't fundamentally evolved in over a decade, despite revolutionary advances in AI and machine learning. Even as marketing evolved to become more data-driven and sophisticated, the critical infrastructure connecting users to experiences remained static and limited.
              </p>
              <p className="text-gray-700">
                Our founders, with backgrounds spanning attribution technology and artificial intelligence research, came together to build something entirely new: a platform that doesn't just track user journeys but understands, predicts, and optimizes them through the power of AI.
              </p>
            </div>
            <div>
              <img 
                src="https://placehold.co/600x400/0ea5e9/FFFFFF/png?text=Our+Mission"
                alt="Our Mission"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </Container>
      </section>
      
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">
              The core principles that guide our product development and company culture.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-primary-600">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
      
      <section className="py-16 bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Team</h2>
            <p className="text-xl text-gray-600">
              Meet the experts in AI, attribution, and marketing technology building our platform.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="text-center">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-primary-600 mb-2">{member.title}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
      
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://placehold.co/600x400/0ea5e9/FFFFFF/png?text=Innovation+Lab"
                alt="Innovation Lab"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Research & Innovation</h2>
              <p className="text-gray-700 mb-4">
                At the core of our company is a commitment to continuous research and innovation in the fields of attribution modeling, behavioral prediction, and privacy-preserving machine learning.
              </p>
              <p className="text-gray-700 mb-4">
                Our AI Research Lab collaborates with academic institutions and industry partners to advance the state of the art in attribution technology, ensuring our platform remains at the cutting edge of what's possible.
              </p>
              <p className="text-gray-700">
                We regularly publish our research findings and contribute to open-source projects, believing that transparency and collaboration accelerate innovation in ways that benefit the entire industry.
              </p>
            </div>
          </div>
        </Container>
      </section>
      
      <section className="py-16 bg-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Commitment to Ethical AI</h2>
              <p className="text-gray-700 mb-4">
                We believe that artificial intelligence comes with responsibility. As we build systems that influence marketing decisions and user experiences, we're committed to developing and deploying AI ethically.
              </p>
              <p className="text-gray-700 mb-4">
                This means prioritizing fairness and avoiding bias in our models, maintaining transparency in how our AI makes decisions, and designing systems that enhance privacy rather than compromise it.
              </p>
              <p className="text-gray-700">
                Our Ethics Advisory Board, comprising experts in AI ethics, privacy, and marketing, provides ongoing guidance to ensure our technology development aligns with our values and benefits society.
              </p>
            </div>
            <div>
              <img 
                src="https://placehold.co/600x400/0ea5e9/FFFFFF/png?text=Ethical+AI"
                alt="Ethical AI"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </Container>
      </section>
      
      <CTASection
        title="Join Our Team"
        subtitle="We're looking for talented individuals passionate about AI, marketing technology, and building the future of attribution."
        primaryCta={{ text: "View Open Positions", to: "/careers" }}
        secondaryCta={{ text: "Learn About Our Culture", to: "/culture" }}
        background="gradient"
      />
    </>
  );
};

export default AboutPage;
  