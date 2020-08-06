import React, { useState } from 'react';
import Link from 'next/link';
import { MdAccountCircle } from 'react-icons/md';

import { TextInput } from '../../components/input';
import Header from '../../components/header';

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="app">
            <div className="fluid-container">
                <Header />
                <section className="container h100 centralized-items">
                    <form className="formSign">
                        <h3>Entre</h3>
                        <TextInput label="email" action={(e) => setPassword(e.target.value)} />
                        <TextInput label="senha" action={(e) => setEmail(e.target.value)} />
                        <button>Entrar</button>
                        <Link href="signup">
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

export default Signin;
