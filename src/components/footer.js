/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
export default function Footer() {
    return (
        <section className="fluid-container footer">
            <footer className="container">
                <div className="logo">
                    <Link href="/">
                        <a className="logo" href="">
                            <img
                                src="/images/logo-carpede-white.png"
                                alt="Carpede"
                                title="Carpede"
                            />
                        </a>
                    </Link>
                </div>
                <nav className="navFooter">
                    <h5>MAPA DO SITE</h5>
                    <Link href="/">
                        <a>INÍCIO</a>
                    </Link>
                    <Link href="/support">
                        <a>SUPORTE</a>
                    </Link>
                    <Link href="/terms">
                        <a>TERMOS</a>
                    </Link>
                </nav>
                <div className="media">
                    <h5>REDES SOCIAIS</h5>
                    <a
                        href="https://www.instagram.com/carpededelivery"
                        target="_blank"
                        rel="noreferrer"
                        className="instagram">
                        Instagram
                    </a>
                    <a className="facebook">Facebook</a>
                </div>
                <div className="rights">
                    <p>Todos os direitos reservados - Carpede 2020</p>
                </div>
            </footer>
        </section>
    );
}
