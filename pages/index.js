import React, { useState } from 'react';
import Head from 'next/head';
import axios from 'axios';
import Header from '../components/header';
import Footer from '../components/footer';

const Home = () => {
    const [sent, setSent] = useState(false);
    const [email, setEmail] = useState('');

    const handleSubscribe = async () => {
        if (email.length > 11) {
            const { data } = await axios.post('https://main.carpede.com/subscribe', { email });
            if (data) {
                setSent(true);
            }
        }
    };

    return (
        <div className="app">
            <Head>
                <meta charset="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, maximum-scale=1"
                />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <title> | Carpede</title>
                <meta name="title" content="title" />
                <meta name="author" content="author" />
                <meta name="description" content="description" />
                <meta name="keywords" content="keywords" />
                <meta name="robots" content="all" />

                <meta name="geo.region" content="BR-SP" />
                <meta name="geo.position" content="geoLatitude;geoLongitude" />
                <meta name="ICBM" content="geoLatitude, geoLongitude" />

                <meta name="language" content="pt-br" />
                <meta name="copyright" content="nomeEmpresa." />
                <meta name="distribution" content="global" />
                <meta name="audience" content="all" />
                <meta name="url" content="canonical" />
                <meta name="classNameification" content="ramo" />
                <meta name="category" content="ramo" />
                <meta name="Page-Topic" content="title - nomeEmpresa" />
                <meta name="rating" content="general" />
                <meta name="fone" content="tel" />
                <meta name="city" content="cidade" />
                <meta name="country" content="Brasil" />
                <meta property="publisher" content="creditos" />

                <link rel="canonical" href="canonical" />
                <meta name="googlebot" content="all" />
                <meta name="geo.placename" content="Brasil" />
                <meta name="geo.region" content="cidade" />
                <meta name="name" content="nomeEmpresa" />
                <meta name="image" content="url.$card" />

                <meta name="twitter:card" content="url.$card" />
                <meta name="twitter:url" content="canonical" />
                <meta name="twitter:site" content="canonical" />
                <meta name="twitter:title" content="title - nomeEmpresa" />
                <meta name="twitter:description" content="description" />
                <meta name="twitter:image" content="url.$card" />

                <meta property="og:title" content="title - nomeEmpresa" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="canonical" />
                <meta property="og:site_name" content="nomeEmpresa" />
                <meta property="og:author" content="nomeEmpresa" />
                <meta property="og:locale" content="pt_BR" />
                <meta property="og:region" content="Brasil" />
                <meta property="og:image" content="card" />
                <meta property="og:image:type" content="image/jpg" />
                <meta property="og:image:width" content="250" />
                <meta property="og:image:height" content="250" />
                <meta property="og:description" content="description" />

                <link rel="icon" href="source/images/favicon.png" type="image/x-icon" />
                <link rel="shortcut icon" type="image/x-icon" href="source/images/favicon.png" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div className="fluid-container start">
                <Header />
                <section className="container exclusive">
                    <div>
                        <h1>Tenha um aplicativo Exclusivo para o Seu Negócio!</h1>
                        <div className="subscribe">
                            <input
                                type="text"
                                placeholder="DIGITE AQUI SEU MELHOR EMAIL"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <button onClick={handleSubscribe}>
                                {sent ? 'Entraremos em contato' : 'Quero saber mais'}
                            </button>
                        </div>
                    </div>
                </section>
            </div>

            <section className="reasons">
                <div className="reason1">
                    <div className="why">
                        <h4>O SEU CLIENTE BEM ATENDIDO</h4>
                        <p>
                            Torne o seu Negócio em um grange negócio, com um aplicativo próprio,
                            moderno e batante intuitivo.
                        </p>
                    </div>
                </div>
                <div className="reason2">
                    <div className="why why2">
                        <h4>SUA LOJA ORGANIZADA</h4>
                        <p>
                            Tenha controle sobre seus produtos, e promoções e torne o processo de
                            pedido muito mais simples.
                        </p>
                    </div>
                </div>
            </section>

            <section className="container benefits">
                <div className="mobileImage">
                    <img alt="" src="/images/device-mobile.png" />
                </div>
                <article className="benefitsArticle">
                    <h2>QUAIS VANTAGENS TEREI AO CONTRATAR ?</h2>
                    <p className="item">Nenhuma taxa por venda feita</p>
                    <p className="item">Sem tempo mínimo de adesão</p>
                    <p className="item">Sem burocracia ou multa por cancelamento</p>
                    <p className="item">Suporte personalizado</p>
                    <img alt="" className="pricing" src="/images/pricing.svg" />
                </article>
            </section>

            <div className="fluid-container about">
                <div>
                    <h3>MELHOR ATENDIMENTO AO CLIENTE</h3>
                </div>
                <div>
                    <h3>NENHUMA TAXA</h3>
                </div>
                <div>
                    <h3>SEM concorrência</h3>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Home;
