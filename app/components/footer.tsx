'use client'
import React from 'react';
import { Baloo_Bhai_2 } from 'next/font/google';

const balooBhai = Baloo_Bhai_2({ subsets: ['latin'] });

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => (
  <a
    href={href}
    className="text-gray-400 hover:text-white transition-colors"
  >
    {children}
  </a>
);

const Footer: React.FC = () => {
  return (
    <footer className="absolute bottom-0 w-full py-8 bg-black">
      <div className="max-w-7xl mx-auto pt-6 px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Logo */}
          <div 
            className={`text-white ${balooBhai.className}`}
            style={{
              fontSize: '30px',
              fontWeight: 400,
              lineHeight: '25px',
              textAlign: 'center',
              textUnderlinePosition: 'from-font',
              textDecorationSkipInk: 'none'
            }}
          >            BrightStart
          </div>
          {/* Copyright */}
          <div className="text-gray-400 text-sm">
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