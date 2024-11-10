  import React from 'react';
  import { useRouter } from 'next/navigation';
  import { StudyModeProps } from '../types/welcome';
  import { Baloo_Bhai_2 } from 'next/font/google';

  const balooBhai = Baloo_Bhai_2({ subsets: ['latin'] });

  const StudyModeButton: React.FC<StudyModeProps & { disabled?: boolean; onClick?: () => void }> = ({
    title,
    description,
    onClick
  }) => (
    <div className="flex flex-col items-center">
      <button
        onClick={onClick}
        className="bg-opacity-20 px-8 py-4 rounded-lg mb-6 w-full text-center text-black transition-colors"
        style={{
          backgroundColor:
            title === "CAREGIVER CHAT" ? "#FFE4E4" :
            title === "HCW QUERY" ? "#D1E4D1" :
            "#E5DDD3"
        }}
      >
        {title}
      </button>
      <p className="text-gray-600 text-center max-w-xs text-sm">
        {description}
      </p>
    </div>
  );

  const WelcomePage: React.FC = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = React.useState(false);

    const handleNavigation = (href: string) => {
      setIsLoading(true);
      try {
        router.push(href);
      } catch (error) {
        console.error('Error navigating:', error);
      } finally {
        setIsLoading(false);
      }
    };

    const studyModes = [
      {
        title: "CAREGIVER CHAT",
        description: "If you are a parent who is confused or has a question relating to your child and the Road to Health Book? The ‘Parent Chat’ is for you.",
        href: "/parent",
        disabled: false
      },
      {
        title: "HCW QUERY",
        description: "HCW query helps Healthcare workers query government and hospital based child health guidelines",
        href: '/hcw',
        disabled: false
      },
      {
        title: "VIRTUAL PATIENT CASES",
        description: "Healthcare workers and trainees can use this scenario based learning tool to build diagnostic skills and confidence",
        href: '/virtual-patient',
        disabled: false
      }
    ];

    return (
      <div className="min-h-screen flex items-center w-screen justify-center">
        <div className="max-w-6xl w-full px-8">
          {/* Welcome Text */}
          <div className="mb-16">
            <h1 className="text-5xl font-bold text-black mb-6">
              Welcome to <span className={`${balooBhai.className} font-bold`}> BrightStart </span>
            </h1>
            <p className="text-gray-800 text-lg max-w-4xl">
              Helping you build confidence, deepen your knowledge, and master caring for your patients.<br/><br/>
              Select on the below to get started!
            </p>
          </div>
  
          {/* Study Modes with fixed-width dividers */}
          <div className="hidden md:flex justify-between items-start">
            {studyModes.map((mode, index) => (
              <React.Fragment key={index}>
                <div className="flex-1">
                  <StudyModeButton
                    title={isLoading && !mode.disabled ? `${mode.title} ...` : mode.title}
                    description={mode.description}
                    href={mode.href}
                    disabled={mode.disabled}
                    onClick={() => handleNavigation(mode.href)}
                  />
                </div>
                {index < studyModes.length - 1 && (
                  <div style={{ width: '1px' }} className="h-40 bg-black self-center mt-8 mx-8"></div>
                )}
              </React.Fragment>
            ))}
          </div>
  
          {/* Mobile View */}
          <div className="md:hidden grid grid-cols-1 gap-8">
            {studyModes.map((mode, index) => (
              <StudyModeButton
                key={index}
                title={isLoading && !mode.disabled ? `${mode.title} ...` : mode.title}
                description={mode.description}
                href={mode.href}
                disabled={mode.disabled}
                onClick={() => handleNavigation(mode.href)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default WelcomePage;