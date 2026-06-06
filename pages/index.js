import Head from "next/head";
import NoiseOverlay from "@/components/backgrounds/NoiseOverlay";
import Navbar from "@/components/home/Navbar";
import HeroSection from "@/components/home/HeroSection";
import ResponsiveWebDesignFeature from "@/components/home/ResponsiveWebDesignFeature";
import UXUI from "@/components/home/UXUI";
import WebDesignProcess from "@/components/home/WebDesignProcess";
import SEOWebDesignService from "@/components/home/SEOWebDesignService";
import SEODigitalMarketing from "@/components/home/SEODigitalMarketing";
import Portfolio from "@/components/home/Portfolio";
import WebsiteAudit from "@/components/home/WebsiteAudit";
import WebDesignClients from "@/components/home/WebDesignClients";
import ReviewCarousel from "@/components/home/ReviewCarousel";
import Consultation from "@/components/home/Consultation";
import FAQs from "@/components/home/FAQs";
import WhatWeCouldDo from "@/components/home/WhatWeCouldDo";
import Footer from "@/components/home/Footer";

export default function HomePage() {

  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="/assets/gb-32x32.png" />
        <link rel="shortcut icon" href="/assets/gb-32x32.png" />
      </Head>

      <main className="min-h-screen overflow-x-hidden text-[#333]">
        <Navbar />
        <HeroSection />
        <ResponsiveWebDesignFeature />
        <UXUI />
        <WebDesignProcess />
        <SEOWebDesignService />
        <SEODigitalMarketing />
        <Portfolio />
        <WebsiteAudit />
        <WebDesignClients />
        <ReviewCarousel />
        <Consultation />
        <FAQs />
        <WhatWeCouldDo />
        <Footer />
      </main>

      <NoiseOverlay />
    </>
  );
}
