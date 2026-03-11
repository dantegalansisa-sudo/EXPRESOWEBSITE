import { useState } from 'react';
import { motion } from 'framer-motion';
import RevealText from '../components/RevealText';
import MagneticButton from '../components/MagneticButton';

export default function ContactSection() {
  const [form, setForm] = useState({ nombre: '', telefono: '', producto: '', mensaje: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hola Rafa Electro Facil! Soy ${form.nombre}. Tel: ${form.telefono}. Me interesa: ${form.producto}. ${form.mensaje}`;
    window.open(`https://wa.me/18097024596?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section className="contact" id="contacto">
      <div className="section-container">
        <div className="contact__grid">
          <div className="contact__info">
            <span className="section-eyebrow">✦ Contáctanos</span>
            <RevealText tag="h2" className="section-title">
              Visítanos O Escríbenos
            </RevealText>
            <p className="section-subtitle">Estamos listos para ayudarte a equipar tu hogar.</p>

            <div className="contact__details">
              <motion.div className="contact__detail" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                <span className="contact__detail-icon">📍</span>
                <div><strong>Dirección</strong><p>C/ Emilio Prud Homme, Azua, Dominican Republic</p></div>
              </motion.div>
              <motion.div className="contact__detail" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                <span className="contact__detail-icon">📞</span>
                <div><strong>Teléfonos</strong><p>(809) 521-3633 · (809) 524-5008</p></div>
              </motion.div>
              <motion.div className="contact__detail" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
                <span className="contact__detail-icon">🏪</span>
                <div><strong>Sucursales</strong><p>Azua · Barahona · San Juan · Padre las Casas</p></div>
              </motion.div>
              <motion.div className="contact__detail" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
                <span className="contact__detail-icon">📸</span>
                <div><strong>Instagram</strong><p>@rafaelectrofacil</p></div>
              </motion.div>
            </div>
          </div>

          <motion.form className="contact__form" onSubmit={handleSubmit} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] }}>
            <h3 className="contact__form-title">Envíanos un mensaje</h3>
            <div className="contact__field"><label htmlFor="nombre">Nombre</label><input type="text" id="nombre" name="nombre" value={form.nombre} onChange={handleChange} placeholder="Tu nombre completo" required /></div>
            <div className="contact__field"><label htmlFor="telefono">Teléfono</label><input type="tel" id="telefono" name="telefono" value={form.telefono} onChange={handleChange} placeholder="(809) 000-0000" required /></div>
            <div className="contact__field"><label htmlFor="producto">Producto de interés</label>
              <select id="producto" name="producto" value={form.producto} onChange={handleChange} required>
                <option value="">Selecciona una categoría</option>
                <option value="Neveras & Freezers">Neveras & Freezers</option>
                <option value="Lavadoras & Secadoras">Lavadoras & Secadoras</option>
                <option value="Aires Acondicionados">Aires Acondicionados</option>
                <option value="Televisores & Audio">Televisores & Audio</option>
                <option value="Muebles del Hogar">Muebles del Hogar</option>
                <option value="Estufas & Cocina">Estufas & Cocina</option>
                <option value="Otro">Otro</option>
              </select>
            </div>
            <div className="contact__field"><label htmlFor="mensaje">Mensaje</label><textarea id="mensaje" name="mensaje" value={form.mensaje} onChange={handleChange} placeholder="Cuéntanos qué necesitas..." rows={4} /></div>
            <MagneticButton className="btn-primary contact__submit">Enviar por WhatsApp →</MagneticButton>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
