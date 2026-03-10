import { motion, useScroll, useTransform } from 'framer-motion';
import RevealText from '../components/RevealText';
import MagneticButton from '../components/MagneticButton';
import { EASINGS } from '../utils/easings';

export default function HeroSection() {
  const { scrollYProgress } = useScroll();
  const heroImgY = useTransform(scrollYProgress, [0, 0.4], [0, 80]);
  const heroImgScale = useTransform(scrollYProgress, [0, 0.4], [1, 1.06]);

  return (
    <section className="hero">
      <div className="hero__bg" />
      <div className="hero__deco">
        <motion.div className="hero__deco-circle hero__deco-circle--1" animate={{ y: [0, -20, 0], x: [0, 10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} />
        <motion.div className="hero__deco-circle hero__deco-circle--2" animate={{ y: [0, 15, 0], x: [0, -8, 0] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }} />
      </div>

      <div className="hero__content">
        <motion.span className="hero__eyebrow" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1, ease: EASINGS.premium }}>
          ✦ Electrodomésticos &amp; Muebles · Azua, RD
        </motion.span>

        <RevealText tag="h1" className="hero__title" delay={0.2} immediate>
          Todo Para Tu Hogar Al Mejor Precio.
        </RevealText>

        <motion.p className="hero__subtitle" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7, ease: EASINGS.smooth }}>
          <em>Tu comercial de confianza en Azua.</em>
          <br />
          Electrodomésticos, muebles y más. Sucursales en Las Charcas y Estebanía.
        </motion.p>

        <motion.div className="hero__actions" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.9, ease: EASINGS.smooth }}>
          <MagneticButton href="https://wa.me/18095213546" className="btn-primary">
            Ver Productos →
          </MagneticButton>
          <MagneticButton href="#categorias" className="btn-ghost">
            Categorías
          </MagneticButton>
        </motion.div>

        <motion.div className="hero__delivery-badge" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 1.2 }}>
          <motion.div className="hero__delivery-badge-inner" animate={{ scale: [1, 1.04, 1] }} transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}>
            <span className="hero__delivery-icon">🏪</span>
            <div className="hero__delivery-text">
              <strong>3 Sucursales en Azua</strong>
              <span>Las Charcas · Estebanía · Centro</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div className="hero__product-image" style={{ y: heroImgY, scale: heroImgScale }}>
        <motion.img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&q=85"
          alt="Electrodomésticos modernos"
          className="hero__img"
          initial={{ opacity: 0, x: 80, scale: 1.05 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: EASINGS.premium }}
        />
      </motion.div>

      <motion.div className="hero__floating-card" initial={{ opacity: 0, x: 60, y: 20 }} animate={{ opacity: 1, x: 0, y: 0 }} transition={{ delay: 1.4, duration: 0.8, ease: EASINGS.premium }}>
        <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}>
          <div className="fcard__tag">Lo Más Buscado</div>
          <div className="fcard__name">Nevera Inverter</div>
          <div className="fcard__price">Precio Especial</div>
          <div className="fcard__colors">
            <span className="fcolor fcolor--silver" />
            <span className="fcolor fcolor--white" />
            <span className="fcolor fcolor--black" />
          </div>
          <div className="fcard__cta">Ver Precio →</div>
        </motion.div>
      </motion.div>

      <motion.div className="hero__scroll-indicator" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}>
        <motion.div className="hero__scroll-line" animate={{ scaleY: [0, 1, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }} />
      </motion.div>
    </section>
  );
}
