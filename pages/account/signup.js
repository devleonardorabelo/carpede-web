import React, { useState } from 'react';
import { TextInput } from '../../components/input';
import { MdAccountCircle } from 'react-icons/md';
import Link from 'next/link';

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
                <section className="container h100 centralized-items">
                    <form className="formSign">
                        <h3>Criar uma conta</h3>
                        <div className="row2">
                            <TextInput
                                label="Nome da Loja"
                                action={(e) => setPassword(e.target.value)}
                            />
                            <TextInput label="Whatsapp" action={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="row2">
                            <TextInput label="E-mail" action={(e) => setEmail(e.target.value)} />
                            <TextInput label="Senha" action={(e) => setEmail(e.target.value)} />
                        </div>

                        <button>Entrar</button>
                        <Link href="signin">
                            <div className="linkButton">
                                <MdAccountCircle className="icon" /> Quero criar um conta
                            </div>
                        </Link>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default Signup;
