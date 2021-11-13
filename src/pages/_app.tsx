import { AppProps } from 'next/app';
import React from 'react';
import Head from 'next/head';


const MyApp =({Component, pageProps} : AppProps) : JSX.Element => {
  return(
    <>
    <Head>
    <title>NextJS Test-app</title>
    </Head>
    <Component {...pageProps} />
    </>
  );
};

export default MyApp;