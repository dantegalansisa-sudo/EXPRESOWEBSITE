import { motion } from 'framer-motion';
import RevealText from '../components/RevealText';

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } };
const cardVariants = { hidden: { opacity: 0, y: 48, scale: 0.96 }, visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.65, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] } } };

const testimonials = [
  { name: 'Laura Sánchez', location: 'Azua', text: 'Compré mi nevera inverter en El Expreso y quedé encantada. Los precios son los mejores de la zona y la atención es excelente.', rating: 5 },
  { name: 'Pedro García', location: 'Las Charcas', text: 'Excelente variedad de electrodomésticos. Me asesoraron muy bien para elegir mi aire acondicionado. Muy recomendado.', rating: 5 },
  { name: 'Carmen Díaz', location: 'Estebanía', text: 'Mi casa completa la equipé en El Expreso. Desde la estufa hasta los muebles del cuarto. Calidad y precio inmejorable.', rating: 5 },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="testimonial__stars">
      {Array.from({ length: count }, (_, i) => (<span key={i} className="testimonial__star">★</span>))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="testimonials">
      <div className="section-container">
        <span className="section-eyebrow">✦ Testimonios</span>
        <RevealText tag="h2" className="section-title">
          Lo Que Dicen Nuestros Clientes
        </RevealText>
        <p className="section-subtitle">Familias de toda la zona Sur confían en nosotros.</p>
        <motion.div className="testimonials__grid" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }}>
          {testimonials.map((t) => (
            <motion.div key={t.name} className="testimonial-card" variants={cardVariants} whileHover={{ y: -6, transition: { duration: 0.25 } }}>
              <Stars count={t.rating} />
              <p className="testimonial__text">"{t.text}"</p>
              <div className="testimonial__author">
                <div className="testimonial__avatar">{t.name.charAt(0)}</div>
                <div>
                  <div className="testimonial__name">{t.name}</div>
                  <div className="testimonial__location">{t.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
