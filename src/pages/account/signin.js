import React, { useState, useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { MdAccountCircle } from 'react-icons/md';
import AuthContext from '../../contexts/auth';
import api from '../../services/api';

import { TextInput } from '../../components/input';
import Header from '../../components/header';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alert, setAlert] = useState();
  const [status, setStatus] = useState();

  const { signIn } = useContext(AuthContext);
  const router = useRouter();

  async function handleSignin() {
    setStatus('loading');

    const { data } = await api.post('signin', { email, password });

    if (data.error) {
      setStatus();
      setAlert(data.error);
      return;
    }

    await signIn({
      avatar: data.avatar,
      name: data.name,
      whatsapp: data.whatsapp,
      email: data.email,
      token: data.token,
      store_id: data._id
    });

    setStatus('done');

    router.push('/app');
  }

  return (
    <div className="app">
      <div className="fluid-container">
        <Header />
        <section className="container h100 centralized-items">
          <div className="formSign">
            <h3>Entre</h3>
            <TextInput
              label="email"
              name="email"
              error={alert}
              action={(e) => setEmail(e.target.value.toLowerCase())}
            />
            <TextInput
              label="senha"
              name="password"
              error={alert}
              action={(e) => setPassword(e.target.value)}
              type="password"
            />
            <button onClick={handleSignin}>Entrar</button>
            <Link href="signup">
              <div className="linkButton">
                <MdAccountCircle className="icon" /> Quero criar um conta
              </div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Signin;
