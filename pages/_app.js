import Layout from "../components/Layout";
import Head from "next/head";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>BUSDX</title>
        <meta property="og:title" content="BUSDX" key="og_title" />
        <meta name="twitter:title" content="BUSDX" key="twitter_title" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="BUSDX is the native token of our product ecosystem. Users are required to hold, stake or pay with the BUSDX token to access our products. Our mission is to revolutionize the future of fintech through DeFi by providing an end to end financial platform within a community ecosystem." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.busdx.com/" />
        <meta property="og:description" content="BUSDX is the native token of our product ecosystem. Users are required to hold, stake or pay with the BUSDX token to access our products. Our mission is to revolutionize the future of fintech through DeFi by providing an end to end financial platform within a community ecosystem." />
        <meta property="og:image" content="/images/social.jpg" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.busdx.com/" />
        <meta property="twitter:description" content="BUSDX is the native token of our product ecosystem. Users are required to hold, stake or pay with the BUSDX token to access our products. Our mission is to revolutionize the future of fintech through DeFi by providing an end to end financial platform within a community ecosystem." />
        <meta property="twitter:image" content="/images/social.jpg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
        <link rel="manifest" href="/images/site.webmanifest" />
        <link rel="mask-icon" href="/images/safari-pinned-tab.svg" color="#E14D81" />
        <meta name="msapplication-TileColor" content="#E14D81" />
        <meta name="theme-color" content="#E14D81" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap" rel="stylesheet" /> 
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
