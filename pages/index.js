import Head from 'next/head';
import Hero from '../components/Hero';
import TopSliders from '../components/TopSliders';
import Services from '../components/Services';
import AboutSection from '../components/AboutSection';
import TrustedTech from '../components/TrustedTech';
import Solutions from '../components/Solutions';


export default function Home() {
  return (
    <>
      <Head>
        <title>Horizon Relevance</title>
        <meta
          name="description"
          content="Empowering the Future with Cloud, AI & DevSecOps"
        />
      </Head>

      {/* Top: 4 sliders */}
      <TopSliders />
      {/* <Hero /> */}
      
      <Services />

      <AboutSection />
      <TrustedTech />
      <Solutions />

    </>
  );
}