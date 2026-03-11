import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import MagneticButton from './MagneticButton';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Inicio', href: '#' },
    { label: 'Categorías', href: '#categorias' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="navbar__inner">
        <a href="#" className="navbar__logo">
          <img
            src="/images/rafa-electrofacil.png"
            alt="Rafa Electro Facil"
            className="navbar__logo-photo"
          />
          <div className="navbar__logo-text-wrap">
            <span className="navbar__logo-name">
              <span className="navbar__logo-el">Rafa</span> Electro Facil
            </span>
            <span className="navbar__logo-sub">#VENDEMEJOR</span>
          </div>
        </a>

        <div className="navbar__links">
          {links.map((link) => (
            <a key={link.label} href={link.href} className="navbar__link">
              {link.label}
            </a>
          ))}
        </div>

        <div className="navbar__actions">
          <MagneticButton href="https://wa.me/18097024596" className="btn-primary navbar__cta">
            Cotizar Ahora
          </MagneticButton>
        </div>

        <button
          className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          <span /><span /><span />
        </button>
      </div>

      {menuOpen && (
        <motion.div
          className="navbar__mobile-menu"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {links.map((link) => (
            <a key={link.label} href={link.href} className="navbar__mobile-link" onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="https://wa.me/18097024596" target="_blank" rel="noopener noreferrer" className="btn-primary navbar__mobile-cta" onClick={() => setMenuOpen(false)}>
            Cotizar Ahora
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}
