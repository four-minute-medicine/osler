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
            title === "PARENT CHAT" ? "#FFE4E4" :
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
        title: "PARENT CHAT",
        description: "Need practice identifying your knowledge gap? Generate Patient scenarios and put your knowledge to the test.",
        href: "/parent",
        disabled: false
      },
      {
        title: "HCW QUERY",
        description: "Stuck looking for an answer? Ask any question related to the material, and I'll even link it to the material",
        href: '/hcw',
        disabled: false
      },
      {
        title: "VIRTUAL PATIENT CASES",
        description: "Don't understand a section in the material? Paste in or reference a section to explain it better.",
        href: '/virtualpatient',
        disabled: false
      }
    ];

    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-6xl w-full px-8">
          {/* Welcome Text */}
          <div className="mb-16">
            <h1 className="text-5xl font-bold text-black mb-6">
              Welcome to <span className={`${balooBhai.className} font-bold`}> Brightstart </span>
            </h1>
            <p className="text-gray-800 text-lg max-w-4xl">
              We are dedicated to providing parents and healthcare workers with quick, easy access to government resources while helping healthcare workers build knowledge and confidence in child care.<br/><br/>
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