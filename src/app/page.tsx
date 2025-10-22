import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Carousel from "@/components/Carousel";
import Tagline from "@/components/Tagline";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";
import Testimonials from "@/components/Testimonials";
import AboutUs from "@/components/AboutUs";
import ContactUs from "@/components/ContactUs";
import PartnersSection from "@/components/PartnersSection";
import GlobalPresence from "@/components/GlobalPresence";
import Pipeline from "@/components/Pipeline";
import FAQ from "@/components/FAQ";

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      {/* <SectionDivider /> */}
      <div className="section">
        <div className="container">
          <Carousel />
        </div>
      </div>
      {/* <Tagline /> */}
      <Pipeline />
      <Services />
      <Testimonials />
      <AboutUs />
      <ContactUs />
      <PartnersSection />
      <GlobalPresence />
      <FAQ />
      <Footer />
    </main>
  );
}
