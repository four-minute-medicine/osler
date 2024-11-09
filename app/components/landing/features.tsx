'use client'
import React from 'react';
import Image from 'next/image';
import laptop from '../../assets/laptop.png'

interface FeatureCardProps {
  title: string;
  description: string;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, className }) => {
  return (
    <div
      className={`relative rounded-3xl p-8 min-h-[500px] flex flex-col ${className}`}
      style={{
        background: 'linear-gradient(180deg, rgba(209, 250, 229, 1) 10%, rgba(167, 243, 208, 0.9) 100%)'
      }}
    >
      {/* Content */}
      <div className="mb-auto">
        <h3 className="text-emerald-950 text-3xl md:text-4xl font-bold mb-6">
          {title}
        </h3>
        <p className="text-emerald-800 text-lg md:text-xl leading-relaxed">
          {description}
        </p>
      </div>
      {/* Laptop Image */}
      <div className="mt-8">
        <div className="relative aspect-[16/9] w-full">
          <Image
            src={laptop}
            alt="Feature illustration"
            fill
            className="rounded-lg object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Reflection Effect */}
          <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-transparent to-emerald-200/20 mix-blend-overlay" />
        </div>
      </div>
      {/* Gradient Border Effect */}
      <div className="absolute inset-0 rounded-3xl -z-10 p-[1px] bg-gradient-to-b from-emerald-300/50 to-transparent">
        <div className="absolute inset-0 rounded-3xl bg-[#FAFFD1]" />
      </div>
      {/* Card Glow Effect */}
      <div className="absolute -z-20 inset-0 rounded-3xl opacity-20 blur-xl bg-emerald-300" />
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
    <section className="w-full py-32" style={{
      background: 'radial-gradient(77.11% 58.88% at 50% 50%, #FAFFD1 0%, #D8FFE4 50%, #A1FFCE 100%)'
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-sm tracking-[0.3em] uppercase mb-4 text-emerald-700 block font-helvetica">
            Features
          </span>
          <h2 className="text-emerald-950 text-5xl md:text-6xl font-bold font-helvetica">
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