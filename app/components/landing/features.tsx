'use client'
import React from 'react';
import { Brain, Activity, BookOpen } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  className?: string;
}
interface Feature {
  id:string;
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, gradient, className }) => {
  return (
    <div
      className={`relative rounded-3xl p-8 min-h-[500px] flex flex-col group ${className}`}
      style={{
        background: gradient
      }}
    >
      {/* Content */}
      <div className="mb-8">
        <h3 className="text-white text-3xl md:text-4xl font-bold mb-6">
          {title}
        </h3>
        <p className="text-white/90 text-lg md:text-xl leading-relaxed">
          {description}
        </p>
      </div>

      {/* Interactive Visual Area */}
      <div className="mt-auto relative group-hover:transform group-hover:scale-105 transition-all duration-500">
        {/* Icon Container */}
        <div className="relative h-48 flex items-center justify-center">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-white/10 rounded-2xl backdrop-blur-sm" />
          
          {/* Main Icon */}
          <div className="relative transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
            {icon}
          </div>

          {/* Animated Dots */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute h-2 w-2 bg-white rounded-full animate-ping" 
              style={{ top: '20%', left: '20%', animationDelay: '0s' }} />
            <div className="absolute h-2 w-2 bg-white rounded-full animate-ping" 
              style={{ top: '70%', left: '80%', animationDelay: '0.5s' }} />
            <div className="absolute h-2 w-2 bg-white rounded-full animate-ping" 
              style={{ top: '80%', left: '30%', animationDelay: '1s' }} />
          </div>

          {/* Connection Lines */}
          <div className="absolute inset-0">
            <svg className="w-full h-full" style={{ opacity: 0.2 }}>
              <path d="M 20 20 L 180 180" stroke="white" strokeWidth="1" />
              <path d="M 180 20 L 20 180" stroke="white" strokeWidth="1" />
            </svg>
          </div>
        </div>
      </div>

      {/* Card Border and Glow */}
      <div className="absolute inset-0 rounded-3xl -z-10 p-[1px] bg-gradient-to-b from-white/30 to-transparent">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/5 to-transparent" />
      </div>
      <div className="absolute -z-20 inset-0 rounded-3xl opacity-20 blur-xl bg-white" />
      
      {/* Playful corner decorations */}
      <div className="absolute top-4 left-4 w-12 h-12 border-t-4 border-l-4 border-white/20 rounded-tl-xl" />
      <div className="absolute bottom-4 right-4 w-12 h-12 border-b-4 border-r-4 border-white/20 rounded-br-xl" />
    </div>
  );
};

const features: (Feature & { icon: React.ReactNode; gradient: string })[] = [
  {
    id: 'patient-simulations',
    title: 'Patient Simulations',
    description: 'Diagnose and treat virtual clinical cases, receiving feedback to sharpen clinical decision-making.',
    icon: <Brain className="w-24 h-24 text-white" strokeWidth={1.5} />,
    gradient: 'linear-gradient(45deg, #FF6B6B 0%, #FFB88C 100%)'
  },
  {
    id: 'adaptive-quizzing',
    title: 'Adaptive Quizzing',
    description: 'Reinforce knowledge through scenario-based quizzes that encourage critical thinking.',
    icon: <Activity className="w-24 h-24 text-white" strokeWidth={1.5} />,
    gradient: 'linear-gradient(45deg, #4ECDC4 0%, #556270 100%)'
  },
  {
    id: 'tailored-explanations',
    title: 'Tailored Explanations',
    description: 'Get tailored content explanations to deepen understanding of complex topics.',
    icon: <BookOpen className="w-24 h-24 text-white" strokeWidth={1.5} />,
    gradient: 'linear-gradient(45deg, #A770EF 0%, #CF8BF3 50%, #FDB99B 100%)'
  }
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="w-full py-32 relative">
      {/* Background with animated gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(77.11% 58.88% at 50% 50%, #FFE5E5 0%, #FFF3E0 25%, #E8FFF3 50%, #E0F7FF 100%)'
        }}
      />
      
      {/* Floating bubbles animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute h-32 w-32 rounded-full bg-[#FF6B6B]/30 blur-xl animate-float" 
          style={{ left: '10%', top: '20%', animationDelay: '0s' }} />
        <div className="absolute h-24 w-24 rounded-full bg-[#4ECDC4]/30 blur-xl animate-float" 
          style={{ left: '80%', top: '15%', animationDelay: '2s' }} />
        <div className="absolute h-40 w-40 rounded-full bg-[#A770EF]/30 blur-xl animate-float" 
          style={{ left: '20%', top: '60%', animationDelay: '4s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span 
            className="inline-block text-sm tracking-[0.3em] uppercase mb-4 text-gray-800 bg-white/50 px-6 py-2 rounded-full shadow-lg"
            style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
          >
            Features
          </span>
          <h2 
            className="text-5xl md:text-6xl font-bold font-helvetica bg-clip-text text-transparent"
            style={{ 
              background: 'linear-gradient(to right, #2D3047 20%, #419D78 80%)',
              WebkitBackgroundClip: 'text'
            }}
          >
            How BrightStart works
          </h2>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              gradient={feature.gradient}
              className="hover:translate-y-[-8px] transition-all duration-300"
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default FeaturesSection;