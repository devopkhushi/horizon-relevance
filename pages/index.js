import Head from 'next/head';
// import Hero from '../components/Hero';

import TopSliders from '../components/TopSliders';
import WhyChooseSection from "../components/WhyChooseSection";
// import HeroScene from "../components/HeroScene"; // ADD THIS
import Services from '../components/Services';
import AboutSection from '../components/AboutSection';
import TrustedTech from '../components/TrustedTech';
import PartnersMarquee from '../components/PartnersMarquee';
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

      {/* Existing slider (same position) */}
      <TopSliders />

      {/* Why Horizon */}
      <WhyChooseSection />
      {/* Partners */}
      <PartnersMarquee />

      {/* 3D Cloud Animation Section */}
      {/* <HeroScene /> */}

      {/* spacing */}
      <div className="mt-[100px]" />

      {/* Services */}
      <Services />

      {/* About */}
      <AboutSection />

      {/* Technology */}
      <TrustedTech />


      {/* Solutions */}
      <Solutions />

    </>
  );
}