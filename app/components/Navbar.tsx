"use client";

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { cva } from 'class-variance-authority';
import logo from '../public/logo.png';

const navigationItems = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Features', href: '#features' },
  { name: 'Contact Us', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => document.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const buttonVariants = cva(
    'inline-flex items-center justify-center rounded-md font-semibold transition-colors',
    {
      variants: {
        variant: {
          default: 'bg-orange-600 text-white hover:bg-orange-700',
          outline: 'border border-gray-300 bg-transparent hover:bg-gray-50',
          ghost: 'hover:bg-gray-100',
        },
        size: {
          default: 'px-5 py-2.5 text-base',
          sm: 'px-4 py-2 text-base',
          lg: 'px-7 py-3.5 text-lg',
        },
      },
      defaultVariants: {
        variant: 'default',
        size: 'default',
      },
    }
  );

  return (
    <header 
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300 h-20',
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white',
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center" onClick={() => window.scrollTo(0, 0)}>
              <Image 
                src={logo} 
                alt="Mulya Bazzar" 
                className="h-16 w-auto"
                width={120}
                height={40}
                priority
              />
            </Link>
          </div>

          <NavigationMenu.Root className="hidden md:block">
            <NavigationMenu.List className="flex items-center space-x-8">
              {navigationItems.map((item) => (
                <NavigationMenu.Item key={item.name}>
                  <NavigationMenu.Link
                    href={item.href}
                    className={cn(
                      'text-base font-semibold text-gray-700',
                      'hover:text-orange-600',
                      'transition-colors duration-200',
                      'relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0',
                      'after:bg-orange-600 after:transition-all after:duration-300',
                      'hover:after:w-full'
                    )}
                  >
                    {item.name}
                  </NavigationMenu.Link>
                </NavigationMenu.Item>
              ))}
            </NavigationMenu.List>
          </NavigationMenu.Root>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                'inline-flex items-center justify-center p-2 rounded-md',
                'text-gray-700 hover:bg-gray-100 hover:text-gray-900',
                'focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500',
                'transition-colors duration-200'
              )}
              aria-expanded={isOpen}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

          <div className="hidden md:block">
            <Link
              href="https://appmulyabazzar.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ size: 'default' })}
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>

      <div
        className={cn(
          'md:hidden bg-white border-t border-gray-200 overflow-hidden transition-all duration-300 ease-in-out',
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <nav className="px-4 pt-4 pb-6 space-y-4">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                'block py-2 px-3 rounded-md text-lg font-semibold',
                'text-gray-700 hover:bg-gray-50 hover:text-orange-600',
                'transition-colors duration-200'
              )}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="https://appmulyabazzar.com/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className={cn(
              buttonVariants({ variant: 'default', size: 'default' }),
              'w-full text-center mt-4'
            )}
          >
            Shop Now
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
