"use client";

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '../../lib/utils';
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';
import logo from '../public/logo.png';

interface SocialLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  label: string;
}

const SocialLink = React.forwardRef<HTMLAnchorElement, SocialLinkProps>(
  ({ className, icon: Icon, href, label, ...props }, ref) => (
    <Link
      href={href}
      ref={ref}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'inline-flex items-center justify-center rounded-md p-2 text-gray-600',
        'hover:bg-gray-100 hover:text-orange-600',
        'transition-colors duration-200',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2',
        className
      )}
      aria-label={label}
      {...props}
    >
      <Icon className="h-5 w-5" />
    </Link>
  )
);
SocialLink.displayName = 'SocialLink';

interface ContactItemProps {
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}

const ContactItem = ({ icon: Icon, children }: ContactItemProps) => (
  <div className="flex items-start gap-3">
    <Icon className="mt-0.5 h-5 w-5 shrink-0 text-gray-600" />
    <p className="text-sm leading-snug text-gray-700">{children}</p>
  </div>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      icon: Facebook,
      href: 'https://www.facebook.com/profile.php?id=61571097347345',
      label: 'Facebook',
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/company/105111648/admin/dashboard/',
      label: 'LinkedIn',
    },
    {
      icon: Instagram,
      href: 'https://www.instagram.com/mulya_bazzar/',
      label: 'Instagram',
    },
  ];

  return (
    <footer className="border-t border-gray-200 bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-2">
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0">
                <Image
                  src={logo}
                  alt="Mulya Bazzar"
                  className="h-12 w-auto"
                  width={200}
                  height={200}
                  priority
                />
              </div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Your trusted marketplace for quality products and great deals. Discover amazing products at competitive prices.
            </p>
            
            <div className="flex items-center space-x-4 pt-2">
              {socialLinks.map((link) => (
                <SocialLink
                  key={link.href}
                  href={link.href}
                  icon={link.icon}
                  label={`Visit our ${link.label} page`}
                />
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 border-b border-gray-200 pb-2">
              Contact Us
            </h3>
            <div className="space-y-3">
              <ContactItem icon={MapPin}>
                Panipokhari, Kathmandu<br />
                Bagmati, Nepal
              </ContactItem>
              <ContactItem icon={Phone}>
                <a href="tel:+9779767474645" className="hover:text-orange-600 transition-colors">
                  +977-9767474645
                </a>
              </ContactItem>
              <ContactItem icon={Mail}>
                <a href="mailto:mulyabazzar@gmail.com" className="hover:text-orange-600 transition-colors">
                  mulyabazzar@gmail.com
                </a>
              </ContactItem>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 border-b border-gray-200 pb-2">
              Download Our App
            </h3>
            <div className="space-y-3">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                  className="h-14 w-auto"
                />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="Download on the App Store"
                  className="h-14 w-auto"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-200 pt-8">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p className="text-sm text-gray-500">
              &copy; {currentYear} Mulya Bazzar. All rights reserved.
            </p>
            <div className="mt-4 flex space-x-6 md:mt-0">
              <Link href="/privacy" className="text-sm text-gray-500 hover:text-orange-600 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-gray-500 hover:text-orange-600 transition-colors">
                Terms of Service
              </Link>
              <Link href="/contact" className="text-sm text-gray-500 hover:text-orange-600 transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
