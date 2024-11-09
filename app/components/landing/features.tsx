'use client'
import React from 'react';
import Image from 'next/image';
import vector from '../../assets/vector 2.png';

interface FeatureCardProps {
  title: string;
  description: string;
  bgColor: string;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, bgColor, className }) => {
  return (
    <div
      className={`relative rounded-[32px] p-12 min-h-[500px] justify-center flex flex-col ${className}`}
      style={{
        backgroundColor: bgColor
      }}
    >
      <h3 className="text-black text-center text-2xl font-bold mb-8 uppercase tracking-wide" style={{ fontFamily: 'Inter, sans-serif' }}>
        {title}
      </h3>
      <p className="text-gray-700 text-xl text-center leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
        {description}
      </p>
    </div>
  );
};

const features = [
  {
    id: 'parent-queries',
    title: 'Parent Queries',
    description: 'Easily ask your medical questions and find crucial information from the Road to Health Book.',
    bgColor: '#FFE5EC'
  },
  {
    id: 'healthcare-workers',
    title: 'Healthcare Workers Queries',
    description: 'Quickly access and reference both the Child Road to Health Book and IMCI guidelines and make informed decisions with AI-powered insights.',
    bgColor: '#E5F4F0'
  },
  {
    id: 'training',
    title: 'Training',
    description: 'Benefit from AI-driven patient simulations to hone your skills in early childhood health.',
    bgColor: '#F0EBE5'
  }
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="w-full py-32 relative bg-[#FDFBF7] overflow-hidden">
      {/* Container to control background elements */}
      <div className="absolute inset-0 z-0">
        {/* Background Vector */}
        <div className="absolute left-[-200px] top-0 w-[800px] h-[800px] opacity-[1] transform rotate-[270deg]">
          <Image
            src={vector}
            alt="Background vector"
            fill
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>
      </div>

      {/* Content container with higher z-index */}
      <div className="relative z-[1] max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span
            className="text-sm tracking-[0.3em] uppercase mb-4 font-bold text-gray-600 block"
          >
            Features
          </span>
          <h2
            className="text-5xl md:text-6xl font-bold text-black mb-16"
            style={{
              fontFamily: 'Inter, sans-serif',
              lineHeight: '1.2'
            }}
          >
            How Brightsart works
          </h2>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              title={feature.title}
              description={feature.description}
              bgColor={feature.bgColor}
              className="hover:translate-y-[-4px] transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;