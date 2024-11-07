interface FooterLinkProps {
    href: string;
    children: React.ReactNode;
  }
  
  const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => (
    <a 
      href={href} 
      className="text-white/70 hover:text-white transition-colors"
    >
      {children}
    </a>
  );
  
  const Footer: React.FC = () => {
    return (
      <footer className="absolute bottom-0 w-full py-8">
              <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="w-full h-px bg-white/10" />
      </div>
        <div className="max-w-7xl mx-auto pt-6 px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Logo */}
            <div className="text-white text-2xl font-bold">
              Osler
            </div>
  
            {/* Copyright */}
            <div className="text-white/70 text-sm">
              Copyright © 2023 Four Minute Medicine (PTY) LTD. All rights reserved.
            </div>
  
            {/* Links */}
            <div className="flex gap-8 text-sm">
              <FooterLink href="/privacy">Privacy Policy</FooterLink>
              <FooterLink href="/terms">Terms</FooterLink>
              <FooterLink href="/disclaimer">Disclaimer</FooterLink>
              <FooterLink href="/contact">Contact us</FooterLink>
            </div>
          </div>
        </div>
      </footer>
    );
  };

  export default Footer;