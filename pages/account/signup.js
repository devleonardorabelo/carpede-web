import React, { useState } from 'react';
import Link from 'next/link';
import { MdKeyboardArrowLeft } from 'react-icons/md';

import { TextInput } from '../../components/input';
import Header from '../../components/header';

const Signup = () => {
    const [image, setImage] = useState({});
    const [uploading, setUploading] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState({});
    const [password, setPassword] = useState('');
    const [opening, setOpening] = useState({});
    const [closure, setClosure] = useState({});
    const [averageDeliveryTime, setAverageDeliveryTime] = useState('60');
    const [deviceToken, setDeviceToken] = useState('');

    return (
        <div className="app">
            <div className="fluid-container">
                <Header />
                <section className="container h100 centralized-items">
                    <form className="formSign content">
                        <h3>Criar uma conta</h3>
                        <div className="signup">
                            <div className="rowA1">
                                <TextInput
                                    label="Nome da Loja"
                                    action={(e) => setPassword(e.target.value)}
                                />
                                <TextInput
                                    label="Whatsapp"
                                    action={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="rowA1">
                                <TextInput
                                    label="E-mail"
                                    action={(e) => setEmail(e.target.value)}
                                />
                                <TextInput label="Senha" action={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="row3">
                                <TextInput
                                    label="Abre ás"
                                    action={(e) => setEmail(e.target.value)}
                                />
                                <TextInput
                                    label="Fecha ás"
                                    action={(e) => setEmail(e.target.value)}
                                />
                                <TextInput
                                    label="Tempo de entrega"
                                    action={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>

                        <button>Entrar</button>
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
