/* eslint-disable react/prop-types */
import React from 'react';
import { AuthProvider } from '../contexts/auth';
import '../styles.scss';

const MyApp = ({ Component, pageProps }) => {
    return (
        <AuthProvider>
            <Component {...pageProps} />
        </AuthProvider>
    );
};

export default MyApp;
