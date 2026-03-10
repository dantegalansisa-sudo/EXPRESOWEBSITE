import { motion } from 'framer-motion';
import RevealText from '../components/RevealText';

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } } };
const cardVariants = {
  hidden: { opacity: 0, y: 48, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.65, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] } },
};

const categories = [
  { icon: '❄️', title: 'Neveras & Freezers', desc: 'Inverter, dos puertas, dispensador', image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=500&q=80' },
  { icon: '🌀', title: 'Lavadoras & Secadoras', desc: 'Automáticas, semi-automáticas', image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=500&q=80' },
  { icon: '❄️', title: 'Aires Acondicionados', desc: 'Split, inverter, portátiles', image: 'https://images.unsplash.com/photo-1631545806609-35dea4645144?w=500&q=80' },
  { icon: '📺', title: 'Televisores & Audio', desc: 'Smart TV, barras de sonido, bocinas', image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500&q=80' },
  { icon: '🛋️', title: 'Muebles del Hogar', desc: 'Salas, comedores, cuartos completos', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&q=80' },
  { icon: '🍳', title: 'Estufas & Cocina', desc: 'Estufas a gas, eléctricas, microondas', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&q=80' },
];

export default function CategoriesSection() {
  return (
    <section className="categories" id="categorias">
      <div className="section-container">
        <span className="section-eyebrow">✦ Nuestras Categorías</span>
        <RevealText tag="h2" className="section-title">
          Todo Lo Que Tu Hogar Necesita
        </RevealText>
        <p className="section-subtitle">
          Desde electrodomésticos de última tecnología hasta muebles para cada espacio.
          Calidad garantizada a precios que te sorprenderán.
        </p>
        <motion.div className="categories__grid" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }}>
          {categories.map((cat) => (
            <motion.div key={cat.title} className="category-card" variants={cardVariants} whileHover={{ y: -8, transition: { duration: 0.25 } }}>
              <img src={cat.image} alt={cat.title} className="category-card__img" loading="lazy" />
              <div className="category-card__overlay">
                <span className="category-card__icon">{cat.icon}</span>
                <h3 className="category-card__title">{cat.title}</h3>
                <p className="category-card__desc">{cat.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
