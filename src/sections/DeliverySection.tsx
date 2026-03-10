import { motion } from 'framer-motion';
import RevealText from '../components/RevealText';
import MagneticButton from '../components/MagneticButton';
import { useParallax } from '../hooks/useParallax';

const sucursales = [
  '✓ Azua Centro — C/ Emilio Prud Homme',
  '✓ Las Charcas',
  '✓ Estebanía',
  '✓ Atención en toda la zona Sur',
];

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } } };
const itemVariants = { hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] } } };

export default function DeliverySection() {
  const { ref, y } = useParallax(50);

  return (
    <section className="delivery">
      <div className="section-container">
        <div className="delivery__grid">
          <div className="delivery__image-side">
            <div ref={ref} className="delivery__image-wrap">
              <motion.img src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=700&q=80" alt="Sucursal Comercial El Expreso" className="delivery__image" style={{ y }} loading="lazy" />
            </div>
            <motion.div className="delivery__badge" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.4, type: 'spring', stiffness: 200 }}>
              <span className="delivery__badge-icon">📍</span>
              <span className="delivery__badge-text">Sucursales en<br /><strong>Azua, Las Charcas y Estebanía</strong></span>
            </motion.div>
          </div>

          <div className="delivery__content">
            <span className="section-eyebrow">✦ Nuestras Sucursales</span>
            <RevealText tag="h2" className="section-title">
              Siempre Cerca De Ti
            </RevealText>
            <p className="section-subtitle">
              Con 3 sucursales estratégicamente ubicadas, siempre tendrás
              un Comercial El Expreso cerca para equipar tu hogar.
            </p>
            <motion.ul className="delivery__list" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
              {sucursales.map((item) => (
                <motion.li key={item} className="delivery__list-item" variants={itemVariants}>{item}</motion.li>
              ))}
            </motion.ul>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.6 }}>
              <MagneticButton href="https://wa.me/18095213546?text=Quiero%20saber%20la%20ubicaci%C3%B3n%20de%20sus%20sucursales" className="btn-primary">
                Cómo Llegar →
              </MagneticButton>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
