import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <div>Homepage</div>
    </>
  );
};

export default Home;
