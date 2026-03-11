export default function FooterSection() {
  return (
    <footer className="footer">
      <div className="section-container">
        <div className="footer__grid">
          <div className="footer__brand">
            <a href="#" className="footer__logo">
              <span className="footer__logo-name">
                <span className="footer__logo-accent">Rafa</span> Electro Facil
              </span>
              <span className="footer__logo-sub">#VENDEMEJOR</span>
            </a>
            <p className="footer__desc">Rafa Electro Facil — La tienda #1 en electromuebles. Vende Mejor. 4 sucursales en Azua, Barahona, San Juan y Padre las Casas.</p>
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
            <p className="footer__info">📞 (809) 521-3633</p>
            <p className="footer__info">📞 (809) 524-5008</p>
            <a href="https://www.instagram.com/rafaelectrofacil" target="_blank" rel="noopener noreferrer" className="footer__link">📸 @rafaelectrofacil</a>
          </div>
        </div>
        <div className="footer__bottom">
          <p>© 2025 Rafa Electro Facil. Todos los derechos reservados.</p>
          <p className="footer__credit">Diseñado por <a href="https://nexixtech.com" target="_blank" rel="noopener noreferrer" className="footer__nexix">NEXIX Tech Studio</a></p>
        </div>
      </div>
    </footer>
  );
}
