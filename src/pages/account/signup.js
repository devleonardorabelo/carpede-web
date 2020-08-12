import React, { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { MdKeyboardArrowLeft } from 'react-icons/md';

import { format } from '@buttercup/react-formatted-input';
import { WhatsappFormat, HourFormat } from '../../utils/treatString';
import api from '../../services/api';
import AuthContext from '../../contexts/auth';

import { TextInput } from '../../components/input';
import Header from '../../components/header';

const Signup = () => {
  const { signIn } = useContext(AuthContext);
  const router = useRouter();

  const [image, setImage] = useState({});
  const [uploading, setUploading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState({});
  const [password, setPassword] = useState('');
  const [opening, setOpening] = useState({});
  const [closure, setClosure] = useState({});
  const [averageDeliveryTime, setAverageDeliveryTime] = useState('60');

  const [alert, setAlert] = useState();
  const [status, setStatus] = useState();

  const maskNumber = (phoneToFormat) => setWhatsapp(format(phoneToFormat, WhatsappFormat));

  const maskHour = (HourToFormat, to) => {
    if (to === 'opening') setOpening(format(HourToFormat, HourFormat));
    if (to === 'closure') setClosure(format(HourToFormat, HourFormat));
  };

  const checkHour = (hour, to) => {
    if (!hour || hour.length === 4) return;
    const arr = hour.split('');
    if (arr[0] > 2 || arr[0] + arr[1] > 23 || arr[2] > 5) {
      arr.pop();
      maskHour(arr.join(''), to);
    }
  };

  useEffect(() => {
    checkHour(opening.raw, 'opening');
    if (opening.formatted === '00:00') setOpening({ raw: '0001', formatted: '00:01' });
    checkHour(closure.raw, 'closure');
    if (closure.formatted === '00:00') setClosure({ raw: '2359', formatted: '23:59' });
  }, [opening, closure]);

  async function handleSignup(e) {
    e.preventDefault();
    setStatus('loading');

    const { data } = await api.post('signup', {
      avatar: image.uri,
      name,
      whatsapp: whatsapp.raw,
      email,
      password,
      operation: {
        opening: opening.formatted,
        closure: closure.formatted
      },
      averageDeliveryTime
    });

    if (data.error) {
      setStatus();
      setAlert(data.error);
      return;
    }

    await signIn({
      avatar: image.uri,
      name,
      whatsapp: whatsapp.raw,
      email,
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
          <form className="formSign content" onSubmit={handleSignup}>
            <h3>Criar uma conta</h3>
            <div className="signup">
              <div className="rowA1">
                <TextInput label="Nome da Loja" action={(e) => setName(e.target.value)} />
                <TextInput
                  label="Whatsapp"
                  value={whatsapp.formatted}
                  action={(e) => maskNumber(e.target.value, 'whatsapp')}
                />
              </div>
              <div className="rowA1">
                <TextInput label="E-mail" action={(e) => setEmail(e.target.value.toLowerCase())} />
                <TextInput label="Senha" action={(e) => setPassword(e.target.value)} />
              </div>
              <div className="row3">
                <TextInput
                  label="Abre ás"
                  value={opening.formatted}
                  action={(e) => maskHour(e.target.value, 'opening')}
                />
                <TextInput
                  label="Fecha ás"
                  value={closure.formatted}
                  action={(e) => maskHour(e.target.value, 'closure')}
                />
                <TextInput
                  label="Tempo de entrega"
                  action={(e) => setAverageDeliveryTime(e.target.value)}
                />
              </div>
            </div>

            <button className="button" type={handleSignup}>
              Criar agora
            </button>
            <Link href="signin">
              <div className="linkButton">
                <MdKeyboardArrowLeft className="icon" /> Já tenho uma Conta
              </div>
            </Link>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Signup;
