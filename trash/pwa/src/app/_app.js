import React from 'react';
import '../globals.css'; // Make sure to include global styles if needed

const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
