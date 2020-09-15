import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import '../styles.scss';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="title"
          content="Sua empresa com um aplicativo exclusivo de Delivery"
        />
        <meta name="author" content="http://wule.com.br/" />
        <meta name="robots" content="all" />
        <meta name="geo.region" content="BR-SP" />
        <meta name="geo.position" content="geoLatitude;geoLongitude" />
        <meta name="ICBM" content="geoLatitude, geoLongitude" />
        <meta name="language" content="pt-br" />
        <meta
          name="copyright"
          content="Carpede - Aplicativos exclusivos para o delivery de seu negócio."
        />
        <meta name="distribution" content="global" />
        <meta name="audience" content="all" />
        <meta name="url" content="https://www.carpede.com/" />
        <meta name="classNameification" content="applications" />
        <meta name="category" content="applications" />
        <meta name="rating" content="general" />
        <meta name="fone" content="tel" />
        <meta name="city" content="Distrito Federal, Brasília" />
        <meta name="country" content="Brasil" />
        <meta property="publisher" content="Wule Agência Digital" />
        <meta name="googlebot" content="all" />
        <meta name="geo.placename" content="Brasil" />
        <meta name="geo.region" content="Distrito Federal, Brasília" />
        <meta name="name" content="Carpede" />
        <meta name="twitter:site" content="https://www.carpede.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Carpede" />
        <meta property="og:author" content="Carpede" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:region" content="Brasil" />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="og:image:width" content="250" />
        <meta property="og:image:height" content="250" />
        <link rel="icon" href="source/images/favicon.png" type="image/x-icon" />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="source/images/favicon.png"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
