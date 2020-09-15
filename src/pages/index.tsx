import React, { useState } from 'react';
import Head from 'next/head';
import axios from 'axios';

import Header from '../components/Header';
import Footer from '../components/Footer';
import SchemaScript from '../components/Schema';

const Home: React.FC = () => {
  const [sent, setSent] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = async () => {
    if (email.length > 11) {
      const { data } = await axios.post('https://main.carpede.com/subscribe', {
        email,
      });
      if (data) {
        setSent(true);
      }
    }
  };

  return (
    <div className="app">
      <Head>
        <title>Seu App exclusivo de Delivery | Carpede</title>
        <meta
          name="description"
          content="Seu aplicativo exclusivo de Delivery, sem comissões por pedido, sem concorrência e a melhor experiência em entregas com atualizações em tempo real."
        />
        <meta
          name="keywords"
          content="aplicativo delivery, app delivery, aplicativo personalizado delivery, aplicativo de entregas, aplicativo, app, negócio, entregas, aplicativo para meu negócio, aplicativo para negócios"
        />
        <meta
          name="Page-Topic"
          content="Seu App exclusivo de Delivery | Carpede"
        />
        <link rel="canonical" href="https://www.carpede.com/" />
        <meta name="image" content="https://www.carpede.com/images/card.jpg" />
        <meta
          name="twitter:card"
          content="https://www.carpede.com/images/card.jpg"
        />
        <meta name="twitter:url" content="https://www.carpede.com/" />
        <meta
          name="twitter:title"
          content="Seu App exclusivo de Delivery | Carpede"
        />
        <meta
          name="twitter:description"
          content="Seu aplicativo exclusivo de Delivery, sem comissões por pedido, sem concorrência e a melhor experiência em entregas com atualizações em tempo real."
        />
        <meta
          name="twitter:image"
          content="https://www.carpede.com/images/card.jpg"
        />
        <meta
          property="og:title"
          content="Seu App exclusivo de Delivery | Carpede"
        />
        <meta property="og:url" content="https://www.carpede.com/" />
        <meta
          property="og:image"
          content="https://www.carpede.com/images/card.jpg"
        />
        <meta
          property="og:description"
          content="Seu aplicativo exclusivo de Delivery, sem comissões por pedido, sem concorrência e a melhor experiência em entregas com atualizações em tempo real."
        />
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
              <button
                type="submit"
                className="button"
                onClick={handleSubscribe}
              >
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
              Torne o seu Negócio em um grange negócio, com um aplicativo
              próprio, moderno e batante intuitivo.
            </p>
          </div>
        </div>
        <div className="reason2">
          <div className="why why2">
            <h4>SUA LOJA ORGANIZADA</h4>
            <p>
              Tenha controle sobre seus produtos, e promoções e torne o processo
              de pedido muito mais simples.
            </p>
          </div>
        </div>
      </section>

      <section className="container benefits">
        <div className="mobileImage">
          <img
            alt="Aplicativo Delivery Exclusivo"
            title="Aplicativo Delivery Exclusivo"
            src="/images/device-mobile.png"
          />
        </div>
        <article className="benefitsArticle">
          <h2>QUAIS VANTAGENS TEREI AO CONTRATAR ?</h2>
          <p className="item">Nenhuma taxa por venda feita</p>
          <p className="item">Sem tempo mínimo de adesão</p>
          <p className="item">Sem burocracia ou multa por cancelamento</p>
          <p className="item">Suporte personalizado</p>
          <img
            alt="Preço"
            title="Preço"
            className="pricing"
            src="/images/pricing.svg"
          />
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
      <SchemaScript
        title="Seu App exclusivo de Delivery | Carpede"
        description="Seu aplicativo exclusivo de Delivery, sem comissões por pedido, sem concorrência e a melhor experiência em entregas com atualizações em tempo real."
        url="https://www.carpede.com/"
        criacao="2020/08/06"
        keywords="aplicativo delivery, app delivery, aplicativo personalizado delivery, aplicativo de entregas, aplicativo, app, negócio, entregas, aplicativo para meu negócio, aplicativo para negócios"
      />
    </div>
  );
};

export default Home;
