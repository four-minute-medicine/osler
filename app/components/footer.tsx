interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => (
  <a
    href={href}
    className="text-emerald-700 hover:text-emerald-900 transition-colors"
  >
    {children}
  </a>
);

const Footer: React.FC = () => {
  return (
    <footer className="absolute bottom-0 w-full py-8 bg-gradient-to-t from-emerald-100/50 to-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="w-full h-px bg-emerald-200/30" />
      </div>
      <div className="max-w-7xl mx-auto pt-6 px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Logo */}
          <div className="text-emerald-950 text-2xl font-bold">
          BrightStart
          </div>
          {/* Copyright */}
          <div className="text-emerald-700 text-sm">
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