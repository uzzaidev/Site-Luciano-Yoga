'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/site.config';

interface HeaderProps {
  className?: string;
}

/**
 * Header apresenta o nome da marca, navegação principal e CTA.
 * Use o siteConfig para evitar dados hardcoded.
 * Menu hambúrguer responsivo para mobile.
 */
export function Header({ className = '' }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Prevenir scroll do body quando menu estiver aberto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    // Cleanup
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <header>
      <nav>
        <Link href="/" className="logo">
          Luciano <span>Giorgetta</span>
        </Link>

        <ul className="nav-links">
          {siteConfig.navigation.main.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Botão CTA Desktop */}
        <Link 
          href={siteConfig.hero.cta.primary.href} 
          className="btn btn-secondary btn-cta-desktop" 
          style={{ padding: '0.5rem 1.5rem', fontSize: '0.9rem' }}
        >
          {siteConfig.hero.cta.primary.text}
        </Link>

        {/* Botão Hambúrguer Mobile */}
        <button 
          className="hamburger-btn"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
        </button>
      </nav>

      {/* Overlay para fechar menu ao clicar fora */}
      {isMenuOpen && (
        <div 
          className="mobile-menu-overlay"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Menu Mobile */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-links">
          {siteConfig.navigation.main.map((link) => (
            <li key={link.href}>
              <Link href={link.href} onClick={closeMenu}>
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link 
              href={siteConfig.hero.cta.primary.href} 
              className="btn btn-primary mobile-cta"
              onClick={closeMenu}
            >
              {siteConfig.hero.cta.primary.text}
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
