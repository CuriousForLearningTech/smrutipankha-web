import Navbar from "./components/Navbar";
import React from "react";
import Hero from "./components/Hero";
import FeaturesSection from "./components/Features";
import AboutSection from "./components/Aboutus";
import HowItWorks from "./components/SystemWorking";
import Testimonials from "./components/Testimonials";
import FAQSection from "./components/FAQs";
import ContactForm from "./components/Contact";
import Footer from "./components/Footer";
import ResearchSection from "./components/Research";

function App() {
  return (
    <div className="bg-purple-50">
      <div>
        <Navbar />
      </div>
      <Hero />
      <FeaturesSection />
      <ResearchSection />
      <AboutSection />
      <HowItWorks />
      <Testimonials />
      <FAQSection />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
