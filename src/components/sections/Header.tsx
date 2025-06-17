"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 bg-surface-elevated backdrop-blur-md shadow-sm' : 'py-5'
      }`}
    >
      <div className="container max-w-6xl mx-auto px-3 sm:px-4 lg:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-display font-bold text-text-primary">
          elisaffetta
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#services" className="text-text-secondary hover:text-primary transition-colors">
            Услуги
          </Link>
          <Link href="#packages" className="text-text-secondary hover:text-primary transition-colors">
            Пакеты
          </Link>
          <Link href="#portfolio" className="text-text-secondary hover:text-primary transition-colors">
            Портфолио
          </Link>
          <Link href="#about" className="text-text-secondary hover:text-primary transition-colors">
            Обо мне
          </Link>
          <Button asChild>
            <Link href="#contact">Связаться</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-text-primary p-2" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-surface-elevated backdrop-blur-lg shadow-md py-4">
          <nav className="container max-w-6xl mx-auto px-3 sm:px-4 lg:px-6 flex flex-col space-y-4">
            <Link 
              href="#services" 
              className="text-text-secondary hover:text-primary transition-colors px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Услуги
            </Link>
            <Link 
              href="#packages" 
              className="text-text-secondary hover:text-primary transition-colors px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Пакеты
            </Link>
            <Link 
              href="#portfolio" 
              className="text-text-secondary hover:text-primary transition-colors px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Портфолио
            </Link>
            <Link 
              href="#about" 
              className="text-text-secondary hover:text-primary transition-colors px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Обо мне
            </Link>
            <div className="px-4 pt-2">
              <Button className="w-full" asChild>
                <Link href="#contact" onClick={() => setIsMenuOpen(false)}>Связаться</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
