import '../styles/globals.css';

import Footer from '../components/Footer';
import StickyHeader from '../components/StickyHeader';

export default function App({ Component, pageProps }) {
  return (
    <>
      <StickyHeader />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

