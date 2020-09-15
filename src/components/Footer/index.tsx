import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <section className="fluid-container footer">
      <footer className="container">
        <div className="logo">
          <Link href="/">
            <img
              src="/images/logo-carpede-white.png"
              alt="Carpede"
              title="Carpede"
            />
          </Link>
        </div>
        <nav className="navFooter">
          <h5>MAPA DO SITE</h5>
          <Link href="/">
            <span>INÍCIO</span>
          </Link>
          <Link href="/support">
            <span>SUPORTE</span>
          </Link>
          <Link href="/terms">
            <span>TERMOS</span>
          </Link>
        </nav>
        <div className="media">
          <h5>REDES SOCIAIS</h5>
          <a
            href="https://www.instagram.com/carpededelivery"
            target="_blank"
            rel="noreferrer"
            className="instagram"
          >
            Instagram
          </a>
        </div>
        <div className="rights">
          <p>Todos os direitos reservados - Carpede 2020</p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
