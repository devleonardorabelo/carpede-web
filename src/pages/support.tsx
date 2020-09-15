import React, { useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { TextInput, TextArea } from '../components/Input';

const Support: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');
  const [sent, setSent] = useState(false);

  const handleSendSupport = async () => {
    if (name.length > 3 && email.length > 10 && text.length > 10) {
      const { data } = await axios.post('https://main.carpede.com/support', {
        name,
        email,
        text,
      });
      if (data) setSent(true);
    }
  };

  return (
    <div className="app">
      <div className="fluid-container">
        <Header />
        <section className="container">
          <div className="content">
            <h3 className="no-margin">SUPORTE</h3>
            <p>
              Você tem alguma dúvida ou está com algum problema? Envie uma
              mensagem pra gente e em pouco tempo a gente vai te atender!
            </p>
            <div className="supportForm">
              <TextInput
                name="name"
                label="nome"
                action={(e) => setName(e.target.value)}
              />
              <TextInput
                name="email"
                label="email"
                action={(e) => setEmail(e.target.value)}
              />
              <TextArea
                name="description"
                label="descreva seu problema ou dúvida"
                action={(e) => setText(e.target.value)}
              />
              <div>
                <button
                  type="button"
                  className="button"
                  onClick={handleSendSupport}
                >
                  {sent ? 'Responderemos em Breve' : 'Enviar'}
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Support;
