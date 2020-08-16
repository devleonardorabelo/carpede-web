/* eslint-disable react/prop-types */
import React from 'react';
import { AuthProvider } from '../contexts/auth';
import { AppProvider } from '../contexts/app';
import '../styles.scss';

const MyApp = ({ Component, pageProps }) => {
  return (
    <AuthProvider>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </AuthProvider>
  );
};

export default MyApp;
