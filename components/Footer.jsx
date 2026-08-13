'use client';

import { FiGithub, FiLinkedin, FiFacebook, FiMail } from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', icon: FiGithub, href: 'https://github.com/naimur-reza' },
    { name: 'LinkedIn', icon: FiLinkedin, href: 'https://www.linkedin.com/in/naimur-reza' },
    { name: 'Email', icon: FiMail, href: 'mailto:parvezahmedprottoy.web@gmail.com' },
    { name: 'Facebook', icon: FiFacebook, href: 'https://www.facebook.com/iamrezadadu/' },
  ];

  return (
    <footer className="relative w-full bg-[#050403] border-t border-white/5 py-16 flex flex-col items-center justify-center overflow-hidden">
      
      {/* Subtle Ambient Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
        {/* Central orange ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#ea580c]/5 rounded-full blur-[120px]" />
        {/* Top/bottom edge highlights */}
        <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-[#ea580c]/20 to-transparent" />
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[#ea580c]/[0.02] to-transparent" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center w-full">
        {/* Social Icons */}
        <div className="flex items-center gap-4 mb-10">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="flex items-center justify-center size-12 rounded-full bg-[#0a0a0a]/80 backdrop-blur-sm border border-white/5 text-white/60 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:text-[#ea580c] hover:border-[#ea580c]/30 hover:bg-[#111]"
              >
                <Icon className="size-5" />
              </a>
            );
          })}
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px w-24 sm:w-32 bg-gradient-to-r from-transparent to-white/10" />
          <div className="h-1.5 w-1.5 rounded-full bg-[#ea580c] shadow-[0_0_10px_rgba(234,88,12,0.8)]" />
          <div className="h-px w-24 sm:w-32 bg-gradient-to-l from-transparent to-white/10" />
        </div>

        {/* Copyright */}
        <p className="text-xs text-white/40 tracking-[0.05em] font-medium">
          &copy; {currentYear} Parvez Ahmed. All Rights Reserved.
        </p>
      </div>

    </footer>
  );
}
