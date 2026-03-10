export default function FooterSection() {
  return (
    <footer className="footer">
      <div className="section-container">
        <div className="footer__grid">
          <div className="footer__brand">
            <a href="#" className="footer__logo">
              <img
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=200&q=80"
                alt="Comercial El Expreso"
                className="footer__logo-photo"
              />
              <div className="footer__logo-text-wrap">
                <span className="footer__logo-name">
                  <span className="footer__logo-el">El</span> Expreso
                </span>
                <span className="footer__logo-sub">COMERCIAL</span>
              </div>
            </a>
            <p className="footer__desc">Tu comercial de confianza en Azua. Electrodomésticos, muebles y todo para tu hogar a los mejores precios.</p>
          </div>
          <div className="footer__col">
            <h4 className="footer__col-title">Navegación</h4>
            <a href="#" className="footer__link">Inicio</a>
            <a href="#categorias" className="footer__link">Categorías</a>
            <a href="#nosotros" className="footer__link">Nosotros</a>
            <a href="#contacto" className="footer__link">Contacto</a>
          </div>
          <div className="footer__col">
            <h4 className="footer__col-title">Categorías</h4>
            <a href="#categorias" className="footer__link">Neveras & Freezers</a>
            <a href="#categorias" className="footer__link">Lavadoras</a>
            <a href="#categorias" className="footer__link">Aires Acondicionados</a>
            <a href="#categorias" className="footer__link">Muebles del Hogar</a>
          </div>
          <div className="footer__col">
            <h4 className="footer__col-title">Contacto</h4>
            <p className="footer__info">📍 C/ Emilio Prud Homme, Azua</p>
            <p className="footer__info">📞 (809) 521-3546</p>
            <p className="footer__info">📞 (809) 521-9325</p>
            <p className="footer__info">📞 (809) 521-9783</p>
            <a href="https://www.instagram.com/comercialelexpreso" target="_blank" rel="noopener noreferrer" className="footer__link">📸 @comercialelexpreso</a>
          </div>
        </div>
        <div className="footer__bottom">
          <p>© 2025 Comercial El Expreso. Todos los derechos reservados.</p>
          <p className="footer__credit">Diseñado por <a href="https://nexixtech.com" target="_blank" rel="noopener noreferrer" className="footer__nexix">NEXIX Tech Studio</a></p>
        </div>
      </div>
    </footer>
  );
}
