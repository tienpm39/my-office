import '../styles/tailwind.scss';
import '@glidejs/glide/dist/css/glide.core.min.css';
import Layout from '../container/Layout/Layout';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script src="/assets/js/typewriter.js"></script>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
