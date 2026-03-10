import { motion } from 'framer-motion';
import RevealText from '../components/RevealText';

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } } };
const itemVariants = { hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] } } };

const features = [
  { icon: '💰', title: 'Precios Imbatibles', desc: 'Los mejores precios de Azua en electrodomésticos y muebles.' },
  { icon: '🏪', title: '3 Sucursales', desc: 'Azua centro, Las Charcas y Estebanía para servirte mejor.' },
  { icon: '✅', title: 'Marcas de Confianza', desc: 'Trabajamos con las mejores marcas del mercado.' },
  { icon: '🤝', title: 'Atención Personalizada', desc: 'Te asesoramos para que elijas lo mejor para tu hogar.' },
];

export default function WhyUsSection() {
  return (
    <section className="whyus" id="nosotros">
      <div className="section-container">
        <div className="whyus__grid">
          <div className="whyus__image-side">
            <motion.div className="whyus__image-wrap" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] }}>
              <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=700&q=80" alt="Tienda de electrodomésticos" className="whyus__image" />
            </motion.div>
            <motion.div className="whyus__image-secondary" initial={{ opacity: 0, x: -30, y: 30 }} whileInView={{ opacity: 1, x: 0, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8, delay: 0.3, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] }}>
              <img src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&q=80" alt="Productos del hogar" className="whyus__image-small" />
            </motion.div>
            <motion.div className="whyus__badge" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5, type: 'spring', stiffness: 200 }}>
              <span className="whyus__badge-number">1918+</span>
              <span className="whyus__badge-label">Seguidores en Instagram</span>
            </motion.div>
            <div className="whyus__accent-bar" />
          </div>

          <div className="whyus__content">
            <span className="section-eyebrow whyus__eyebrow">✦ Por Qué Elegirnos</span>
            <RevealText tag="h2" className="section-title--dark">
              Tu Comercial De Confianza
            </RevealText>
            <p className="whyus__intro">
              Desde Azua para todo el Sur. Comercial El Expreso es sinónimo de
              calidad, variedad y los mejores precios en electrodomésticos y muebles.
            </p>
            <motion.div className="whyus__features" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
              {features.map((f) => (
                <motion.div key={f.title} className="whyus__feature" variants={itemVariants}>
                  <span className="whyus__feature-icon">{f.icon}</span>
                  <div>
                    <h4 className="whyus__feature-title">{f.title}</h4>
                    <p className="whyus__feature-desc">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
