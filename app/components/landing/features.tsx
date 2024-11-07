import Image from 'next/image';
import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, className }) => {
    return (
      <div className={`relative rounded-3xl  p-8 min-h-[500px] flex flex-col ${className}`}         style={{
        background: 'linear-gradient(180deg, rgba(10, 10, 10, 1) 10%, rgba(192, 190, 190, 0.9) 100%)'
      }}>
        {/* Content */}
        <div className="mb-auto">
          <h3 className="text-white text-3xl md:text-4xl font-bold mb-6">
            {title}
          </h3>
          <p className="text-white/80 text-lg md:text-xl leading-relaxed">
            {description}
          </p>
        </div>
  
        {/* Laptop Image */}
        <div className="mt-8">
          <div className="relative aspect-[16/9] w-full">
            <Image 
              src="https://s3-alpha-sig.figma.com/img/5c2f/8320/1247faa6f74322102d3508c9e3c4f3dc?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mGci6c~7RIxUkiZaxS7UvoPhpLHhgV262HJeYgtEibNYl6WspkjJv7W9ETehZRGoHufzflAjt~uYd-fxcCHRAEkhhex8xo54wpyNdtOJM54PUW4Bs3iP9B7xruMEmduBdzZbSSxQMGn3oYuqBvteW~5YOFnWXDQ3wZwZAiSffJHGI2FssXDwSAxmxVXPMzL4d-s8tlHi4lNPUYtT7XMadwJ1oEgf~TOegEgCRq2Jjo-jYXTmzrlSbn~mSrz61E55HZDdfQ1BgB7rbXSPuU8FQtMJBo1QTj-QU8w6Wa-ozGmn~mELbqFBKcPN~eQY9OFlihXtrOFch13QBk3n52iJgA__"
              alt="Feature illustration"
              className="w-full h-full object-cover rounded-lg"
            />
            {/* Reflection Effect */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-transparent to-white/10 mix-blend-overlay" />
          </div>
        </div>
  
        {/* Gradient Border Effect */}
        <div className="absolute inset-0 rounded-3xl -z-10 p-[1px] bg-gradient-to-b from-white/15 to-transparent">
          <div className="absolute inset-0 rounded-3xl bg-[#0A0A0A]" />
        </div>
  
        {/* Card Glow Effect */}
        <div className="absolute -z-20 inset-0 rounded-3xl opacity-20 blur-xl bg-radial-gradient" />
      </div>
    );
  };

interface Feature {
  id: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    id: 'patient-simulations',
    title: 'Patient Simulations',
    description: 'Diagnose and treat virtual clinical cases, receiving feedback to sharpen clinical decision-making.'
  },
  {
    id: 'adaptive-quizzing',
    title: 'Adaptive Quizzing',
    description: 'Reinforce knowledge through scenario-based quizzes that encourage critical thinking.'
  },
  {
    id: 'tailored-explanations',
    title: 'Tailored Explanations',
    description: 'Get tailored content explanations to deepen understanding of complex topics.'
  }
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="bg-black w-full py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span 
            className="text-sm tracking-[0.3em] uppercase mb-4 text-white/70 block"
            style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
          >
            Features
          </span>
          <h2 
            className="text-white text-5xl md:text-6xl font-bold"
            style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
          >
            How Osler works
          </h2>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              title={feature.title}
              description={feature.description}
              className="md:hover:translate-y-[-8px] transition-transform duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;