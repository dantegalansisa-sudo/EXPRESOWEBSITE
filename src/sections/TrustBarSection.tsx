import { motion } from 'framer-motion';

const items = [
  { icon: '🏪', text: '4 Sucursales' },
  { icon: '💰', text: '#VendeMejor' },
  { icon: '🏆', text: 'La #1 en Azua' },
  { icon: '🔌', text: 'Electromuebles & Más' },
];

export default function TrustBarSection() {
  return (
    <section className="trustbar">
      <div className="trustbar__inner">
        {items.map((item, i) => (
          <motion.div key={item.text} className="trustbar__item" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
            <span className="trustbar__icon">{item.icon}</span>
            <span className="trustbar__text">{item.text}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
